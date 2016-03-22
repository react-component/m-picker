/**
 * only require other specs here
 */
import '../assets/index.less';
import expect from 'expect.js';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Picker from 'rmc-picker';

function offsetTop(el) {
  return el.getBoundingClientRect().top;
}

function isEq(t1, t2) {
  return Math.abs(t1 - t2) < 10;
}

describe('m-picker', () => {
  const items = [
    {
      value: '1',
      label: 'a',
    },
    {
      value: '2',
      label: 'b',
    },
  ];
  let div;
  let component;
  let indicator;
  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
    component = ReactDOM.render(<Picker>
      {items}
    </Picker>, div);
    indicator = TestUtils.scryRenderedDOMComponentsWithClass(component,
      'rmc-picker-indicator')[0];
  });
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });
  it('render works', () => {
    expect(TestUtils.scryRenderedDOMComponentsWithClass(component,
      'rmc-picker-item').length).to.be(2);
    expect(isEq(offsetTop(indicator),
      offsetTop(TestUtils.scryRenderedDOMComponentsWithClass(component,
        'rmc-picker-item')[0]))).to.be(true);
  });
  it('selectedValue works', () => {
    ReactDOM.render(<Picker selectedValue="2">
      {items}
    </Picker>, div);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(component,
      'rmc-picker-item').length).to.be(2);
    expect(isEq(offsetTop(indicator),
      offsetTop(TestUtils.scryRenderedDOMComponentsWithClass(component,
        'rmc-picker-item')[1]))).to.be(true);
  });
});
