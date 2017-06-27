import React from 'react';
import classnames from 'classnames';
import createClass from 'create-react-class';
import MultiPickerProps from './MultiPickerProps';
import MultiPickerMixin from './MultiPickerMixin';

const MultiPicker = createClass<MultiPickerProps, any>({
  mixins: [MultiPickerMixin],
  render() {
    const {
      prefixCls,
      className,
      rootNativeProps,
      children,
    } = this.props;
    const selectedValue = this.getValue();
    const colElements = React.Children.map(children, (col: any, i) => {
      return React.cloneElement(col, {
        selectedValue: selectedValue[i],
        onValueChange: (...args) => this.onValueChange(i, ...args),
      });
    });
    return (
      <div
        {...rootNativeProps}
        style={this.props.style}
        className={classnames(className, prefixCls)}
      >
        {colElements}
      </div>
    );
  },
});

export default MultiPicker;
