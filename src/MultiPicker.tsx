import React from 'react';
import classnames from 'classnames';
import reactMixin from 'react-mixin';
import Picker from './Picker';
import MultiPickerProps from './MultiPickerProps';
import MultiPickerMixin from './MultiPickerMixin';

class MultiPicker extends React.Component<MultiPickerProps, any> {
  getValue: () => any;
  onValueChange: (i: number) => any;

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
            onValueChange={this.onValueChange.bind(this, i)}
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
  }
}

reactMixin.onClass(MultiPicker, MultiPickerMixin);

export default MultiPicker;
