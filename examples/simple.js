webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(168);


/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	// use jsx to render html, do not modify simple.html
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _rmcCascadeSelect = __webpack_require__(161);
	
	var _rmcCascadeSelect2 = _interopRequireDefault(_rmcCascadeSelect);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(160);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var createData = function createData(id, tail) {
	  var arr = [];
	  for (var i = 0; i < 15; i++) {
	    var val = id + '-' + i;
	    arr.push({ value: val, name: val + '-' + tail });
	  }
	  return arr;
	};
	
	var gData = [[], [], []];
	gData[0] = createData(1, '省');
	gData[1] = createData(2, '市');
	// gData[2] = createData(2, '区');
	
	var Demo = _react2['default'].createClass({
	  displayName: 'Demo',
	
	  propTypes: {},
	  getInitialState: function getInitialState() {
	    return {
	      value: ['1-2']
	    };
	  },
	  onOpen: function onOpen(info) {
	    console.log(info);
	  },
	  onClose: function onClose(info) {
	    console.log(info);
	  },
	  onOk: function onOk(info) {
	    console.log(info);
	  },
	  onCancel: function onCancel(info) {
	    console.log(info);
	  },
	  onChange: function onChange(info) {
	    console.log('value changed', info);
	    this.setState({
	      value: info.value
	    });
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { style: { margin: '10px 30px' } },
	      _react2['default'].createElement(
	        _rmcCascadeSelect2['default'],
	        {
	          data: gData, value: this.state.value,
	          onOk: this.onOk, onCancel: this.onCancel,
	          onChange: this.onChange },
	        _react2['default'].createElement(
	          'button',
	          null,
	          'trigger'
	        )
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map