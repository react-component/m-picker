/* eslint no-console:0, react/no-multi-comp:0 */

import 'rmc-picker/assets/index.less';
import 'rmc-modal/assets/index.css';
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Picker from 'rmc-picker';
import Modal from 'rmc-modal';
import globalData from './data';

const emptyArray = [];

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

const ValueMixin = {
  propTypes: {
    cols: PropTypes.number,
  },

  getDefaultProps() {
    return {
      cols: 3,
    };
  },

  getInitialState() {
    const dataMap = {};

    let data = this.props.data;

    loop(data, (d)=> {
      dataMap[d.value] = d;
    });

    this.dataMap = dataMap;

    let value = this.props.defaultValue;

    if (!value) {
      value = [];
      for (let i = 0; i < this.props.cols; i++) {
        if (data) {
          value[i] = data[0].value;
          data = data[0].children;
        } else {
          value[i] = undefined;
        }
      }
    }
    return {
      value,
    };
  },
};

const InlinePicker = React.createClass({
  propTypes: {
    onChange: PropTypes.func,
    data: PropTypes.any,
  },
  mixins: [ValueMixin],
  onValueChange(index, selectNameValue) {
    const value = this.state.value.concat();
    value[index] = selectNameValue;
    for (let i = index + 1; i < value.length; i++) {
      value[i] = getValue0(this.dataMap[value[i - 1]].children);
    }
    this.setState({
      value: value,
    });
    this.props.onChange(value);
  },
  render() {
    const value = this.state.value;
    return (<div style={containerStyle}>
      {value.map((v, i) => {
        const d = i === 0 ? this.props.data : this.dataMap[value[i - 1]] && this.dataMap[value[i - 1]].children;
        return (<div key={i} style={itemStyle}>
          <Picker selectedValue={v} onValueChange={this.onValueChange.bind(this, i)}>
            {d || emptyArray}
          </Picker>
        </div>);
      })}
    </div>);
  },
});

const CityPicker = React.createClass({
  propTypes: {
    data: PropTypes.any,
  },
  mixins: [ValueMixin],
  getInitialState() {
    return {
      modalVisible: false,
    };
  },
  onPickerChange(value) {
    this.pickerValue = value;
    // this.setState({});// try rerender
  },
  onOK() {
    if (this.pickerValue) {
      this.setState({
        value: this.pickerValue,
      });
    }
    this.hide();
  },
  setVisibleState(visible) {
    this.setState({
      modalVisible: visible,
    });
  },
  getSel() {
    return this.state.value.map((v)=> {
      if (v) {
        return this.dataMap[v].label;
      }
      return '';
    }).join(',');
  },
  hide() {
    this.pickerValue = null;
    this.setVisibleState(false);
  },
  show() {
    this.setVisibleState(true);
  },
  render() {
    const value = this.state.value;
    const popPicker = this.state.modalVisible ? (<Modal
      style={{left: 0, bottom: 0}}
      visible onDismiss={this.hide}>
      <div style={{...containerStyle, ...modalHeaderStyle}}>
        <div style={itemStyle} onClick={this.hide}>取消</div>
        <div style={itemStyle}></div>
        <div style={itemStyle} onClick={this.onOK}>完成</div>
      </div>
      <InlinePicker defaultValue={value} onChange={this.onPickerChange} data={this.props.data}/>
    </Modal>) : null;

    return (<div style={{margin: '10px 30px'}}>
      <h2>city picker</h2>
      <div>
        {popPicker}
        <button onClick={this.show}>{this.getSel() || 'please select'}</button>
      </div>
    </div>);
  },
});

ReactDOM.render(<CityPicker data={globalData}/>, document.getElementById('__react-content'));
