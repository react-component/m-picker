import React from 'react';
import NativePicker from './NativePicker';
import { IPickerProps } from './PickerTypes';
import isChildrenEqual from './isChildrenEqual';

const Item = (NativePicker as any).Item;

class Picker extends React.Component<IPickerProps, {}> {
  static defaultProps = {
    children: [],
  };

  static Item() {
  }

  getValue() {
    return this.props.selectedValue ||
      this.props.children && this.props.children[0] && this.props.children[0].props.value;
  }

  shouldComponentUpdate(nextProps: any) {
    return this.props.selectedValue !== nextProps.selectedValue
      || !isChildrenEqual(this.props.children, nextProps.children);
  }

  render() {
    const children = React.Children.map(this.props.children, (c: any) => {
      return <Item label={c.props.label} key={c.props.value + ''}/>;
    });
    return <NativePicker {...this.props}>{children}</NativePicker>;
  }
}

export default Picker;
