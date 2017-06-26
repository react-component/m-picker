import React from 'react';
import createClass from 'create-react-class';
import { View, StyleSheet } from 'react-native';
import Picker from './Picker';
import MultiPickerProps from './MultiPickerProps';
import MultiPickerMixin from './MultiPickerMixin';

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  root: {
    flexDirection: 'row' as any,
    alignItems: 'center' as any,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

const MultiPicker = createClass<MultiPickerProps, any>({
  mixins: [MultiPickerMixin],

  render() {
    const props = this.props;
    const {
      disabled, pickerItemStyle,
      pure, children, style,
    } = props;
    const selectedValue = this.getValue();
    const colElements = children.map((col, i) => {
      return (
        <View key={col.key || i} style={styles.item}>
          <Picker
            itemStyle={pickerItemStyle}
            disabled={disabled}
            pure={pure}
            selectedValue={selectedValue[i]}
            onValueChange={(...args) => this.onValueChange(i, ...args)}
            {...col.props}
          />
        </View>
      );
    });
    return (
      <View style={[styles.root, style]}>
        {colElements}
      </View>
    );
  },
});

export default MultiPicker;
