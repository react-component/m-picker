webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(231);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _Picker = __webpack_require__(232);
	
	var _Picker2 = _interopRequireDefault(_Picker);
	
	var _react = __webpack_require__(4);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint no-console:0 */
	var count = 0;
	var len = 10;
	var Test = React.createClass({
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
	        return React.createElement(
	            'div',
	            { style: { border: '1px solid black', padding: 10 } },
	            React.createElement(
	                'button',
	                { onClick: this.rerender },
	                'rerender'
	            ),
	            ' ',
	            React.createElement(
	                'button',
	                { onClick: this.disable },
	                this.state.disabled ? 'enable' : 'disable'
	            ),
	            React.createElement(
	                _Picker2.default,
	                { itemStyle: { lineHeight: '34px' }, selectedValue: this.state.value, disabled: this.state.disabled, onValueChange: this.onChange },
	                this.state.items
	            )
	        );
	    }
	});
	ReactDOM.render(React.createElement(Test, null), document.getElementById('__react-content'));

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(233);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _react = __webpack_require__(4);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames = __webpack_require__(237);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _isChildrenEqual = __webpack_require__(238);
	
	var _isChildrenEqual2 = _interopRequireDefault(_isChildrenEqual);
	
	var _zscroller = __webpack_require__(239);
	
	var _zscroller2 = _interopRequireDefault(_zscroller);
	
	var _objectAssign = __webpack_require__(7);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Picker = React.createClass({
	    displayName: 'Picker',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            prefixCls: 'rmc-picker',
	            pure: true,
	            visibleItemCount: 7,
	            itemHeight: 34,
	            itemStyle: {},
	            onValueChange: function onValueChange() {}
	        };
	    },
	    getInitialState: function getInitialState() {
	        var selectedValueState = void 0;
	        var _props = this.props;
	        var selectedValue = _props.selectedValue;
	        var defaultSelectedValue = _props.defaultSelectedValue;
	        var children = _props.children;
	
	        if (selectedValue !== undefined) {
	            selectedValueState = selectedValue;
	        } else if (defaultSelectedValue !== undefined) {
	            selectedValueState = defaultSelectedValue;
	        } else if (children.length) {
	            selectedValueState = children[0].value;
	        }
	        return {
	            selectedValue: selectedValueState
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        this.zscroller = new _zscroller2.default(this.refs.content, {
	            scrollingX: false,
	            snapping: true,
	            penetrationDeceleration: .1,
	            minVelocityToKeepDecelerating: 0.5,
	            scrollingComplete: this.scrollingComplete
	        });
	        this.zscroller.scroller.setSnapSize(0, this.props.itemHeight);
	        this.select(this.state.selectedValue);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if ('selectedValue' in nextProps) {
	            this.setState({
	                selectedValue: nextProps.selectedValue
	            });
	        }
	        this.zscroller.disabled = nextProps.disabled;
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	        return this.state.selectedValue !== nextState.selectedValue || !(0, _isChildrenEqual2.default)(this.props.children, nextProps.children, this.props.pure);
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        this.select(this.state.selectedValue);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.zscroller.destroy();
	    },
	    selectByIndex: function selectByIndex(index) {
	        if (index < 0 || index >= this.props.children.length) {
	            return;
	        }
	        this.zscroller.scroller.scrollTo(0, index * this.props.itemHeight);
	    },
	    select: function select(value) {
	        var children = this.props.children;
	        for (var i = 0, len = children.length; i < len; i++) {
	            if (children[i].value === value) {
	                this.selectByIndex(i);
	                return;
	            }
	        }
	        this.selectByIndex(0);
	    },
	    fireValueChange: function fireValueChange(selectedValue) {
	        if (selectedValue !== this.state.selectedValue) {
	            if (!('selectedValue' in this.props)) {
	                this.setState({
	                    selectedValue: selectedValue
	                });
	            }
	            this.props.onValueChange(selectedValue);
	        }
	    },
	    scrollingComplete: function scrollingComplete() {
	        var _zscroller$scroller$g = this.zscroller.scroller.getValues();
	
	        var top = _zscroller$scroller$g.top;
	
	        var index = Math.round((top - this.props.itemHeight / 2) / this.props.itemHeight);
	        var child = this.props.children[index];
	        if (child) {
	            this.fireValueChange(child.value);
	        }
	    },
	    render: function render() {
	        var _this = this,
	            _pickerCls;
	
	        var _props2 = this.props;
	        var children = _props2.children;
	        var prefixCls = _props2.prefixCls;
	        var className = _props2.className;
	        var itemHeight = _props2.itemHeight;
	        var visibleItemCount = _props2.visibleItemCount;
	
	        if (visibleItemCount % 2 !== 1) {
	            throw new Error('picker visibleItemCount must be odd');
	        }
	        var selectedValue = this.state.selectedValue;
	
	        var itemClassName = prefixCls + '-item';
	        var selectedItemClassName = itemClassName + ' ' + prefixCls + '-item-selected';
	        var items = children.map(function (item) {
	            var itemStyle = (0, _objectAssign2.default)({
	                height: itemHeight
	            }, _this.props.itemStyle);
	            return React.createElement(
	                'div',
	                { className: selectedValue === item.value ? selectedItemClassName : itemClassName, key: item.value, style: itemStyle },
	                item.label
	            );
	        });
	        var pickerCls = (_pickerCls = {}, (0, _defineProperty3.default)(_pickerCls, className, !!className), (0, _defineProperty3.default)(_pickerCls, prefixCls, true), _pickerCls);
	        var padding = (visibleItemCount - 1) / 2 * itemHeight;
	        return React.createElement(
	            'div',
	            { className: (0, _classnames2.default)(pickerCls), style: {
	                    height: visibleItemCount * itemHeight
	                } },
	            React.createElement('div', { className: prefixCls + '-mask' }),
	            React.createElement('div', { className: prefixCls + '-indicator', ref: 'indicator', style: {
	                    top: padding,
	                    height: itemHeight
	                } }),
	            React.createElement(
	                'div',
	                { className: prefixCls + '-content', ref: 'content', style: {
	                        padding: padding + 'px 0'
	                    } },
	                items
	            )
	        );
	    }
	});
	exports.default = Picker;
	module.exports = exports['default'];

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(234);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(235), __esModule: true };

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236);
	var $Object = __webpack_require__(184).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(182);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(192), 'Object', {defineProperty: __webpack_require__(188).f});

/***/ },
/* 237 */
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
/* 238 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isEmptyArray = isEmptyArray;
	exports.default = isChildrenEqual;
	function isEmptyArray(a) {
	    return !a || !a.length;
	}
	function isChildrenEqual(c1, c2, pure) {
	    if (isEmptyArray(c1) && isEmptyArray(c2)) {
	        return true;
	    }
	    if (pure) {
	        return c1 === c2;
	    }
	    if (c1.length !== c2.length) {
	        return false;
	    }
	    var len = c1.length;
	    for (var i = 0; i < len; i++) {
	        if (c1[i].value !== c2[i].value || c1[i].label !== c2[i].label) {
	            return false;
	        }
	    }
	    return true;
	}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(240);

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends2 = __webpack_require__(241);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Scroller = __webpack_require__(279);
	var MIN_INDICATOR_SIZE = 8;
	
	function setTransform(nodeStyle, value) {
	  nodeStyle.transform = value;
	  nodeStyle.webkitTransform = value;
	  nodeStyle.MozTransform = value;
	}
	
	function setTransformOrigin(nodeStyle, value) {
	  nodeStyle.transformOrigin = value;
	  nodeStyle.webkitTransformOrigin = value;
	  nodeStyle.MozTransformOrigin = value;
	}
	
	function DOMScroller(content) {
	  var _this = this;
	
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var scrollbars = void 0;
	  var indicators = void 0;
	  var indicatorsSize = void 0;
	  var scrollbarsSize = void 0;
	  var indicatorsPos = void 0;
	  var scrollbarsOpacity = void 0;
	  var contentSize = void 0;
	  var clientSize = void 0;
	
	  this.content = content;
	  this.container = content.parentNode;
	  this.options = (0, _extends3.default)({}, options, {
	    scrollingComplete: function scrollingComplete() {
	      _this.clearScrollbarTimer();
	      _this.timer = setTimeout(function () {
	        if (options.scrollingComplete) {
	          options.scrollingComplete();
	        }
	        if (scrollbars) {
	          ['x', 'y'].forEach(function (k) {
	            if (scrollbars[k]) {
	              _this.setScrollbarOpacity(k, 0);
	            }
	          });
	        }
	      }, 0);
	    }
	  });
	
	  if (this.options.scrollbars) {
	    scrollbars = this.scrollbars = {};
	    indicators = this.indicators = {};
	    indicatorsSize = this.indicatorsSize = {};
	    scrollbarsSize = this.scrollbarsSize = {};
	    indicatorsPos = this.indicatorsPos = {};
	    scrollbarsOpacity = this.scrollbarsOpacity = {};
	    contentSize = this.contentSize = {};
	    clientSize = this.clientSize = {};
	
	    ['x', 'y'].forEach(function (k) {
	      var optionName = k === 'x' ? 'scrollingX' : 'scrollingY';
	      if (_this.options[optionName] !== false) {
	        scrollbars[k] = document.createElement('div');
	        scrollbars[k].className = 'zscroller-scrollbar-' + k;
	        indicators[k] = document.createElement('div');
	        indicators[k].className = 'zscroller-indicator-' + k;
	        scrollbars[k].appendChild(indicators[k]);
	        indicatorsSize[k] = -1;
	        scrollbarsOpacity[k] = 0;
	        indicatorsPos[k] = 0;
	        _this.container.appendChild(scrollbars[k]);
	      }
	    });
	  }
	
	  var init = true;
	  var contentStyle = content.style;
	
	  // create Scroller instance
	  this.scroller = new Scroller(function (left, top, zoom) {
	    setTransform(contentStyle, 'translate3d(' + -left + 'px,' + -top + 'px,0) scale(' + zoom + ')');
	    if (scrollbars) {
	      ['x', 'y'].forEach(function (k) {
	        if (scrollbars[k]) {
	          var pos = k === 'x' ? left : top;
	          if (clientSize[k] >= contentSize[k]) {
	            _this.setScrollbarOpacity(k, 0);
	          } else {
	            if (!init) {
	              _this.setScrollbarOpacity(k, 1);
	            }
	            var normalIndicatorSize = clientSize[k] / contentSize[k] * scrollbarsSize[k];
	            var size = normalIndicatorSize;
	            var indicatorPos = void 0;
	            if (pos < 0) {
	              size = Math.max(normalIndicatorSize + pos, MIN_INDICATOR_SIZE);
	              indicatorPos = 0;
	            } else if (pos > contentSize[k] - clientSize[k]) {
	              size = Math.max(normalIndicatorSize + contentSize[k] - clientSize[k] - pos, MIN_INDICATOR_SIZE);
	              indicatorPos = scrollbarsSize[k] - size;
	            } else {
	              indicatorPos = pos / contentSize[k] * scrollbarsSize[k];
	            }
	            _this.setIndicatorSize(k, size);
	            _this.setIndicatorPos(k, indicatorPos);
	          }
	        }
	      });
	    }
	    init = false;
	  }, this.options);
	
	  // bind events
	  this.bindEvents();
	
	  // the content element needs a correct transform origin for zooming
	  setTransformOrigin(content.style, 'left top');
	
	  // reflow for the first time
	  this.reflow();
	}
	
	DOMScroller.prototype.setDisabled = function setDisabled(disabled) {
	  this.disabled = disabled;
	};
	
	DOMScroller.prototype.clearScrollbarTimer = function clearScrollbarTimer() {
	  if (this.timer) {
	    clearTimeout(this.timer);
	    this.timer = null;
	  }
	};
	
	DOMScroller.prototype.setScrollbarOpacity = function setScrollbarOpacity(axis, opacity) {
	  if (this.scrollbarsOpacity[axis] !== opacity) {
	    this.scrollbars[axis].style.opacity = opacity;
	    this.scrollbarsOpacity[axis] = opacity;
	  }
	};
	
	DOMScroller.prototype.setIndicatorPos = function setIndicatorPos(axis, value) {
	  if (this.indicatorsPos[axis] !== value) {
	    if (axis === 'x') {
	      setTransform(this.indicators[axis].style, 'translate3d(' + value + 'px,0,0)');
	    } else {
	      setTransform(this.indicators[axis].style, 'translate3d(0, ' + value + 'px,0)');
	    }
	    this.indicatorsPos[axis] = value;
	  }
	};
	
	DOMScroller.prototype.setIndicatorSize = function setIndicatorSize(axis, value) {
	  if (this.indicatorsSize[axis] !== value) {
	    this.indicators[axis].style[axis === 'x' ? 'width' : 'height'] = value + 'px';
	    this.indicatorsSize[axis] = value;
	  }
	};
	
	DOMScroller.prototype.reflow = function reflow() {
	  if (this.scrollbars) {
	    this.contentSize.x = this.content.offsetWidth;
	    this.contentSize.y = this.content.offsetHeight;
	    this.clientSize.x = this.container.clientWidth;
	    this.clientSize.y = this.container.clientHeight;
	    if (this.scrollbars.x) {
	      this.scrollbarsSize.x = this.scrollbars.x.offsetWidth;
	    }
	    if (this.scrollbars.y) {
	      this.scrollbarsSize.y = this.scrollbars.y.offsetHeight;
	    }
	  }
	  // set the right scroller dimensions
	  this.scroller.setDimensions(this.container.clientWidth, this.container.clientHeight, this.content.offsetWidth, this.content.offsetHeight);
	
	  // refresh the position for zooming purposes
	  var rect = this.container.getBoundingClientRect();
	  this.scroller.setPosition(rect.x + this.container.clientLeft, rect.y + this.container.clientTop);
	};
	
	DOMScroller.prototype.destroy = function destroy() {
	  window.removeEventListener('resize', this.onResize, false);
	  this.container.removeEventListener('touchstart', this.onTouchStart, false);
	  this.container.removeEventListener('touchmove', this.onTouchMove, false);
	  this.container.removeEventListener('touchend', this.onTouchEnd, false);
	  this.container.removeEventListener('touchcancel', this.onTouchCancel, false);
	  this.container.removeEventListener('mousedown', this.onMouseDown, false);
	  document.removeEventListener('mousemove', this.onMouseMove, false);
	  document.removeEventListener('mouseup', this.onMouseUp, false);
	  this.container.removeEventListener('mousewheel', this.onMouseWheel, false);
	};
	
	DOMScroller.prototype.bindEvents = function bindEvents() {
	  var _this2 = this;
	
	  var that = this;
	
	  // reflow handling
	  window.addEventListener('resize', this.onResize = function () {
	    that.reflow();
	  }, false);
	
	  // touch devices bind touch events
	  if ('ontouchstart' in window) {
	    this.container.addEventListener('touchstart', this.onTouchStart = function (e) {
	      // Don't react if initial down happens on a form element
	      if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i) || _this2.disabled) {
	        return;
	      }
	      _this2.clearScrollbarTimer();
	      // reflow since the container may have changed
	      that.reflow();
	      that.scroller.doTouchStart(e.touches, e.timeStamp);
	    }, false);
	
	    this.container.addEventListener('touchmove', this.onTouchMove = function (e) {
	      e.preventDefault();
	      that.scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
	    }, false);
	
	    this.container.addEventListener('touchend', this.onTouchEnd = function (e) {
	      that.scroller.doTouchEnd(e.timeStamp);
	    }, false);
	
	    this.container.addEventListener('touchcancel', this.onTouchCancel = function (e) {
	      that.scroller.doTouchEnd(e.timeStamp);
	    }, false);
	
	    // non-touch bind mouse events
	  } else {
	    (function () {
	      var mousedown = false;
	      _this2.container.addEventListener('mousedown', _this2.onMouseDown = function (e) {
	        if (e.target.tagName.match(/input|textarea|select/i) || _this2.disabled) {
	          return;
	        }
	        _this2.clearScrollbarTimer();
	        that.scroller.doTouchStart([{
	          pageX: e.pageX,
	          pageY: e.pageY
	        }], e.timeStamp);
	        mousedown = true;
	        // reflow since the container may have changed
	        that.reflow();
	        e.preventDefault();
	      }, false);
	
	      document.addEventListener('mousemove', _this2.onMouseMove = function (e) {
	        if (!mousedown) {
	          return;
	        }
	        that.scroller.doTouchMove([{
	          pageX: e.pageX,
	          pageY: e.pageY
	        }], e.timeStamp);
	        mousedown = true;
	      }, false);
	
	      document.addEventListener('mouseup', _this2.onMouseUp = function (e) {
	        if (!mousedown) {
	          return;
	        }
	        that.scroller.doTouchEnd(e.timeStamp);
	        mousedown = false;
	      }, false);
	
	      _this2.container.addEventListener('mousewheel', _this2.onMouseWheel = function (e) {
	        if (that.options.zooming) {
	          that.scroller.doMouseZoom(e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
	          e.preventDefault();
	        }
	      }, false);
	    })();
	  }
	};
	
	module.exports = DOMScroller;

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(242);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(243), __esModule: true };

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(244);
	module.exports = __webpack_require__(247).Object.assign;

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(245);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(260)});

/***/ },
/* 245 */
[316, 246, 247, 248, 250],
/* 246 */
183,
/* 247 */
184,
/* 248 */
[317, 249],
/* 249 */
186,
/* 250 */
[318, 251, 259, 255],
/* 251 */
[319, 252, 254, 258, 255],
/* 252 */
[320, 253],
/* 253 */
190,
/* 254 */
[321, 255, 256, 257],
/* 255 */
[322, 256],
/* 256 */
193,
/* 257 */
[323, 253, 246],
/* 258 */
[324, 253],
/* 259 */
196,
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(261)
	  , gOPS     = __webpack_require__(276)
	  , pIE      = __webpack_require__(277)
	  , toObject = __webpack_require__(278)
	  , IObject  = __webpack_require__(265)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(256)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(262)
	  , enumBugKeys = __webpack_require__(275);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(263)
	  , toIObject    = __webpack_require__(264)
	  , arrayIndexOf = __webpack_require__(268)(false)
	  , IE_PROTO     = __webpack_require__(272)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 263 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(265)
	  , defined = __webpack_require__(267);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(266);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 266 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 267 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(264)
	  , toLength  = __webpack_require__(269)
	  , toIndex   = __webpack_require__(271);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(270)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 270 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(270)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(273)('keys')
	  , uid    = __webpack_require__(274);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(246)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 274 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 275 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 276 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 277 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(267);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	 * Scroller
	 * http://github.com/zynga/scroller
	 *
	 * Copyright 2011, Zynga Inc.
	 * Licensed under the MIT License.
	 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
	 *
	 * Based on the work of: Unify Project (unify-project.org)
	 * http://unify-project.org
	 * Copyright 2011, Deutsche Telekom AG
	 * License: MIT + Apache (V2)
	 */
	
	var Scroller;
	var Animate = __webpack_require__(280);
	
	var NOOP = function NOOP() {};
	
	/**
	 * A pure logic 'component' for 'virtual' scrolling/zooming.
	 */
	Scroller = function Scroller(callback, options) {
	
	  this.__callback = callback;
	
	  this.options = {
	
	    /** Enable scrolling on x-axis */
	    scrollingX: true,
	
	    /** Enable scrolling on y-axis */
	    scrollingY: true,
	
	    /** Enable animations for deceleration, snap back, zooming and scrolling */
	    animating: true,
	
	    /** duration for animations triggered by scrollTo/zoomTo */
	    animationDuration: 250,
	
	    /** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */
	    bouncing: true,
	
	    /** Enable locking to the main axis if user moves only slightly on one of them at start */
	    locking: true,
	
	    /** Enable pagination mode (switching between full page content panes) */
	    paging: false,
	
	    /** Enable snapping of content to a configured pixel grid */
	    snapping: false,
	
	    /** Enable zooming of content via API, fingers and mouse wheel */
	    zooming: false,
	
	    /** Minimum zoom level */
	    minZoom: 0.5,
	
	    /** Maximum zoom level */
	    maxZoom: 3,
	
	    /** Multiply or decrease scrolling speed **/
	    speedMultiplier: 1,
	
	    /** Callback that is fired on the later of touch end or deceleration end,
	     provided that another scrolling action has not begun. Used to know
	     when to fade out a scrollbar. */
	    scrollingComplete: NOOP,
	
	    /** This configures the amount of change applied to deceleration when reaching boundaries  **/
	    penetrationDeceleration: 0.03,
	
	    /** This configures the amount of change applied to acceleration when reaching boundaries  **/
	    penetrationAcceleration: 0.08
	
	  };
	
	  for (var key in options) {
	    this.options[key] = options[key];
	  }
	};
	
	// Easing Equations (c) 2003 Robert Penner, all rights reserved.
	// Open source under the BSD License.
	
	/**
	 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
	 **/
	var easeOutCubic = function easeOutCubic(pos) {
	  return Math.pow(pos - 1, 3) + 1;
	};
	
	/**
	 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
	 **/
	var easeInOutCubic = function easeInOutCubic(pos) {
	  if ((pos /= 0.5) < 1) {
	    return 0.5 * Math.pow(pos, 3);
	  }
	
	  return 0.5 * (Math.pow(pos - 2, 3) + 2);
	};
	
	var members = {
	
	  /*
	   ---------------------------------------------------------------------------
	   INTERNAL FIELDS :: STATUS
	   ---------------------------------------------------------------------------
	   */
	
	  /** {Boolean} Whether only a single finger is used in touch handling */
	  __isSingleTouch: false,
	
	  /** {Boolean} Whether a touch event sequence is in progress */
	  __isTracking: false,
	
	  /** {Boolean} Whether a deceleration animation went to completion. */
	  __didDecelerationComplete: false,
	
	  /**
	   * {Boolean} Whether a gesture zoom/rotate event is in progress. Activates when
	   * a gesturestart event happens. This has higher priority than dragging.
	   */
	  __isGesturing: false,
	
	  /**
	   * {Boolean} Whether the user has moved by such a distance that we have enabled
	   * dragging mode. Hint: It's only enabled after some pixels of movement to
	   * not interrupt with clicks etc.
	   */
	  __isDragging: false,
	
	  /**
	   * {Boolean} Not touching and dragging anymore, and smoothly animating the
	   * touch sequence using deceleration.
	   */
	  __isDecelerating: false,
	
	  /**
	   * {Boolean} Smoothly animating the currently configured change
	   */
	  __isAnimating: false,
	
	  /*
	   ---------------------------------------------------------------------------
	   INTERNAL FIELDS :: DIMENSIONS
	   ---------------------------------------------------------------------------
	   */
	
	  /** {Integer} Available outer left position (from document perspective) */
	  __clientLeft: 0,
	
	  /** {Integer} Available outer top position (from document perspective) */
	  __clientTop: 0,
	
	  /** {Integer} Available outer width */
	  __clientWidth: 0,
	
	  /** {Integer} Available outer height */
	  __clientHeight: 0,
	
	  /** {Integer} Outer width of content */
	  __contentWidth: 0,
	
	  /** {Integer} Outer height of content */
	  __contentHeight: 0,
	
	  /** {Integer} Snapping width for content */
	  __snapWidth: 100,
	
	  /** {Integer} Snapping height for content */
	  __snapHeight: 100,
	
	  /** {Integer} Height to assign to refresh area */
	  __refreshHeight: null,
	
	  /** {Boolean} Whether the refresh process is enabled when the event is released now */
	  __refreshActive: false,
	
	  /** {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release */
	  __refreshActivate: null,
	
	  /** {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled */
	  __refreshDeactivate: null,
	
	  /** {Function} Callback to execute to start the actual refresh. Call {@link #refreshFinish} when done */
	  __refreshStart: null,
	
	  /** {Number} Zoom level */
	  __zoomLevel: 1,
	
	  /** {Number} Scroll position on x-axis */
	  __scrollLeft: 0,
	
	  /** {Number} Scroll position on y-axis */
	  __scrollTop: 0,
	
	  /** {Integer} Maximum allowed scroll position on x-axis */
	  __maxScrollLeft: 0,
	
	  /** {Integer} Maximum allowed scroll position on y-axis */
	  __maxScrollTop: 0,
	
	  /* {Number} Scheduled left position (final position when animating) */
	  __scheduledLeft: 0,
	
	  /* {Number} Scheduled top position (final position when animating) */
	  __scheduledTop: 0,
	
	  /* {Number} Scheduled zoom level (final scale when animating) */
	  __scheduledZoom: 0,
	
	  /*
	   ---------------------------------------------------------------------------
	   INTERNAL FIELDS :: LAST POSITIONS
	   ---------------------------------------------------------------------------
	   */
	
	  /** {Number} Left position of finger at start */
	  __lastTouchLeft: null,
	
	  /** {Number} Top position of finger at start */
	  __lastTouchTop: null,
	
	  /** {Date} Timestamp of last move of finger. Used to limit tracking range for deceleration speed. */
	  __lastTouchMove: null,
	
	  /** {Array} List of positions, uses three indexes for each state: left, top, timestamp */
	  __positions: null,
	
	  /*
	   ---------------------------------------------------------------------------
	   INTERNAL FIELDS :: DECELERATION SUPPORT
	   ---------------------------------------------------------------------------
	   */
	
	  /** {Integer} Minimum left scroll position during deceleration */
	  __minDecelerationScrollLeft: null,
	
	  /** {Integer} Minimum top scroll position during deceleration */
	  __minDecelerationScrollTop: null,
	
	  /** {Integer} Maximum left scroll position during deceleration */
	  __maxDecelerationScrollLeft: null,
	
	  /** {Integer} Maximum top scroll position during deceleration */
	  __maxDecelerationScrollTop: null,
	
	  /** {Number} Current factor to modify horizontal scroll position with on every step */
	  __decelerationVelocityX: null,
	
	  /** {Number} Current factor to modify vertical scroll position with on every step */
	  __decelerationVelocityY: null,
	
	  /*
	   ---------------------------------------------------------------------------
	   PUBLIC API
	   ---------------------------------------------------------------------------
	   */
	
	  /**
	   * Configures the dimensions of the client (outer) and content (inner) elements.
	   * Requires the available space for the outer element and the outer size of the inner element.
	   * All values which are falsy (null or zero etc.) are ignored and the old value is kept.
	   *
	   * @param clientWidth {Integer ? null} Inner width of outer element
	   * @param clientHeight {Integer ? null} Inner height of outer element
	   * @param contentWidth {Integer ? null} Outer width of inner element
	   * @param contentHeight {Integer ? null} Outer height of inner element
	   */
	  setDimensions: function setDimensions(clientWidth, clientHeight, contentWidth, contentHeight) {
	
	    var self = this;
	
	    // Only update values which are defined
	    if (clientWidth === +clientWidth) {
	      self.__clientWidth = clientWidth;
	    }
	
	    if (clientHeight === +clientHeight) {
	      self.__clientHeight = clientHeight;
	    }
	
	    if (contentWidth === +contentWidth) {
	      self.__contentWidth = contentWidth;
	    }
	
	    if (contentHeight === +contentHeight) {
	      self.__contentHeight = contentHeight;
	    }
	
	    // Refresh maximums
	    self.__computeScrollMax();
	
	    // Refresh scroll position
	    self.scrollTo(self.__scrollLeft, self.__scrollTop, true);
	  },
	
	  /**
	   * Sets the client coordinates in relation to the document.
	   *
	   * @param left {Integer ? 0} Left position of outer element
	   * @param top {Integer ? 0} Top position of outer element
	   */
	  setPosition: function setPosition(left, top) {
	
	    var self = this;
	
	    self.__clientLeft = left || 0;
	    self.__clientTop = top || 0;
	  },
	
	  /**
	   * Configures the snapping (when snapping is active)
	   *
	   * @param width {Integer} Snapping width
	   * @param height {Integer} Snapping height
	   */
	  setSnapSize: function setSnapSize(width, height) {
	
	    var self = this;
	
	    self.__snapWidth = width;
	    self.__snapHeight = height;
	  },
	
	  /**
	   * Activates pull-to-refresh. A special zone on the top of the list to start a list refresh whenever
	   * the user event is released during visibility of this zone. This was introduced by some apps on iOS like
	   * the official Twitter client.
	   *
	   * @param height {Integer} Height of pull-to-refresh zone on top of rendered list
	   * @param activateCallback {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release.
	   * @param deactivateCallback {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled.
	   * @param startCallback {Function} Callback to execute to start the real async refresh action. Call {@link #finishPullToRefresh} after finish of refresh.
	   */
	  activatePullToRefresh: function activatePullToRefresh(height, activateCallback, deactivateCallback, startCallback) {
	
	    var self = this;
	
	    self.__refreshHeight = height;
	    self.__refreshActivate = activateCallback;
	    self.__refreshDeactivate = deactivateCallback;
	    self.__refreshStart = startCallback;
	  },
	
	  /**
	   * Starts pull-to-refresh manually.
	   */
	  triggerPullToRefresh: function triggerPullToRefresh() {
	    // Use publish instead of scrollTo to allow scrolling to out of boundary position
	    // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
	    this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, true);
	
	    if (this.__refreshStart) {
	      this.__refreshStart();
	    }
	  },
	
	  /**
	   * Signalizes that pull-to-refresh is finished.
	   */
	  finishPullToRefresh: function finishPullToRefresh() {
	
	    var self = this;
	
	    self.__refreshActive = false;
	    if (self.__refreshDeactivate) {
	      self.__refreshDeactivate();
	    }
	
	    self.scrollTo(self.__scrollLeft, self.__scrollTop, true);
	  },
	
	  /**
	   * Returns the scroll position and zooming values
	   *
	   * @return {Map} `left` and `top` scroll position and `zoom` level
	   */
	  getValues: function getValues() {
	
	    var self = this;
	
	    return {
	      left: self.__scrollLeft,
	      top: self.__scrollTop,
	      zoom: self.__zoomLevel
	    };
	  },
	
	  /**
	   * Returns the maximum scroll values
	   *
	   * @return {Map} `left` and `top` maximum scroll values
	   */
	  getScrollMax: function getScrollMax() {
	
	    var self = this;
	
	    return {
	      left: self.__maxScrollLeft,
	      top: self.__maxScrollTop
	    };
	  },
	
	  /**
	   * Zooms to the given level. Supports optional animation. Zooms
	   * the center when no coordinates are given.
	   *
	   * @param level {Number} Level to zoom to
	   * @param animate {Boolean ? false} Whether to use animation
	   * @param originLeft {Number ? null} Zoom in at given left coordinate
	   * @param originTop {Number ? null} Zoom in at given top coordinate
	   * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
	   */
	  zoomTo: function zoomTo(level, animate, originLeft, originTop, callback) {
	
	    var self = this;
	
	    if (!self.options.zooming) {
	      throw new Error("Zooming is not enabled!");
	    }
	
	    // Add callback if exists
	    if (callback) {
	      self.__zoomComplete = callback;
	    }
	
	    // Stop deceleration
	    if (self.__isDecelerating) {
	      Animate.stop(self.__isDecelerating);
	      self.__isDecelerating = false;
	    }
	
	    var oldLevel = self.__zoomLevel;
	
	    // Normalize input origin to center of viewport if not defined
	    if (originLeft == null) {
	      originLeft = self.__clientWidth / 2;
	    }
	
	    if (originTop == null) {
	      originTop = self.__clientHeight / 2;
	    }
	
	    // Limit level according to configuration
	    level = Math.max(Math.min(level, self.options.maxZoom), self.options.minZoom);
	
	    // Recompute maximum values while temporary tweaking maximum scroll ranges
	    self.__computeScrollMax(level);
	
	    // Recompute left and top coordinates based on new zoom level
	    var left = (originLeft + self.__scrollLeft) * level / oldLevel - originLeft;
	    var top = (originTop + self.__scrollTop) * level / oldLevel - originTop;
	
	    // Limit x-axis
	    if (left > self.__maxScrollLeft) {
	      left = self.__maxScrollLeft;
	    } else if (left < 0) {
	      left = 0;
	    }
	
	    // Limit y-axis
	    if (top > self.__maxScrollTop) {
	      top = self.__maxScrollTop;
	    } else if (top < 0) {
	      top = 0;
	    }
	
	    // Push values out
	    self.__publish(left, top, level, animate);
	  },
	
	  /**
	   * Zooms the content by the given factor.
	   *
	   * @param factor {Number} Zoom by given factor
	   * @param animate {Boolean ? false} Whether to use animation
	   * @param originLeft {Number ? 0} Zoom in at given left coordinate
	   * @param originTop {Number ? 0} Zoom in at given top coordinate
	   * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
	   */
	  zoomBy: function zoomBy(factor, animate, originLeft, originTop, callback) {
	
	    var self = this;
	
	    self.zoomTo(self.__zoomLevel * factor, animate, originLeft, originTop, callback);
	  },
	
	  /**
	   * Scrolls to the given position. Respect limitations and snapping automatically.
	   *
	   * @param left {Number?null} Horizontal scroll position, keeps current if value is <code>null</code>
	   * @param top {Number?null} Vertical scroll position, keeps current if value is <code>null</code>
	   * @param animate {Boolean?false} Whether the scrolling should happen using an animation
	   * @param zoom {Number?null} Zoom level to go to
	   */
	  scrollTo: function scrollTo(left, top, animate, zoom, callback) {
	
	    var self = this;
	
	    // Stop deceleration
	    if (self.__isDecelerating) {
	      Animate.stop(self.__isDecelerating);
	      self.__isDecelerating = false;
	    }
	
	    // Correct coordinates based on new zoom level
	    if (zoom != null && zoom !== self.__zoomLevel) {
	
	      if (!self.options.zooming) {
	        throw new Error("Zooming is not enabled!");
	      }
	
	      left *= zoom;
	      top *= zoom;
	
	      // Recompute maximum values while temporary tweaking maximum scroll ranges
	      self.__computeScrollMax(zoom);
	    } else {
	
	      // Keep zoom when not defined
	      zoom = self.__zoomLevel;
	    }
	
	    if (!self.options.scrollingX) {
	
	      left = self.__scrollLeft;
	    } else {
	
	      if (self.options.paging) {
	        left = Math.round(left / self.__clientWidth) * self.__clientWidth;
	      } else if (self.options.snapping) {
	        left = Math.round(left / self.__snapWidth) * self.__snapWidth;
	      }
	    }
	
	    if (!self.options.scrollingY) {
	
	      top = self.__scrollTop;
	    } else {
	
	      if (self.options.paging) {
	        top = Math.round(top / self.__clientHeight) * self.__clientHeight;
	      } else if (self.options.snapping) {
	        top = Math.round(top / self.__snapHeight) * self.__snapHeight;
	      }
	    }
	
	    // Limit for allowed ranges
	    left = Math.max(Math.min(self.__maxScrollLeft, left), 0);
	    top = Math.max(Math.min(self.__maxScrollTop, top), 0);
	
	    // Don't animate when no change detected, still call publish to make sure
	    // that rendered position is really in-sync with internal data
	    if (left === self.__scrollLeft && top === self.__scrollTop) {
	      animate = false;
	      if (callback) {
	        callback();
	      }
	    }
	
	    // Publish new values
	    if (!self.__isTracking) {
	      self.__publish(left, top, zoom, animate);
	    }
	  },
	
	  /**
	   * Scroll by the given offset
	   *
	   * @param left {Number ? 0} Scroll x-axis by given offset
	   * @param top {Number ? 0} Scroll x-axis by given offset
	   * @param animate {Boolean ? false} Whether to animate the given change
	   */
	  scrollBy: function scrollBy(left, top, animate) {
	
	    var self = this;
	
	    var startLeft = self.__isAnimating ? self.__scheduledLeft : self.__scrollLeft;
	    var startTop = self.__isAnimating ? self.__scheduledTop : self.__scrollTop;
	
	    self.scrollTo(startLeft + (left || 0), startTop + (top || 0), animate);
	  },
	
	  /*
	   ---------------------------------------------------------------------------
	   EVENT CALLBACKS
	   ---------------------------------------------------------------------------
	   */
	
	  /**
	   * Mouse wheel handler for zooming support
	   */
	  doMouseZoom: function doMouseZoom(wheelDelta, timeStamp, pageX, pageY) {
	
	    var self = this;
	    var change = wheelDelta > 0 ? 0.97 : 1.03;
	
	    return self.zoomTo(self.__zoomLevel * change, false, pageX - self.__clientLeft, pageY - self.__clientTop);
	  },
	
	  /**
	   * Touch start handler for scrolling support
	   */
	  doTouchStart: function doTouchStart(touches, timeStamp) {
	
	    // Array-like check is enough here
	    if (touches.length == null) {
	      throw new Error("Invalid touch list: " + touches);
	    }
	
	    if (timeStamp instanceof Date) {
	      timeStamp = timeStamp.valueOf();
	    }
	    if (typeof timeStamp !== "number") {
	      throw new Error("Invalid timestamp value: " + timeStamp);
	    }
	
	    var self = this;
	
	    // Reset interruptedAnimation flag
	    self.__interruptedAnimation = true;
	
	    // Stop deceleration
	    if (self.__isDecelerating) {
	      Animate.stop(self.__isDecelerating);
	      self.__isDecelerating = false;
	      self.__interruptedAnimation = true;
	    }
	
	    // Stop animation
	    if (self.__isAnimating) {
	      Animate.stop(self.__isAnimating);
	      self.__isAnimating = false;
	      self.__interruptedAnimation = true;
	    }
	
	    // Use center point when dealing with two fingers
	    var currentTouchLeft, currentTouchTop;
	    var isSingleTouch = touches.length === 1;
	    if (isSingleTouch) {
	      currentTouchLeft = touches[0].pageX;
	      currentTouchTop = touches[0].pageY;
	    } else {
	      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
	      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
	    }
	
	    // Store initial positions
	    self.__initialTouchLeft = currentTouchLeft;
	    self.__initialTouchTop = currentTouchTop;
	
	    // Store current zoom level
	    self.__zoomLevelStart = self.__zoomLevel;
	
	    // Store initial touch positions
	    self.__lastTouchLeft = currentTouchLeft;
	    self.__lastTouchTop = currentTouchTop;
	
	    // Store initial move time stamp
	    self.__lastTouchMove = timeStamp;
	
	    // Reset initial scale
	    self.__lastScale = 1;
	
	    // Reset locking flags
	    self.__enableScrollX = !isSingleTouch && self.options.scrollingX;
	    self.__enableScrollY = !isSingleTouch && self.options.scrollingY;
	
	    // Reset tracking flag
	    self.__isTracking = true;
	
	    // Reset deceleration complete flag
	    self.__didDecelerationComplete = false;
	
	    // Dragging starts directly with two fingers, otherwise lazy with an offset
	    self.__isDragging = !isSingleTouch;
	
	    // Some features are disabled in multi touch scenarios
	    self.__isSingleTouch = isSingleTouch;
	
	    // Clearing data structure
	    self.__positions = [];
	  },
	
	  /**
	   * Touch move handler for scrolling support
	   */
	  doTouchMove: function doTouchMove(touches, timeStamp, scale) {
	
	    // Array-like check is enough here
	    if (touches.length == null) {
	      throw new Error("Invalid touch list: " + touches);
	    }
	
	    if (timeStamp instanceof Date) {
	      timeStamp = timeStamp.valueOf();
	    }
	    if (typeof timeStamp !== "number") {
	      throw new Error("Invalid timestamp value: " + timeStamp);
	    }
	
	    var self = this;
	
	    // Ignore event when tracking is not enabled (event might be outside of element)
	    if (!self.__isTracking) {
	      return;
	    }
	
	    var currentTouchLeft, currentTouchTop;
	
	    // Compute move based around of center of fingers
	    if (touches.length === 2) {
	      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
	      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
	    } else {
	      currentTouchLeft = touches[0].pageX;
	      currentTouchTop = touches[0].pageY;
	    }
	
	    var positions = self.__positions;
	
	    // Are we already is dragging mode?
	    if (self.__isDragging) {
	
	      // Compute move distance
	      var moveX = currentTouchLeft - self.__lastTouchLeft;
	      var moveY = currentTouchTop - self.__lastTouchTop;
	
	      // Read previous scroll position and zooming
	      var scrollLeft = self.__scrollLeft;
	      var scrollTop = self.__scrollTop;
	      var level = self.__zoomLevel;
	
	      // Work with scaling
	      if (scale != null && self.options.zooming) {
	
	        var oldLevel = level;
	
	        // Recompute level based on previous scale and new scale
	        level = level / self.__lastScale * scale;
	
	        // Limit level according to configuration
	        level = Math.max(Math.min(level, self.options.maxZoom), self.options.minZoom);
	
	        // Only do further compution when change happened
	        if (oldLevel !== level) {
	
	          // Compute relative event position to container
	          var currentTouchLeftRel = currentTouchLeft - self.__clientLeft;
	          var currentTouchTopRel = currentTouchTop - self.__clientTop;
	
	          // Recompute left and top coordinates based on new zoom level
	          scrollLeft = (currentTouchLeftRel + scrollLeft) * level / oldLevel - currentTouchLeftRel;
	          scrollTop = (currentTouchTopRel + scrollTop) * level / oldLevel - currentTouchTopRel;
	
	          // Recompute max scroll values
	          self.__computeScrollMax(level);
	        }
	      }
	
	      if (self.__enableScrollX) {
	
	        scrollLeft -= moveX * this.options.speedMultiplier;
	        var maxScrollLeft = self.__maxScrollLeft;
	
	        if (scrollLeft > maxScrollLeft || scrollLeft < 0) {
	
	          // Slow down on the edges
	          if (self.options.bouncing) {
	
	            scrollLeft += moveX / 2 * this.options.speedMultiplier;
	          } else if (scrollLeft > maxScrollLeft) {
	
	            scrollLeft = maxScrollLeft;
	          } else {
	
	            scrollLeft = 0;
	          }
	        }
	      }
	
	      // Compute new vertical scroll position
	      if (self.__enableScrollY) {
	
	        scrollTop -= moveY * this.options.speedMultiplier;
	        var maxScrollTop = self.__maxScrollTop;
	
	        if (scrollTop > maxScrollTop || scrollTop < 0) {
	
	          // Slow down on the edges
	          if (self.options.bouncing) {
	
	            scrollTop += moveY / 2 * this.options.speedMultiplier;
	
	            // Support pull-to-refresh (only when only y is scrollable)
	            if (!self.__enableScrollX && self.__refreshHeight != null) {
	
	              if (!self.__refreshActive && scrollTop <= -self.__refreshHeight) {
	
	                self.__refreshActive = true;
	                if (self.__refreshActivate) {
	                  self.__refreshActivate();
	                }
	              } else if (self.__refreshActive && scrollTop > -self.__refreshHeight) {
	
	                self.__refreshActive = false;
	                if (self.__refreshDeactivate) {
	                  self.__refreshDeactivate();
	                }
	              }
	            }
	          } else if (scrollTop > maxScrollTop) {
	
	            scrollTop = maxScrollTop;
	          } else {
	
	            scrollTop = 0;
	          }
	        }
	      }
	
	      // Keep list from growing infinitely (holding min 10, max 20 measure points)
	      if (positions.length > 60) {
	        positions.splice(0, 30);
	      }
	
	      // Track scroll movement for decleration
	      positions.push(scrollLeft, scrollTop, timeStamp);
	
	      // Sync scroll position
	      self.__publish(scrollLeft, scrollTop, level);
	
	      // Otherwise figure out whether we are switching into dragging mode now.
	    } else {
	
	      var minimumTrackingForScroll = self.options.locking ? 3 : 0;
	      var minimumTrackingForDrag = 5;
	
	      var distanceX = Math.abs(currentTouchLeft - self.__initialTouchLeft);
	      var distanceY = Math.abs(currentTouchTop - self.__initialTouchTop);
	
	      self.__enableScrollX = self.options.scrollingX && distanceX >= minimumTrackingForScroll;
	      self.__enableScrollY = self.options.scrollingY && distanceY >= minimumTrackingForScroll;
	
	      positions.push(self.__scrollLeft, self.__scrollTop, timeStamp);
	
	      self.__isDragging = (self.__enableScrollX || self.__enableScrollY) && (distanceX >= minimumTrackingForDrag || distanceY >= minimumTrackingForDrag);
	      if (self.__isDragging) {
	        self.__interruptedAnimation = false;
	      }
	    }
	
	    // Update last touch positions and time stamp for next event
	    self.__lastTouchLeft = currentTouchLeft;
	    self.__lastTouchTop = currentTouchTop;
	    self.__lastTouchMove = timeStamp;
	    self.__lastScale = scale;
	  },
	
	  /**
	   * Touch end handler for scrolling support
	   */
	  doTouchEnd: function doTouchEnd(timeStamp) {
	
	    if (timeStamp instanceof Date) {
	      timeStamp = timeStamp.valueOf();
	    }
	    if (typeof timeStamp !== "number") {
	      throw new Error("Invalid timestamp value: " + timeStamp);
	    }
	
	    var self = this;
	
	    // Ignore event when tracking is not enabled (no touchstart event on element)
	    // This is required as this listener ('touchmove') sits on the document and not on the element itself.
	    if (!self.__isTracking) {
	      return;
	    }
	
	    // Not touching anymore (when two finger hit the screen there are two touch end events)
	    self.__isTracking = false;
	
	    // Be sure to reset the dragging flag now. Here we also detect whether
	    // the finger has moved fast enough to switch into a deceleration animation.
	    if (self.__isDragging) {
	
	      // Reset dragging flag
	      self.__isDragging = false;
	
	      // Start deceleration
	      // Verify that the last move detected was in some relevant time frame
	      if (self.__isSingleTouch && self.options.animating && timeStamp - self.__lastTouchMove <= 100) {
	
	        // Then figure out what the scroll position was about 100ms ago
	        var positions = self.__positions;
	        var endPos = positions.length - 1;
	        var startPos = endPos;
	
	        // Move pointer to position measured 100ms ago
	        for (var i = endPos; i > 0 && positions[i] > self.__lastTouchMove - 100; i -= 3) {
	          startPos = i;
	        }
	
	        // If start and stop position is identical in a 100ms timeframe,
	        // we cannot compute any useful deceleration.
	        if (startPos !== endPos) {
	
	          // Compute relative movement between these two points
	          var timeOffset = positions[endPos] - positions[startPos];
	          var movedLeft = self.__scrollLeft - positions[startPos - 2];
	          var movedTop = self.__scrollTop - positions[startPos - 1];
	
	          // Based on 50ms compute the movement to apply for each render step
	          self.__decelerationVelocityX = movedLeft / timeOffset * (1000 / 60);
	          self.__decelerationVelocityY = movedTop / timeOffset * (1000 / 60);
	
	          // How much velocity is required to start the deceleration
	          var minVelocityToStartDeceleration = self.options.paging || self.options.snapping ? 4 : 1;
	
	          // Verify that we have enough velocity to start deceleration
	          if (Math.abs(self.__decelerationVelocityX) > minVelocityToStartDeceleration || Math.abs(self.__decelerationVelocityY) > minVelocityToStartDeceleration) {
	
	            // Deactivate pull-to-refresh when decelerating
	            if (!self.__refreshActive) {
	              self.__startDeceleration(timeStamp);
	            }
	          } else {
	            self.options.scrollingComplete();
	          }
	        } else {
	          self.options.scrollingComplete();
	        }
	      } else if (timeStamp - self.__lastTouchMove > 100) {
	        self.options.scrollingComplete();
	      }
	    }
	
	    // If this was a slower move it is per default non decelerated, but this
	    // still means that we want snap back to the bounds which is done here.
	    // This is placed outside the condition above to improve edge case stability
	    // e.g. touchend fired without enabled dragging. This should normally do not
	    // have modified the scroll positions or even showed the scrollbars though.
	    if (!self.__isDecelerating) {
	
	      if (self.__refreshActive && self.__refreshStart) {
	
	        // Use publish instead of scrollTo to allow scrolling to out of boundary position
	        // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
	        self.__publish(self.__scrollLeft, -self.__refreshHeight, self.__zoomLevel, true);
	
	        if (self.__refreshStart) {
	          self.__refreshStart();
	        }
	      } else {
	
	        if (self.__interruptedAnimation || self.__isDragging) {
	          self.options.scrollingComplete();
	        }
	        self.scrollTo(self.__scrollLeft, self.__scrollTop, true, self.__zoomLevel);
	
	        // Directly signalize deactivation (nothing todo on refresh?)
	        if (self.__refreshActive) {
	
	          self.__refreshActive = false;
	          if (self.__refreshDeactivate) {
	            self.__refreshDeactivate();
	          }
	        }
	      }
	    }
	
	    // Fully cleanup list
	    self.__positions.length = 0;
	  },
	
	  /*
	   ---------------------------------------------------------------------------
	   PRIVATE API
	   ---------------------------------------------------------------------------
	   */
	
	  /**
	   * Applies the scroll position to the content element
	   *
	   * @param left {Number} Left scroll position
	   * @param top {Number} Top scroll position
	   * @param animate {Boolean?false} Whether animation should be used to move to the new coordinates
	   */
	  __publish: function __publish(left, top, zoom, animate) {
	
	    var self = this;
	
	    // Remember whether we had an animation, then we try to continue based on the current "drive" of the animation
	    var wasAnimating = self.__isAnimating;
	    if (wasAnimating) {
	      Animate.stop(wasAnimating);
	      self.__isAnimating = false;
	    }
	
	    if (animate && self.options.animating) {
	
	      // Keep scheduled positions for scrollBy/zoomBy functionality
	      self.__scheduledLeft = left;
	      self.__scheduledTop = top;
	      self.__scheduledZoom = zoom;
	
	      var oldLeft = self.__scrollLeft;
	      var oldTop = self.__scrollTop;
	      var oldZoom = self.__zoomLevel;
	
	      var diffLeft = left - oldLeft;
	      var diffTop = top - oldTop;
	      var diffZoom = zoom - oldZoom;
	
	      var step = function step(percent, now, render) {
	
	        if (render) {
	
	          self.__scrollLeft = oldLeft + diffLeft * percent;
	          self.__scrollTop = oldTop + diffTop * percent;
	          self.__zoomLevel = oldZoom + diffZoom * percent;
	
	          // Push values out
	          if (self.__callback) {
	            self.__callback(self.__scrollLeft, self.__scrollTop, self.__zoomLevel);
	          }
	        }
	      };
	
	      var verify = function verify(id) {
	        return self.__isAnimating === id;
	      };
	
	      var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
	        if (animationId === self.__isAnimating) {
	          self.__isAnimating = false;
	        }
	
	        if (self.__didDecelerationComplete || wasFinished) {
	          self.options.scrollingComplete();
	        }
	
	        if (self.options.zooming) {
	          self.__computeScrollMax();
	          if (self.__zoomComplete) {
	            self.__zoomComplete();
	            self.__zoomComplete = null;
	          }
	        }
	      };
	
	      // When continuing based on previous animation we choose an ease-out animation instead of ease-in-out
	      self.__isAnimating = Animate.start(step, verify, completed, self.options.animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic);
	    } else {
	
	      self.__scheduledLeft = self.__scrollLeft = left;
	      self.__scheduledTop = self.__scrollTop = top;
	      self.__scheduledZoom = self.__zoomLevel = zoom;
	
	      // Push values out
	      if (self.__callback) {
	        self.__callback(left, top, zoom);
	      }
	
	      // Fix max scroll ranges
	      if (self.options.zooming) {
	        self.__computeScrollMax();
	        if (self.__zoomComplete) {
	          self.__zoomComplete();
	          self.__zoomComplete = null;
	        }
	      }
	    }
	  },
	
	  /**
	   * Recomputes scroll minimum values based on client dimensions and content dimensions.
	   */
	  __computeScrollMax: function __computeScrollMax(zoomLevel) {
	
	    var self = this;
	
	    if (zoomLevel == null) {
	      zoomLevel = self.__zoomLevel;
	    }
	
	    self.__maxScrollLeft = Math.max(self.__contentWidth * zoomLevel - self.__clientWidth, 0);
	    self.__maxScrollTop = Math.max(self.__contentHeight * zoomLevel - self.__clientHeight, 0);
	  },
	
	  /*
	   ---------------------------------------------------------------------------
	   ANIMATION (DECELERATION) SUPPORT
	   ---------------------------------------------------------------------------
	   */
	
	  /**
	   * Called when a touch sequence end and the speed of the finger was high enough
	   * to switch into deceleration mode.
	   */
	  __startDeceleration: function __startDeceleration(timeStamp) {
	
	    var self = this;
	
	    if (self.options.paging) {
	
	      var scrollLeft = Math.max(Math.min(self.__scrollLeft, self.__maxScrollLeft), 0);
	      var scrollTop = Math.max(Math.min(self.__scrollTop, self.__maxScrollTop), 0);
	      var clientWidth = self.__clientWidth;
	      var clientHeight = self.__clientHeight;
	
	      // We limit deceleration not to the min/max values of the allowed range, but to the size of the visible client area.
	      // Each page should have exactly the size of the client area.
	      self.__minDecelerationScrollLeft = Math.floor(scrollLeft / clientWidth) * clientWidth;
	      self.__minDecelerationScrollTop = Math.floor(scrollTop / clientHeight) * clientHeight;
	      self.__maxDecelerationScrollLeft = Math.ceil(scrollLeft / clientWidth) * clientWidth;
	      self.__maxDecelerationScrollTop = Math.ceil(scrollTop / clientHeight) * clientHeight;
	    } else {
	
	      self.__minDecelerationScrollLeft = 0;
	      self.__minDecelerationScrollTop = 0;
	      self.__maxDecelerationScrollLeft = self.__maxScrollLeft;
	      self.__maxDecelerationScrollTop = self.__maxScrollTop;
	    }
	
	    // Wrap class method
	    var step = function step(percent, now, render) {
	      self.__stepThroughDeceleration(render);
	    };
	
	    // How much velocity is required to keep the deceleration running
	    // added by yiminghe
	    var minVelocityToKeepDecelerating = self.options.minVelocityToKeepDecelerating;
	
	    if (!minVelocityToKeepDecelerating) {
	      minVelocityToKeepDecelerating = self.options.snapping ? 4 : 0.001;
	    }
	
	    // Detect whether it's still worth to continue animating steps
	    // If we are already slow enough to not being user perceivable anymore, we stop the whole process here.
	    var verify = function verify() {
	      var shouldContinue = Math.abs(self.__decelerationVelocityX) >= minVelocityToKeepDecelerating || Math.abs(self.__decelerationVelocityY) >= minVelocityToKeepDecelerating;
	      if (!shouldContinue) {
	        self.__didDecelerationComplete = true;
	      }
	      return shouldContinue;
	    };
	
	    var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
	      self.__isDecelerating = false;
	      // Animate to grid when snapping is active, otherwise just fix out-of-boundary positions
	      // fixed by yiminghe, in case call scrollingComplete twice
	      self.scrollTo(self.__scrollLeft, self.__scrollTop, self.options.snapping, null, self.__didDecelerationComplete && self.options.scrollingComplete);
	    };
	
	    // Start animation and switch on flag
	    self.__isDecelerating = Animate.start(step, verify, completed);
	  },
	
	  /**
	   * Called on every step of the animation
	   *
	   * @param inMemory {Boolean?false} Whether to not render the current step, but keep it in memory only. Used internally only!
	   */
	  __stepThroughDeceleration: function __stepThroughDeceleration(render) {
	
	    var self = this;
	
	    //
	    // COMPUTE NEXT SCROLL POSITION
	    //
	
	    // Add deceleration to scroll position
	    var scrollLeft = self.__scrollLeft + self.__decelerationVelocityX;
	    var scrollTop = self.__scrollTop + self.__decelerationVelocityY;
	
	    //
	    // HARD LIMIT SCROLL POSITION FOR NON BOUNCING MODE
	    //
	
	    if (!self.options.bouncing) {
	
	      var scrollLeftFixed = Math.max(Math.min(self.__maxDecelerationScrollLeft, scrollLeft), self.__minDecelerationScrollLeft);
	      if (scrollLeftFixed !== scrollLeft) {
	        scrollLeft = scrollLeftFixed;
	        self.__decelerationVelocityX = 0;
	      }
	
	      var scrollTopFixed = Math.max(Math.min(self.__maxDecelerationScrollTop, scrollTop), self.__minDecelerationScrollTop);
	      if (scrollTopFixed !== scrollTop) {
	        scrollTop = scrollTopFixed;
	        self.__decelerationVelocityY = 0;
	      }
	    }
	
	    //
	    // UPDATE SCROLL POSITION
	    //
	
	    if (render) {
	
	      self.__publish(scrollLeft, scrollTop, self.__zoomLevel);
	    } else {
	
	      self.__scrollLeft = scrollLeft;
	      self.__scrollTop = scrollTop;
	    }
	
	    //
	    // SLOW DOWN
	    //
	
	    // Slow down velocity on every iteration
	    if (!self.options.paging) {
	
	      // This is the factor applied to every iteration of the animation
	      // to slow down the process. This should emulate natural behavior where
	      // objects slow down when the initiator of the movement is removed
	      var frictionFactor = 0.95;
	
	      self.__decelerationVelocityX *= frictionFactor;
	      self.__decelerationVelocityY *= frictionFactor;
	    }
	
	    //
	    // BOUNCING SUPPORT
	    //
	
	    if (self.options.bouncing) {
	
	      var scrollOutsideX = 0;
	      var scrollOutsideY = 0;
	
	      // This configures the amount of change applied to deceleration/acceleration when reaching boundaries
	      var penetrationDeceleration = self.options.penetrationDeceleration;
	      var penetrationAcceleration = self.options.penetrationAcceleration;
	
	      // Check limits
	      if (scrollLeft < self.__minDecelerationScrollLeft) {
	        scrollOutsideX = self.__minDecelerationScrollLeft - scrollLeft;
	      } else if (scrollLeft > self.__maxDecelerationScrollLeft) {
	        scrollOutsideX = self.__maxDecelerationScrollLeft - scrollLeft;
	      }
	
	      if (scrollTop < self.__minDecelerationScrollTop) {
	        scrollOutsideY = self.__minDecelerationScrollTop - scrollTop;
	      } else if (scrollTop > self.__maxDecelerationScrollTop) {
	        scrollOutsideY = self.__maxDecelerationScrollTop - scrollTop;
	      }
	
	      // Slow down until slow enough, then flip back to snap position
	      if (scrollOutsideX !== 0) {
	        if (scrollOutsideX * self.__decelerationVelocityX <= 0) {
	          self.__decelerationVelocityX += scrollOutsideX * penetrationDeceleration;
	        } else {
	          self.__decelerationVelocityX = scrollOutsideX * penetrationAcceleration;
	        }
	      }
	
	      if (scrollOutsideY !== 0) {
	        if (scrollOutsideY * self.__decelerationVelocityY <= 0) {
	          self.__decelerationVelocityY += scrollOutsideY * penetrationDeceleration;
	        } else {
	          self.__decelerationVelocityY = scrollOutsideY * penetrationAcceleration;
	        }
	      }
	    }
	  }
	};
	
	// Copy over members to prototype
	for (var key in members) {
	  Scroller.prototype[key] = members[key];
	}
	
	module.exports = Scroller;

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	var _typeof2 = __webpack_require__(281);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * Scroller
	 * http://github.com/zynga/scroller
	 *
	 * Copyright 2011, Zynga Inc.
	 * Licensed under the MIT License.
	 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
	 *
	 * Based on the work of: Unify Project (unify-project.org)
	 * http://unify-project.org
	 * Copyright 2011, Deutsche Telekom AG
	 * License: MIT + Apache (V2)
	 */
	
	/**
	 * Generic animation class with support for dropped frames both optional easing and duration.
	 *
	 * Optional duration is useful when the lifetime is defined by another condition than time
	 * e.g. speed of an animating object, etc.
	 *
	 * Dropped frame logic allows to keep using the same updater logic independent from the actual
	 * rendering. This eases a lot of cases where it might be pretty complex to break down a state
	 * based on the pure time difference.
	 */
	
	var desiredFrames = 60;
	var millisecondsPerSecond = 1000;
	var running = {};
	var counter = 1;
	var win = (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) !== undefined ? window : undefined;
	
	if (!win) {
	  win = (typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) !== undefined ? global : {};
	}
	
	var Animate = {
	
	  /**
	   * A requestAnimationFrame wrapper / polyfill.
	   *
	   * @param callback {Function} The callback to be invoked before the next repaint.
	   * @param root {HTMLElement} The root element for the repaint
	   */
	  requestAnimationFrame: function () {
	
	    // Check for request animation Frame support
	    var requestFrame = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame;
	    var isNative = !!requestFrame;
	
	    if (requestFrame && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(requestFrame.toString())) {
	      isNative = false;
	    }
	
	    if (isNative) {
	      return function (callback, root) {
	        requestFrame(callback, root);
	      };
	    }
	
	    var TARGET_FPS = 60;
	    var requests = {};
	    var requestCount = 0;
	    var rafHandle = 1;
	    var intervalHandle = null;
	    var lastActive = +new Date();
	
	    return function (callback, root) {
	      var callbackHandle = rafHandle++;
	
	      // Store callback
	      requests[callbackHandle] = callback;
	      requestCount++;
	
	      // Create timeout at first request
	      if (intervalHandle === null) {
	
	        intervalHandle = setInterval(function () {
	
	          var time = +new Date();
	          var currentRequests = requests;
	
	          // Reset data structure before executing callbacks
	          requests = {};
	          requestCount = 0;
	
	          for (var key in currentRequests) {
	            if (currentRequests.hasOwnProperty(key)) {
	              currentRequests[key](time);
	              lastActive = time;
	            }
	          }
	
	          // Disable the timeout when nothing happens for a certain
	          // period of time
	          if (time - lastActive > 2500) {
	            clearInterval(intervalHandle);
	            intervalHandle = null;
	          }
	        }, 1000 / TARGET_FPS);
	      }
	
	      return callbackHandle;
	    };
	  }(),
	
	  /**
	   * Stops the given animation.
	   *
	   * @param id {Integer} Unique animation ID
	   * @return {Boolean} Whether the animation was stopped (aka, was running before)
	   */
	  stop: function stop(id) {
	    var cleared = running[id] != null;
	    if (cleared) {
	      running[id] = null;
	    }
	
	    return cleared;
	  },
	
	  /**
	   * Whether the given animation is still running.
	   *
	   * @param id {Integer} Unique animation ID
	   * @return {Boolean} Whether the animation is still running
	   */
	  isRunning: function isRunning(id) {
	    return running[id] != null;
	  },
	
	  /**
	   * Start the animation.
	   *
	   * @param stepCallback {Function} Pointer to function which is executed on every step.
	   *   Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`
	   * @param verifyCallback {Function} Executed before every animation step.
	   *   Signature of the method should be `function() { return continueWithAnimation; }`
	   * @param completedCallback {Function}
	   *   Signature of the method should be `function(droppedFrames, finishedAnimation) {}`
	   * @param duration {Integer} Milliseconds to run the animation
	   * @param easingMethod {Function} Pointer to easing function
	   *   Signature of the method should be `function(percent) { return modifiedValue; }`
	   * @param root {Element ? document.body} Render root, when available. Used for internal
	   *   usage of requestAnimationFrame.
	   * @return {Integer} Identifier of animation. Can be used to stop it any time.
	   */
	  start: function start(stepCallback, verifyCallback, completedCallback, duration, easingMethod, root) {
	
	    var start = +new Date();
	    var lastFrame = start;
	    var percent = 0;
	    var dropCounter = 0;
	    var id = counter++;
	
	    if (!root) {
	      root = document.body;
	    }
	
	    // Compacting running db automatically every few new animations
	    if (id % 20 === 0) {
	      var newRunning = {};
	      for (var usedId in running) {
	        newRunning[usedId] = true;
	      }
	      running = newRunning;
	    }
	
	    // This is the internal step method which is called every few milliseconds
	    var step = function step(virtual) {
	
	      // Normalize virtual value
	      var render = virtual !== true;
	
	      // Get current time
	      var now = +new Date();
	
	      // Verification is executed before next animation step
	      if (!running[id] || verifyCallback && !verifyCallback(id)) {
	
	        running[id] = null;
	        completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, false);
	        return;
	      }
	
	      // For the current rendering to apply let's update omitted steps in memory.
	      // This is important to bring internal state variables up-to-date with progress in time.
	      if (render) {
	
	        var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
	        for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
	          step(true);
	          dropCounter++;
	        }
	      }
	
	      // Compute percent value
	      if (duration) {
	        percent = (now - start) / duration;
	        if (percent > 1) {
	          percent = 1;
	        }
	      }
	
	      // Execute step callback, then...
	      var value = easingMethod ? easingMethod(percent) : percent;
	      if ((stepCallback(value, now, render) === false || percent === 1) && render) {
	        running[id] = null;
	        completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, percent === 1 || duration == null);
	      } else if (render) {
	        lastFrame = now;
	        Animate.requestAnimationFrame(step, root);
	      }
	    };
	
	    // Mark as running
	    running[id] = true;
	
	    // Init first step
	    Animate.requestAnimationFrame(step, root);
	
	    // Return unique animation ID
	    return id;
	  }
	};
	
	module.exports = Animate;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(282);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(302);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(283), __esModule: true };

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(284);
	__webpack_require__(297);
	module.exports = __webpack_require__(301).f('iterator');

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(285)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(286)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(270)
	  , defined   = __webpack_require__(267);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(287)
	  , $export        = __webpack_require__(245)
	  , redefine       = __webpack_require__(288)
	  , hide           = __webpack_require__(250)
	  , has            = __webpack_require__(263)
	  , Iterators      = __webpack_require__(289)
	  , $iterCreate    = __webpack_require__(290)
	  , setToStringTag = __webpack_require__(294)
	  , getPrototypeOf = __webpack_require__(296)
	  , ITERATOR       = __webpack_require__(295)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 287 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(250);

/***/ },
/* 289 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(291)
	  , descriptor     = __webpack_require__(259)
	  , setToStringTag = __webpack_require__(294)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(250)(IteratorPrototype, __webpack_require__(295)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(252)
	  , dPs         = __webpack_require__(292)
	  , enumBugKeys = __webpack_require__(275)
	  , IE_PROTO    = __webpack_require__(272)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(257)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(293).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(251)
	  , anObject = __webpack_require__(252)
	  , getKeys  = __webpack_require__(261);
	
	module.exports = __webpack_require__(255) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(246).document && document.documentElement;

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(251).f
	  , has = __webpack_require__(263)
	  , TAG = __webpack_require__(295)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(273)('wks')
	  , uid        = __webpack_require__(274)
	  , Symbol     = __webpack_require__(246).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(263)
	  , toObject    = __webpack_require__(278)
	  , IE_PROTO    = __webpack_require__(272)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(298);
	var global        = __webpack_require__(246)
	  , hide          = __webpack_require__(250)
	  , Iterators     = __webpack_require__(289)
	  , TO_STRING_TAG = __webpack_require__(295)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(299)
	  , step             = __webpack_require__(300)
	  , Iterators        = __webpack_require__(289)
	  , toIObject        = __webpack_require__(264);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(286)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 300 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(295);

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(303), __esModule: true };

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(304);
	__webpack_require__(313);
	__webpack_require__(314);
	__webpack_require__(315);
	module.exports = __webpack_require__(247).Symbol;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(246)
	  , has            = __webpack_require__(263)
	  , DESCRIPTORS    = __webpack_require__(255)
	  , $export        = __webpack_require__(245)
	  , redefine       = __webpack_require__(288)
	  , META           = __webpack_require__(305).KEY
	  , $fails         = __webpack_require__(256)
	  , shared         = __webpack_require__(273)
	  , setToStringTag = __webpack_require__(294)
	  , uid            = __webpack_require__(274)
	  , wks            = __webpack_require__(295)
	  , wksExt         = __webpack_require__(301)
	  , wksDefine      = __webpack_require__(306)
	  , keyOf          = __webpack_require__(307)
	  , enumKeys       = __webpack_require__(308)
	  , isArray        = __webpack_require__(309)
	  , anObject       = __webpack_require__(252)
	  , toIObject      = __webpack_require__(264)
	  , toPrimitive    = __webpack_require__(258)
	  , createDesc     = __webpack_require__(259)
	  , _create        = __webpack_require__(291)
	  , gOPNExt        = __webpack_require__(310)
	  , $GOPD          = __webpack_require__(312)
	  , $DP            = __webpack_require__(251)
	  , $keys          = __webpack_require__(261)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(311).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(277).f  = $propertyIsEnumerable;
	  __webpack_require__(276).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(287)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(250)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(274)('meta')
	  , isObject = __webpack_require__(253)
	  , has      = __webpack_require__(263)
	  , setDesc  = __webpack_require__(251).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(256)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(246)
	  , core           = __webpack_require__(247)
	  , LIBRARY        = __webpack_require__(287)
	  , wksExt         = __webpack_require__(301)
	  , defineProperty = __webpack_require__(251).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(261)
	  , toIObject = __webpack_require__(264);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(261)
	  , gOPS    = __webpack_require__(276)
	  , pIE     = __webpack_require__(277);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(266);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(264)
	  , gOPN      = __webpack_require__(311).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(262)
	  , hiddenKeys = __webpack_require__(275).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(277)
	  , createDesc     = __webpack_require__(259)
	  , toIObject      = __webpack_require__(264)
	  , toPrimitive    = __webpack_require__(258)
	  , has            = __webpack_require__(263)
	  , IE8_DOM_DEFINE = __webpack_require__(254)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(255) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 313 */
/***/ function(module, exports) {



/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(306)('asyncIterator');

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(306)('observable');

/***/ }
]);
//# sourceMappingURL=simple.js.map