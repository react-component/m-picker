import React from 'react';
import NativePicker from './NativePicker';
import { IPickerProps } from './PickerTypes';
import isChildrenEqual from './isChildrenEqual';

const Item = (NativePicker as any).Item;

const Picker = React.createClass<IPickerProps, {}>({
  getDefaultProps() {
    return {
      pure: true,
      children: [],
    };
  },

  getValue() {
    return this.props.selectedValue || this.props.children && this.props.children[0] && this.props.children[0].value;
  },

  shouldComponentUpdate(nextProps) {
    return this.props.selectedValue !== nextProps.selectedValue
      || !isChildrenEqual(this.props.children, nextProps.children, this.props.pure);
  },

  render() {
    const children = this.props.children.map((c) => {
      return <Item {...c} key={c.value + ''}/>;
    });
    return <NativePicker {...this.props}>{children}</NativePicker>;
  },
});

export  default Picker;
