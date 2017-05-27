/* tslint:disable:no-console */

import 'rmc-picker/assets/index.less';
import MultiPicker from '../src/MultiPicker';
import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

const cols = [
  {
    key: 'col1',
    props: {
      children: [
        {
          label: 'one',
          value: '1',
        },
        {
          label: 'two',
          value: '2',
        },
      ],
    },
  },
  {
    key: 'col2',
    props: {
      children: [
        {
          label: '一',
          value: '1',
        },
        {
          label: '二',
          value: '2',
        },
      ],
    },
  },
];

const Test = createReactClass({
  getInitialState() {
    return {
      value: ['1', '2'],
    };
  },
  onChange(value) {
    console.log('onChange', value);
    this.setState({
      value,
    });
  },
  render() {
    return (
      <div style={{ border: '1px solid black', padding: 10 }}>
        <MultiPicker
          selectedValue={this.state.value}
          onValueChange={this.onChange}
        >
          {cols}
        </MultiPicker>
      </div>
    );
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
