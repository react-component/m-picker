import * as React from 'react';
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

    onChange = (i, v, cb) => {
      const value = this.getValue().concat();
      value[i] = v;
      if (cb) {
        cb(value, i);
      }
    }

    onValueChange = (i, v) => {
      this.onChange(i, v, this.props.onValueChange);
    }

    onScrollChange = (i, v) => {
      this.onChange(i, v, this.props.onScrollChange);
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          getValue={this.getValue}
          onValueChange={this.onValueChange}
          onScrollChange={this.props.onScrollChange && this.onScrollChange}
        />
      );
    }
  };
};
