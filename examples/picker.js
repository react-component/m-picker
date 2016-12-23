webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(233);


/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _Picker = __webpack_require__(74);
	
	var _Picker2 = _interopRequireDefault(_Picker);
	
	var _react = __webpack_require__(42);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(87);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* tslint:disable:no-console */
	var count = 0;
	var len = 10;
	var Test = _react2.default.createClass({
	    displayName: 'Test',
	    getInitialState: function getInitialState() {
	        return {
	            disabled: false,
	            items: this.getItems(count),
	            value: '' + count
	        };
	    },
	    onChange: function onChange(value) {
	        console.log('onChange', value);
	        this.setState({
	            value: value
	        });
	    },
	    disable: function disable() {
	        this.setState({
	            disabled: !this.state.disabled
	        });
	    },
	    getItems: function getItems(start) {
	        var items = [];
	        for (var i = start; i < start + len; i++) {
	            items.push({
	                value: String(i),
	                label: count + ' ' + i
	            });
	        }
	        return items;
	    },
	    rerender: function rerender() {
	        count += len;
	        var items = this.getItems(count);
	        this.setState({
	            items: items,
	            value: String(count)
	        });
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { style: { border: '1px solid black', padding: 10 } },
	            _react2.default.createElement(
	                'button',
	                { onClick: this.rerender },
	                'rerender'
	            ),
	            '\xA0',
	            _react2.default.createElement(
	                'button',
	                { onClick: this.disable },
	                this.state.disabled ? 'enable' : 'disable'
	            ),
	            _react2.default.createElement(
	                _Picker2.default,
	                { selectedValue: this.state.value, disabled: this.state.disabled, onValueChange: this.onChange },
	                this.state.items
	            )
	        );
	    }
	});
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=picker.js.map