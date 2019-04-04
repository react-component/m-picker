import { render } from 'enzyme';
import { html } from 'cheerio';
import * as React from 'react';
import Picker from '../src';

describe('basic', () => {
  it('classnames', () => {
    const wrapper = render(
      <Picker noAnimate={true}>
        <Picker.Item value="1">a</Picker.Item>
        <Picker.Item value="2">b</Picker.Item>
      </Picker>
    );

    expect(html(wrapper)).toMatchSnapshot();

    expect(wrapper.hasClass('rmc-picker')).toBeTruthy();
  });
});
