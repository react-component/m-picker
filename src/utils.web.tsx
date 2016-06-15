import * as ReactDOM from 'react-dom';

export function addEventListener(target, eventType, cb) {
  /* eslint camelcase: 2 */
  const callback = ReactDOM.unstable_batchedUpdates ? function run(e) {
    ReactDOM.unstable_batchedUpdates(cb, e);
  } : cb;
  target.addEventListener(eventType, callback, false);
  return {
    remove() {
      target.removeEventListener(eventType, callback, false);
    },
  };
}

export function contains(root, n) {
  let node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}


export function noop() {
}

export function getComputedStyle(el, key) {
  const computedStyle = window.getComputedStyle(el);
  return computedStyle[key] || '';
}

export function isEmptyArray(a) {
  return !a || !a.length;
}

export function isChildrenEqual(c1, c2, pure) {
  if (isEmptyArray(c1) && isEmptyArray(c2)) {
    return true;
  }
  if (pure) {
    return c1 === c2;
  }
  if (c1.length !== c2.length) {
    return false;
  }
  const len = c1.length;
  for (let i = 0; i < len; i++) {
    if (c1[i].value !== c2[i].value || c1[i].label !== c2[i].label) {
      return false;
    }
  }
  return true;
}
