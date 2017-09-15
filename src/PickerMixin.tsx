/* tslint:disable:no-console */
import React from 'react';

export default function (ComposedComponent) {
  return class extends React.Component<any, any> {
    select = (value, itemHeight, scrollTo) => {
      const children: any = React.Children.toArray(this.props.children);
      for (let i = 0, len = children.length; i < len; i++) {
        if (children[i].props.value === value) {
          this.selectByIndex(i, itemHeight);
          return;
        }
      }
      this.selectByIndex(0, itemHeight);
    }

    selectByIndex(index, itemHeight) {
      if (index < 0 || index >= React.Children.count(this.props.children) || !itemHeight) {
        return;
      }
      scrollTo(index * itemHeight, 0);
    }

    doScrollingComplete = (top, itemHeight, fireValueChange) => {
      let index = top / itemHeight;
      const floor = Math.floor(index);
      if (index - floor > 0.5) {
        index = floor + 1;
      } else {
        index = floor;
      }
      const children = React.Children.toArray(this.props.children);
      index = Math.min(index, children.length - 1);
      const child: any = children[index];
      if (child) {
        fireValueChange(child.props.value);
      } else if (console.warn) {
        console.warn('child not found', children, index);
      }
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          doScrollingComplete={this.doScrollingComplete}
          select={this.select}
        />
      );
    }
  }
}
