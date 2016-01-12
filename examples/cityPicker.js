webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/* eslint no-console:0, react/no-multi-comp:0 */
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(161);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rmcPicker = __webpack_require__(162);
	
	var _rmcPicker2 = _interopRequireDefault(_rmcPicker);
	
	var _rmcModal = __webpack_require__(166);
	
	var _rmcModal2 = _interopRequireDefault(_rmcModal);
	
	var _data = __webpack_require__(169);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _arrayTreeFilter = __webpack_require__(170);
	
	var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);
	
	var emptyArray = [];
	
	var modalHeaderStyle = {
	  color: '#0ae',
	  display: '-webkit-flex',
	  'WebkitBoxAlign': 'center',
	  'WebkitAlignItems': 'center',
	  'backgroundImage': '-webkit-linear-gradient(top, #e7e7e7, #e7e7e7, transparent, transparent)',
	  'backgroundPosition': 'bottom',
	  'backgroundSize': '100% 1px',
	  'backgroundRepeat': 'no-repeat'
	};
	
	var containerStyle = {
	  display: '-webkit-flex',
	  WebkitBoxAlign: 'center',
	  padding: '10px 0'
	};
	
	var itemStyle = {
	  WebkitFlex: 1,
	  textAlign: 'center'
	};
	
	var ValueMixin = {
	  propTypes: {
	    cols: _react.PropTypes.number
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      cols: 3
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var data = this.props.data;
	    var value = this.props.defaultValue;
	    if (!value) {
	      value = [];
	      for (var i = 0; i < this.props.cols; i++) {
	        if (data) {
	          value[i] = data[0].value;
	          data = data[0].children;
	        } else {
	          value[i] = undefined;
	        }
	      }
	    }
	    return {
	      value: value
	    };
	  },
	
	  getColArray: function getColArray() {
	    var ret = [];
	    for (var i = 0; i < this.props.cols; i++) {
	      ret[i] = undefined;
	    }
	    return ret;
	  }
	};
	
	var InlinePicker = _react2['default'].createClass({
	  displayName: 'InlinePicker',
	
	  propTypes: {
	    onChange: _react.PropTypes.func,
	    data: _react.PropTypes.any,
	    cols: _react.PropTypes.number
	  },
	  mixins: [ValueMixin],
	  onValueChange: function onValueChange(index, selectNameValue) {
	    var value = this.state.value.concat();
	    value[index] = selectNameValue;
	    var children = (0, _arrayTreeFilter2['default'])(this.props.data, function (c, level) {
	      return level <= index && c.value === value[level];
	    });
	    var data = children[index];
	    for (var i = index + 1; data && data.children && data.children.length && i < value.length; i++) {
	      data = data.children[0];
	      value[i] = data.value;
	    }
	    this.setState({
	      value: value
	    });
	    this.props.onChange(value);
	  },
	  render: function render() {
	    var _this = this;
	
	    var value = this.state.value;
	    var childrenTree = (0, _arrayTreeFilter2['default'])(this.props.data, function (c, level) {
	      return c.value === value[level];
	    }).map(function (c) {
	      return c.children;
	    });
	    childrenTree.length = this.props.cols - 1;
	    childrenTree.unshift(this.props.data);
	    return _react2['default'].createElement(
	      'div',
	      { style: containerStyle },
	      this.getColArray().map(function (v, i) {
	        return _react2['default'].createElement(
	          'div',
	          { key: i, style: itemStyle },
	          _react2['default'].createElement(
	            _rmcPicker2['default'],
	            { selectedValue: value[i], onValueChange: _this.onValueChange.bind(_this, i) },
	            childrenTree[i] || emptyArray
	          )
	        );
	      })
	    );
	  }
	});
	
	var CityPicker = _react2['default'].createClass({
	  displayName: 'CityPicker',
	
	  propTypes: {
	    data: _react.PropTypes.any
	  },
	  mixins: [ValueMixin],
	  getInitialState: function getInitialState() {
	    return {
	      modalVisible: false
	    };
	  },
	  onPickerChange: function onPickerChange(value) {
	    this.pickerValue = value;
	    // this.setState({});// try rerender
	  },
	  onOK: function onOK() {
	    if (this.pickerValue) {
	      this.setState({
	        value: this.pickerValue
	      });
	    }
	    this.hide();
	  },
	  setVisibleState: function setVisibleState(visible) {
	    this.setState({
	      modalVisible: visible
	    });
	  },
	  getSel: function getSel() {
	    var value = this.state.value;
	
	    var treeChildren = (0, _arrayTreeFilter2['default'])(this.props.data, function (c, level) {
	      return c.value === value[level];
	    });
	    return treeChildren.map(function (v) {
	      return v.label;
	    }).join(',');
	  },
	  hide: function hide() {
	    this.pickerValue = null;
	    this.setVisibleState(false);
	  },
	  show: function show() {
	    this.setVisibleState(true);
	  },
	  render: function render() {
	    var value = this.state.value;
	    var popPicker = this.state.modalVisible ? _react2['default'].createElement(
	      _rmcModal2['default'],
	      {
	        style: { left: 0, bottom: 0 },
	        visible: true, onDismiss: this.hide },
	      _react2['default'].createElement(
	        'div',
	        { style: _extends({}, containerStyle, modalHeaderStyle) },
	        _react2['default'].createElement(
	          'div',
	          { style: itemStyle, onClick: this.hide },
	          '取消'
	        ),
	        _react2['default'].createElement('div', { style: itemStyle }),
	        _react2['default'].createElement(
	          'div',
	          { style: itemStyle, onClick: this.onOK },
	          '完成'
	        )
	      ),
	      _react2['default'].createElement(InlinePicker, { defaultValue: value, onChange: this.onPickerChange, data: this.props.data })
	    ) : null;
	
	    return _react2['default'].createElement(
	      'div',
	      { style: { margin: '10px 30px' } },
	      _react2['default'].createElement(
	        'h2',
	        null,
	        'city picker'
	      ),
	      _react2['default'].createElement(
	        'div',
	        null,
	        popPicker,
	        _react2['default'].createElement(
	          'button',
	          { onClick: this.show },
	          this.getSel() || 'please select'
	        )
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(CityPicker, { data: _data2['default'] }), document.getElementById('__react-content'));

/***/ },

/***/ 3:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Modal = __webpack_require__(167);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	exports['default'] = _Modal2['default'];
	module.exports = exports['default'];

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(161);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(168);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Modal = _react2['default'].createClass({
	  displayName: 'Modal',
	
	  propTypes: {
	    prefixCls: _react2['default'].PropTypes.string,
	    animated: _react2['default'].PropTypes.bool,
	    visible: _react2['default'].PropTypes.bool,
	    defaultVisible: _react2['default'].PropTypes.bool,
	    onDismiss: _react2['default'].PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rmc-modal',
	      defaultVisible: false,
	      onDismiss: function onDismiss() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultVisible = _props.defaultVisible;
	    var visible = _props.visible;
	
	    return {
	      visible: 'visible' in this.props ? visible : defaultVisible
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.container = document.createElement('div');
	    document.body.insertBefore(this.container, document.body.firstChild || null);
	    this.componentDidUpdate();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = {};
	    if ('visible' in nextProps) {
	      props.visible = nextProps.visible;
	    }
	    this.setState(props);
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, this.getRender(), this.container);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    _reactDom2['default'].unmountComponentAtNode(this.container);
	    document.body.removeChild(this.container);
	  },
	  getRender: function getRender() {
	    var _wrapperCls, _maskCls;
	
	    var props = this.props;
	
	    var wrapperCls = (_wrapperCls = {}, _defineProperty(_wrapperCls, props.prefixCls + '-wrapper', true), _defineProperty(_wrapperCls, props.prefixCls + '-wrapper-open', this.state.visible), _wrapperCls);
	    var maskCls = (_maskCls = {}, _defineProperty(_maskCls, props.prefixCls + '-mask', true), _defineProperty(_maskCls, props.prefixCls + '-mask-open', this.state.visible), _maskCls);
	
	    return _react2['default'].createElement(
	      'div',
	      { className: (0, _classnames2['default'])(wrapperCls) },
	      _react2['default'].createElement(
	        'div',
	        { className: (0, _classnames2['default'])(props.className, '' + props.prefixCls), style: props.style },
	        props.children
	      ),
	      _react2['default'].createElement('div', { className: (0, _classnames2['default'])(maskCls), onClick: this.hide })
	    );
	  },
	  hide: function hide() {
	    if (!('visible' in this.props)) {
	      this.setState({
	        visible: false
	      });
	    }
	    this.props.onDismiss();
	  },
	  render: function render() {
	    return null;
	  }
	});
	exports['default'] = Modal;
	module.exports = exports['default'];

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 169:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = [{
	  label: '北京',
	  value: '01',
	  children: [{
	    label: '东城区',
	    value: '01-1'
	  }, {
	    label: '西城区',
	    value: '01-2'
	  }, {
	    label: '崇文区',
	    value: '01-3'
	  }, {
	    label: '宣武区',
	    value: '01-4'
	  }]
	}, {
	  label: '浙江',
	  value: '02',
	  children: [{
	    label: '杭州',
	    value: '02-1',
	    children: [{
	      label: '西湖区',
	      value: '02-1-1'
	    }, {
	      label: '上城区',
	      value: '02-1-2'
	    }, {
	      label: '江干区',
	      value: '02-1-3'
	    }, {
	      label: '下城区',
	      value: '02-1-4'
	    }]
	  }, {
	    label: '宁波',
	    value: '02-2',
	    children: [{
	      label: 'xx区',
	      value: '02-2-1'
	    }, {
	      label: 'yy区',
	      value: '02-2-2'
	    }]
	  }, {
	    label: '温州',
	    value: '02-3'
	  }, {
	    label: '嘉兴',
	    value: '02-4'
	  }, {
	    label: '湖州',
	    value: '02-5'
	  }, {
	    label: '绍兴',
	    value: '02-6'
	  }]
	}];
	module.exports = exports['default'];

/***/ },

/***/ 170:
/***/ function(module, exports) {

	function arrayTreeFilter(data, filterFn, options) {
	  options = options || {};
	  options.childrenKeyName = options.childrenKeyName || 'children';
	  var children = data || [];
	  var result = [];
	  var level = 0;
	  var foundItem;
	  do {
	    var foundItem = children.filter(function(item) {
	      return filterFn(item, level);
	    })[0];
	    if (!foundItem) {
	      break;
	    }
	    result.push(foundItem);
	    children = foundItem[options.childrenKeyName] || [];
	    level += 1;
	  } while(children.length > 0);
	  return result;
	}
	
	module.exports = arrayTreeFilter;


/***/ }

});
//# sourceMappingURL=cityPicker.js.map