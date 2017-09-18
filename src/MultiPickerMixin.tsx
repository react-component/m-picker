import React from 'react';
import MultiPickerProps from './MultiPickerProps';

export default function(ComposedComponent) {
  return class extends React.Component<MultiPickerProps, any> {
    static defaultProps = {
      prefixCls: 'rmc-multi-picker',
      onValueChange() {
      },
    };

    getValue = () => {
      const { children, selectedValue } = this.props;
      if (selectedValue && selectedValue.length) {
        return selectedValue;
      } else {
        if (!children) {
          return [];
        }
        return React.Children.map(children, (c: any) => {
          const cc: any = React.Children.toArray(c.children || c.props.children);
          return cc && cc[0] && cc[0].props.value;
        });
      }
    }

    onValueChange = (i, v) => {
      const value = this.getValue().concat();
      value[i] = v;
      this.props.onValueChange!(value, i);
    }

    render() {
      return (
        <ComposedComponent {...this.props} getValue={this.getValue} onValueChange={this.onValueChange} />
      );
    }
  };
};
