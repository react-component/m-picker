import '../assets/index.less';
import expect from 'expect.js';
import TestUtils from 'react-dom/test-utils';
// tslint:disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import Picker from '../src/index';

function offsetTop(el) {
  return el.getBoundingClientRect().top;
}

function isEq(t1, t2) {
  return Math.abs(t1 - t2) < 10;
}

describe('m-picker', () => {
  let div;
  let component;
  let indicator;
  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
    component = ReactDOM.render(<Picker noAnimate>
      <Picker.Item value="1">a</Picker.Item>
      <Picker.Item value="2">b</Picker.Item>
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
    ReactDOM.render(<Picker selectedValue="2" noAnimate>
      <Picker.Item value="1">a</Picker.Item>
      <Picker.Item value="2">b</Picker.Item>
    </Picker>, div);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(component,
      'rmc-picker-item').length).to.be(2);
    expect(isEq(offsetTop(indicator),
      offsetTop(TestUtils.scryRenderedDOMComponentsWithClass(component,
        'rmc-picker-item')[1]))).to.be(true);
  });
});
