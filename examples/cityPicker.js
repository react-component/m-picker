import 'rmc-picker/assets/index.less';
import 'rmc-modal/assets/index.css';
import 'rmc-modal/assets/simple.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Picker, { PickerItem } from 'rmc-picker';
import Modal from 'rmc-modal';
const data = require('./data');

const remoteData = [data.province, data.city, data.region];
const gData = [[...data.province], [], []];

function setData(val, index) {
  gData.forEach((item, ind) => {
    if (ind <= index) {
      return;
    } else if (index + 1 === ind) {
      gData[ind] = remoteData[ind].filter((ii) => {
        return ii.value.indexOf(val) === 0;
      });
    } else {
      gData[ind] = [];
    }
  });
}

const CityPicker = React.createClass({
  propTypes: {
    defaultSelectedValues: React.PropTypes.array,
    forceColumnAmount: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  },
  getDefaultProps() {
    return {
      prefixCls: 'rmc-picker',
      modalPrefixCls: 'rmc-modal',
      defaultSelectedValues: [],
      // defaultSelectedValues: ['01', '01-2'],
      // forceColumnAmount: 'auto',
      forceColumnAmount: 3,
    };
  },
  getInitialState() {
    return {
      indexOfPickers: 0,
      sel: '',
      modalVisible: false,
    };
  },
  onDismiss() {
    this.setVisibleState(false);
  },
  onOk() {
    this.setState({sel: this.getSel()});
    this.setVisibleState(false);
  },
  onValueChange(index, selectNameValue) {
    console.log(index, selectNameValue);
    this.value[index] = selectNameValue.value;
    this.setState({
      indexOfPickers: index,
      sel: this.getSel(),
    });
  },
  setVisibleState(visible) {
    this.setState({
      modalVisible: visible,
    });
  },
  getSel() {
    let sel = '';
    this.value.forEach((item, index) => {
      gData[index].forEach((ii) => {
        if (ii.value === item) {
          sel += ii.name + ' ';
        }
      });
    });
    return sel;
  },
  getSelected(arr) {
    // 默认选中第一项
    let sel = arr[0].value || '';
    // 如果数据项中有 selected: true 标记，默认选中第一个标记
    arr.forEach((item) => {
      if (item.selected) {
        sel = item.value;
      }
    });
    // 如果设置了 defaultSelectedValues 属性，从中设置默认值
    arr.forEach((item) => {
      if (this.props.defaultSelectedValues.indexOf(item.value) !== -1) {
        sel = item.value;
      }
    });
    return sel;
  },
  render() {
    const props = this.props;
    const st = this.state;
    const newVal = this.value ? [...this.value] : [];

    // 设置 indexOfPickers 下一条的默认值
    let index = st.indexOfPickers;
    let next = gData[index];
    while (next && next.length) {
      if (index === st.indexOfPickers) {
        newVal[index] = newVal[index] || this.getSelected(next);
      } else {
        newVal[index] = this.getSelected(next);
      }
      setData(newVal[index], index);
      index++;
      next = gData[index];
    }

    // 限制列数，即 scroller 数量
    const forceColumnAmount = this.props.forceColumnAmount;
    if (typeof forceColumnAmount === 'number') {
      for (let i = 0; i < forceColumnAmount; i++) {
        gData[i] = (gData[i] && gData[i].length) ? gData[i] : [{name: '', value: ''}];
      }
      if (gData.length > forceColumnAmount) {
        gData.length = forceColumnAmount;
        newVal.length = forceColumnAmount;
      }
    }

    // make value array lenth equal with data array length
    gData.forEach((item, i) => {
      newVal[i] = newVal[i] || '';
    });

    this.value = newVal;

    const inlinePickers = (<div className={props.modalPrefixCls + '-content'}>
      {gData.map((item, i) => {
        return (<div key={i} className={`${props.modalPrefixCls}-item`}>
            <Picker selectedValue={newVal[i]} onValueChange={this.onValueChange.bind(this, i)}>
              {item.map((it, ii) => {
                return <PickerItem key={ii} value={it.value} name={it.name} />;
              })}
            </Picker>
          </div>);
      })}
    </div>);

    const popPicker = (<Modal visible={this.state.modalVisible} onDismiss={this.onDismiss}>
      <div className={props.modalPrefixCls + '-header'}>
        <div className={props.modalPrefixCls + '-item'} onClick={this.setVisibleState.bind(this, false)}>取消</div>
        <div className={props.modalPrefixCls + '-item'}></div>
        <div className={props.modalPrefixCls + '-item'} onClick={this.onOk}>完成</div>
      </div>
      <div className={props.modalPrefixCls + '-content'}>
        {gData.map((item, i) => {
          return (<div key={i} className={`${props.modalPrefixCls}-item`}>
              <Picker selectedValue={newVal[i]} onValueChange={this.onValueChange.bind(this, i)}>
                {item.map((it, ii) => {
                  return <PickerItem key={ii} value={it.value} name={it.name} />;
                })}
              </Picker>
            </div>);
        })}
      </div>
    </Modal>);

    return (<div style={{margin: '10px 30px'}}>
        <h3>city picker</h3>
        <p>您选择的城市是：{st.sel || this.getSel()}</p>
        <div>
          {inlinePickers}
        </div>
        <div>
          {popPicker}
          <button onClick={this.setVisibleState.bind(this, true)}>open picker</button>
        </div>
      </div>);
  },
});

ReactDOM.render(<CityPicker />, document.getElementById('__react-content'));
