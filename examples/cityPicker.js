/* eslint no-console:0, react/no-multi-comp:0 */

import 'rmc-picker/assets/index.less';
import 'rmc-modal/assets/index.css';
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Picker from 'rmc-picker';
import Modal from 'rmc-modal';
import globalData from './data';
import arrayTreeFilter from 'array-tree-filter';

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

const containerStyle = {
  display: '-webkit-flex',
  WebkitBoxAlign: 'center',
  padding: '10px 0',
};

const itemStyle = {
  WebkitFlex: 1,
  textAlign: 'center',
};

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
    let data = this.props.data;
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

  getColArray() {
    const ret = [];
    for (let i = 0; i < this.props.cols; i++) {
      ret[i] = undefined;
    }
    return ret;
  },
};

const InlinePicker = React.createClass({
  propTypes: {
    onChange: PropTypes.func,
    data: PropTypes.any,
    cols: PropTypes.number,
  },
  mixins: [ValueMixin],
  onValueChange(index, selectNameValue) {
    const value = this.state.value.concat();
    value[index] = selectNameValue;
    const children = arrayTreeFilter(this.props.data, (c, level) => {
      return level <= index && c.value === value[level];
    });
    let data = children[index];
    for (let i = index + 1; data && data.children && data.children.length && i < value.length; i++) {
      data = data.children[0];
      value[i] = data.value;
    }
    this.setState({
      value: value,
    });
    this.props.onChange(value);
  },
  render() {
    const value = this.state.value;
    const childrenTree = arrayTreeFilter(this.props.data, (c, level) => {
      return c.value === value[level];
    }).map(c=>c.children);
    childrenTree.length = this.props.cols - 1;
    childrenTree.unshift(this.props.data);
    return (<div style={containerStyle}>
      {this.getColArray().map((v, i) => {
        return (<div key={i} style={itemStyle}>
          <Picker selectedValue={value[i]} onValueChange={this.onValueChange.bind(this, i)}>
            {childrenTree[i] || emptyArray}
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
    const {value} = this.state;
    const treeChildren = arrayTreeFilter(this.props.data, (c, level)=> {
      return c.value === value[level];
    });
    return treeChildren.map((v)=> {
      return v.label;
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
