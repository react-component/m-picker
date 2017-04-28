import React from 'react';
import classnames from 'classnames';
import Picker from './Picker';
import MultiPickerProps from './MultiPickerProps';
import MultiPickerMixin from './MultiPickerMixin';

const MultiPicker = React.createClass<MultiPickerProps, any>({
  mixins: [MultiPickerMixin],

  render() {
    const props = this.props;
    const {
      prefixCls, pickerPrefixCls,
      className, rootNativeProps,
      disabled, pickerItemStyle,
      indicatorStyle,
      pure, children,
    } = props;
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
  },
});

export default MultiPicker;
