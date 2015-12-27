/* eslint no-console:0 */

import 'rmc-picker/assets/index.less';
import 'rmc-modal/assets/index.css';
import 'rmc-modal/assets/simple.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Picker, { Item as PickerItem } from 'rmc-picker';
import Modal from 'rmc-modal';
const data = require('./data');

const containerStyle = {
  display: '-webkit-flex',
  WebkitBoxAlign: 'center',
  padding: '10px 0',
};

const itemStyle = {
  WebkitFlex: 1,
  textAlign: 'center',
};

function getData(value, index) {
  if (index === 0) {
    return data.province;
  }
  return data[index === 1 ? 'city' : 'region'].filter((c)=> {
    return c.value.indexOf(value) !== -1;
  });
}

function getValues(lv) {
  return lv.map((pair)=> {
    return pair.value;
  });
}

function getLabelByValue(list, value) {
  const ret = list.filter((l)=> {
    return l.value === value;
  })[0];
  return ret && ret.label || '';
}

const CityPicker = React.createClass({
  getInitialState() {
    const province = data.province[0].value;
    const cities = getData(province, 1);
    const regions = getData(getValues(cities)[0], 2);
    return {
      value: [province, getValues(cities)[0], getValues(regions)[0]],
      modalVisible: false,
    };
  },
  onDismiss() {
    this.setVisibleState(false);
  },
  onOk() {
    this.setVisibleState(false);
  },
  onValueChange(index, selectNameValue) {
    const value = this.state.value.concat();
    value[index] = selectNameValue;
    for (let i = index + 1; i < value.length; i++) {
      value[i] = getValues(getData(value[i - 1], i))[0];
    }
    console.log(index, selectNameValue, value);
    this.setState({
      value: value,
    });
  },
  setVisibleState(visible) {
    this.setState({
      modalVisible: visible,
    });
  },
  getSel() {
    return this.state.value.map((v, i)=> {
      let d = data.province;
      if (i === 1) {
        d = data.city;
      } else if (i === 2) {
        d = data.region;
      }
      if (v) {
        return getLabelByValue(d, v);
      }
      return '';
    }).join(',');
  },
  render() {
    const value = this.state.value;

    const inlinePickers = (<div style={containerStyle}>
      {value.map((v, i) => {
        const d = getData(value[i - 1], i);
        return (<div key={i} style={itemStyle}>
          <Picker selectedValue={v} onValueChange={this.onValueChange.bind(this, i)}>
            {d.map((it) => {
              return <PickerItem key={it.value} value={it.value} label={it.label}/>;
            })}
          </Picker>
        </div>);
      })}
    </div>);

    const popPicker = this.state.modalVisible ? (<Modal visible onDismiss={this.onDismiss}>
      <div style={containerStyle}>
        <div style={itemStyle} onClick={this.setVisibleState.bind(this, false)}>取消</div>
        <div style={itemStyle}></div>
        <div style={itemStyle} onClick={this.onOk}>完成</div>
      </div>
      <div style={containerStyle}>
        {value.map((v, i) => {
          const d = getData(value[i - 1], i);
          return (<div key={i} style={itemStyle}>
            <Picker selectedValue={v} onValueChange={this.onValueChange.bind(this, i)}>
              {d.map((it) => {
                return <PickerItem key={it.value} value={it.value} label={it.label}/>;
              })}
            </Picker>
          </div>);
        })}
      </div>
    </Modal>) : null;

    return (<div style={{margin: '10px 30px'}}>
      <h3>city picker</h3>
      <p>您选择的城市是：{this.getSel()}</p>
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
