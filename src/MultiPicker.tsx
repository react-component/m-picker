import React from 'react';
import classnames from 'classnames';
import createClass from 'create-react-class';
import Picker from './Picker';
import MultiPickerProps from './MultiPickerProps';
import MultiPickerMixin from './MultiPickerMixin';

const MultiPicker = createClass<MultiPickerProps, any>({
  mixins: [MultiPickerMixin],
  render() {
    const {
      prefixCls, pickerPrefixCls,
      className, rootNativeProps,
      disabled, pickerItemStyle,
      indicatorStyle,
      pure, children,
    } = this.props;
    const selectedValue = this.getValue();
    const colElements = children.map((col, i) => {
      return (
        <div key={col.key || i} className={`${prefixCls}-item`}>
          <Picker
            itemStyle={pickerItemStyle}
            disabled={disabled}
            pure={pure}
            indicatorStyle={indicatorStyle}
            prefixCls={pickerPrefixCls}
            selectedValue={selectedValue[i]}
            onValueChange={(...args) => this.onValueChange(i, ...args)}
            {...col.props}
          />
        </div>
      );
    });
    return (
      <div {...rootNativeProps} className={classnames(className, prefixCls)}>
        {colElements}
      </div>
    );
  },
});

export default MultiPicker;
