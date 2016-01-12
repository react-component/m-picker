webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(171);


/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	/* eslint no-console:0 */
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _rmcPicker = __webpack_require__(162);
	
	var _rmcPicker2 = _interopRequireDefault(_rmcPicker);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(161);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var count = 0;
	var len = 10;
	
	var Test = _react2['default'].createClass({
	  displayName: 'Test',
	
	  getInitialState: function getInitialState() {
	    return {
	      items: this.getItems(count),
	      value: count + ''
	    };
	  },
	  onChange: function onChange(value) {
	    console.log('onChange', value);
	    this.setState({ value: value });
	  },
	  getItems: function getItems(start) {
	    var items = [];
	    for (var i = start; i < start + len; i++) {
	      items.push({
	        value: i + '',
	        label: 'content ' + i
	      });
	    }
	    return items;
	  },
	  rerender: function rerender() {
	    count += len;
	    var items = this.getItems(count);
	    this.setState({
	      items: items,
	      value: count + ''
	    });
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { style: { border: '1px solid black', padding: 10 } },
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.rerender },
	        'rerender'
	      ),
	      _react2['default'].createElement(
	        _rmcPicker2['default'],
	        { selectedValue: this.state.value, onValueChange: this.onChange },
	        this.state.items
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(Test, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map