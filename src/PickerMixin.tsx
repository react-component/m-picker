/* tslint:disable:no-console */
import React from 'react';

export default {
  select(value) {
    const children: any = React.Children.toArray(this.props.children);
    for (let i = 0, len = children.length; i < len; i++) {
      if (children[i].props.value === value) {
        this.selectByIndex(i);
        return;
      }
    }
    this.selectByIndex(0);
  },

  selectByIndex(index) {
    if (index < 0 || index >= React.Children.count(this.props.children) || !this.itemHeight) {
      return;
    }
    this.scrollTo(index * this.itemHeight);
  },

  doScrollingComplete(top) {
    let index = top / this.itemHeight;
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
      this.fireValueChange(child.props.value);
    } else if (console.warn) {
      console.warn('child not found', children, index);
    }
  },
};
