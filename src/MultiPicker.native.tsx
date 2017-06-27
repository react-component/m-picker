import React from 'react';
import createClass from 'create-react-class';
import { View } from 'react-native';
import MultiPickerProps from './MultiPickerProps';
import MultiPickerMixin from './MultiPickerMixin';

const MultiPicker = createClass<MultiPickerProps, any>({
  mixins: [MultiPickerMixin],

  render() {
    const props = this.props;
    const {
      children, style,
    } = props;
    const selectedValue = this.getValue();
    const colElements = React.Children.map(children, (col: any, i) => {
      return React.cloneElement(col, {
        selectedValue: selectedValue[i],
        onValueChange: (...args) => this.onValueChange(i, ...args),
      });
    });
    return (
      <View style={style}>
        {colElements}
      </View>
    );
  },
});

export default MultiPicker;
