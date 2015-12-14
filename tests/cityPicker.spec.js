const expect = require('expect.js');
const React = require('react');
const ReactDOM = require('react-dom');
// const TestUtils = require('react-addons-test-utils');
// const Simulate = TestUtils.Simulate;
const MCascadeSelect = require('../');

describe('simple', function des() {
  let instance;
  let div;
  beforeEach(function() {
    div = document.createElement('div');
    document.body.appendChild(div);
  });
  afterEach(function() {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });

  it('should add css class of root dom node', function() {
    instance = ReactDOM.render(
      <MCascadeSelect className="forTest">
        <button>trigger</button>
      </MCascadeSelect>, div
    );
    expect(ReactDOM.findDOMNode(instance).className.indexOf('forTest') === -1).to.be(true);
  });
});
