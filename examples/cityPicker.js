/* eslint no-console:0 */

import 'rmc-picker/assets/index.less';
import 'rmc-modal/assets/index.css';
import 'rmc-modal/assets/simple.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Picker from 'rmc-picker';
import Modal from 'rmc-modal';
import globalData from './data';

const modalHeaderStyle = {
  color: '#0ae',
  display: '-webkit-flex',
  'WebkitBoxAlign': 'center',
  'WebkitAlignItems': 'center',
  'backgroundImage': '-webkit-linear-gradient(top, #e7e7e7, #e7e7e7, transparent, transparent)',
  'backgroundPosition': 'bottom',
  'backgroundSize': '100% 1px',
  'backgroundRepeat': 'no-repeat',
};

function loop(ds, fn) {
  ds.forEach((d)=> {
    fn(d);
    if (d.children) {
      loop(d.children, fn);
    }
  });
}

const dataMap = {};

loop(globalData, (d)=> {
  dataMap[d.value] = d;
});

const containerStyle = {
  display: '-webkit-flex',
  WebkitBoxAlign: 'center',
  padding: '10px 0',
};

const itemStyle = {
  WebkitFlex: 1,
  textAlign: 'center',
};

function getValue0(items) {
  return items && items[0] && items[0].value;
}

const CityPicker = React.createClass({
  getInitialState() {
    const province = globalData[0].value;
    const cities = dataMap[province].children;
    const regions = cities[0].children;
    return {
      value: [province, cities[0].value, getValue0(regions)],
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
      value[i] = getValue0(dataMap[value[i - 1]].children);
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
    return this.state.value.map((v)=> {
      if (v) {
        return dataMap[v].label;
      }
      return '';
    }).join(',');
  },
  render() {
    const value = this.state.value;

    const inlinePickers = (<div style={containerStyle}>
      {value.map((v, i) => {
        const d = i === 0 ? globalData : dataMap[value[i - 1]] && dataMap[value[i - 1]].children;
        return (<div key={i} style={itemStyle}>
          {d ? <Picker selectedValue={v} onValueChange={this.onValueChange.bind(this, i)}>
            {d}
          </Picker> : null}
        </div>);
      })}
    </div>);
    const popPicker = this.state.modalVisible ? (<Modal visible onDismiss={this.onDismiss}>
      <div style={{...containerStyle, ...modalHeaderStyle}}>
        <div style={itemStyle} onClick={this.setVisibleState.bind(this, false)}>取消</div>
        <div style={itemStyle}></div>
        <div style={itemStyle} onClick={this.onOk}>完成</div>
      </div>
      <div style={containerStyle}>
        {value.map((v, i) => {
          const d = i === 0 ? globalData : dataMap[value[i - 1]] && dataMap[value[i - 1]].children;
          return (<div key={i} style={itemStyle}>
            {d ? <Picker selectedValue={v} onValueChange={this.onValueChange.bind(this, i)}>
              {d}
            </Picker> : null}
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
