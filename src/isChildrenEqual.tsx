import React from 'react';

export default function isChildrenEqual(_c1, _c2) {
  if (_c1 === _c1) {
    return true;
  }
  const c1: any = React.Children.toArray(_c1);
  const c2: any = React.Children.toArray(_c2);
  if (c1.length !== c2.length) {
    return false;
  }
  const len = c1.length;
  for (let i = 0; i < len; i++) {
    if (c1[i].props.value !== c2[i].props.value || c1[i].props.children !== c2[i].props.children) {
      return false;
    }
  }
  return true;
}
