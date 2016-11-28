import * as React from 'react';
import NativePicker from './NativePicker';
import { PickerProps } from './PickerTypes';
import isChildrenEqual from './isChildrenEqual';

const Item = (NativePicker as any).Item;

const Picker = React.createClass<PickerProps, {}>({
  getDefaultProps() {
    return {
      pure: true,
      children: [],
    };
  },

  shouldComponentUpdate(nextProps) {
    return this.props.selectedValue !== nextProps.selectedValue
      || !isChildrenEqual(this.props.children, nextProps.children, this.props.pure);
  },

  render() {
    const children = this.props.children.map((c) => {
      return <Item {...c} key={c.value + ''} />;
    });
    return <NativePicker {...this.props}>{children}</NativePicker>;
  },
});

export  default Picker;
