import 'rmc-picker/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Picker from 'rmc-picker';
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
      defaultSelectedValues: [],
      // defaultSelectedValues: ['01', '01-2'],
      // forceColumnAmount: 'auto',
      forceColumnAmount: 3,
    };
  },
  getInitialState() {
    return {
      indexOfScrollers: 0,
      finalSel: '',
      open: true,
    };
  },
  onOpen() {
    this.setOpenState(true);
  },
  onCancel() {
    this.setOpenState(false);
  },
  onOk(info) {
    // console.log(info);
    let finalSel = '';
    info.value.forEach((item, index) => {
      gData[index].forEach((ii) => {
        if (ii.value === item) {
          finalSel += ii.name + ' ';
        }
      });
    });
    this.setState({finalSel: finalSel});
    this.setOpenState(false);
  },
  onChange(value, info) {
    console.log('onChang', value, info);
    const newVal = [...info.preValue];
    newVal[info.indexOfScrollers] = value;
    this.value = newVal;
    this.setState({
      indexOfScrollers: info.indexOfScrollers,
    });
  },
  setOpenState(openSt) {
    this.setState({
      open: openSt,
    });
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
    const st = this.state;
    const newVal = this.value ? [...this.value] : [];

    // 设置 indexOfScrollers 下一条的默认值
    let index = st.indexOfScrollers;
    let next = gData[index];
    while (next && next.length) {
      if (index === st.indexOfScrollers) {
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

    return (<div style={{margin: '10px 30px'}}>
        <h3>city picker</h3>
        <p>您选择的城市是：{st.finalSel}</p>
        <p>
          <Picker
            data={gData} value={newVal}
            onOk={this.onOk} onChange={this.onChange}>
            <button>trigger</button>
          </Picker>
        </p>
        <p>
          <Picker open={this.state.open} onCancel={this.onCancel}
            data={gData} value={newVal}
            onOk={this.onOk} onChange={this.onChange}>
            <button onClick={this.onOpen}>controlled open</button>
          </Picker>
        </p>
      </div>);
  },
});

ReactDOM.render(<CityPicker />, document.getElementById('__react-content'));
