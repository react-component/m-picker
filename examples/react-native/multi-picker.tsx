/* tslint:disable:no-console */

/* tslint:disable:no-console */

import MultiPicker from '../../src/MultiPicker';
import React from 'react';
import { View } from 'react-native';

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

const Test = React.createClass({
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
      <View style={{ borderWidth: 2, padding: 10 }}>
        <MultiPicker
          selectedValue={this.state.value}
          onValueChange={this.onChange}
        >
          {cols}
        </MultiPicker>
      </View>
    );
  },
});

export const Demo = Test;
export const title = 'multi-picker';
