/**
 * only require other specs here
 */
import '../assets/index.less';
import expect from 'expect.js';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Picker, {Item as PickerItem} from 'rmc-picker';

const paddingSize = 3;

function offsetTop(el) {
  return el.getBoundingClientRect().top;
}

function isEq(t1, t2) {
  return Math.abs(t1 - t2) < 10;
}

describe('m-picker', ()=> {
  let div;
  let component;
  let indicator;
  beforeEach(()=> {
    div = document.createElement('div');
    document.body.appendChild(div);
    component = ReactDOM.render(<Picker>
      <PickerItem label="a" value="1"/>
      <PickerItem label="b" value="2"/>
    </Picker>, div);
    indicator = TestUtils.scryRenderedDOMComponentsWithClass(component, 'rmc-picker-scroller-indicator')[0];
  });
  afterEach(()=> {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });
  it('render works', ()=> {
    expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'rmc-picker-scroller-item').length).to.be(2 + paddingSize * 2);
    expect(isEq(offsetTop(indicator),
      offsetTop(TestUtils.scryRenderedDOMComponentsWithClass(component, 'rmc-picker-scroller-item')[0 + paddingSize]))).to.be(true);
  });
  it('selectedValue works', ()=> {
    ReactDOM.render(<Picker selectedValue="2">
      <PickerItem label="a" value="1"/>
      <PickerItem label="b" value="2"/>
    </Picker>, div);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(component, 'rmc-picker-scroller-item').length).to.be(2 + paddingSize * 2);
    expect(isEq(offsetTop(indicator),
      offsetTop(TestUtils.scryRenderedDOMComponentsWithClass(component, 'rmc-picker-scroller-item')[1 + paddingSize]))).to.be(true);
  });
});
