import * as React from 'react';
import NativePicker from './NativePicker';
import {PickerProps} from './PickerTypes';
import isChildrenEqual from './isChildrenEqual';

export default class Picker extends React.Component<PickerProps, {}> {
  static defaultProps = {
    pure: true,
    children: [],
  };

  shouldComponentUpdate(nextProps) {
    return this.props.selectedValue !== nextProps.selectedValue
      || !isChildrenEqual(this.props.children, nextProps.children, this.props.pure);
  }

  render() {
    const children = this.props.children.map((c) => {
      return <NativePicker.Item {...c} key={c.value + ''}/>;
    });
    return <NativePicker {...this.props}>{children}</NativePicker>;
  }
}
