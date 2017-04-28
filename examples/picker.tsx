/* tslint:disable:no-console */

import 'rmc-picker/assets/index.less';
import Picker from '../src/Picker';
import React from 'react';
import ReactDOM from 'react-dom';

let count = 0;
const len = 10;

const Test = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      items: this.getItems(count),
      value: `${count}`,
    };
  },
  onChange(value) {
    console.log('onChange', value);
    this.setState({
      value,
    });
  },
  disable() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },
  getItems(start) {
    const items: any[] = [];
    for (let i = start; i < start + len; i++) {
      items.push({
        value: String(i),
        label: `${count} ${i}`,
      });
    }
    return items;
  },
  rerender() {
    count += len;
    const items = this.getItems(count);
    this.setState({
      items,
      value: String(count),
    });
  },
  render() {
    return (
      <div style={{ border: '1px solid black', padding: 10 }}>
        <button onClick={this.rerender}>rerender</button>
        &nbsp;
        <button onClick={this.disable}>{this.state.disabled ? 'enable' : 'disable'}</button>
        <Picker
          selectedValue={this.state.value}
          disabled={this.state.disabled}
          onValueChange={this.onChange}
        >
          {this.state.items}
        </Picker>
      </div>
    );
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
