/* eslint no-console:0 */

import 'rmc-picker/assets/index.less';
import Picker from 'rmc-picker';
import React from 'react';
import ReactDOM from 'react-dom';
let count = 0;
const len = 10;

const Test = React.createClass({
  getInitialState() {
    return {
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
  getItems(start) {
    const items = [];
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
    return (<div style={{ border: '1px solid black', padding: 10 }}>
      <button onClick={this.rerender}>rerender</button>
      <Picker selectedValue={this.state.value} onValueChange={this.onChange}>
        {this.state.items}
      </Picker>
    </div>);
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
