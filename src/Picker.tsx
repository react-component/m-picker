import * as React from 'react';
import Picker from './NativePicker';
import {PickerProps} from './PickerTypes';
import isChildrenEqual from './isChildrenEqual';

export default class PickerIOS extends React.Component<PickerProps, {}> {
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
      return <Picker.Item {...c} key={c.value + ''}/>;
    });
    return <Picker {...this.props}>{children}</Picker>;
  }
}
