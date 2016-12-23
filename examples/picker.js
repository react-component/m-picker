webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(233);


/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(9)
	  , core      = __webpack_require__(10)
	  , ctx       = __webpack_require__(11)
	  , hide      = __webpack_require__(13)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },

/***/ 9:
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },

/***/ 10:
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(12);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },

/***/ 12:
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(14)
	  , createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(18) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(15)
	  , IE8_DOM_DEFINE = __webpack_require__(17)
	  , toPrimitive    = __webpack_require__(21)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(18) && !__webpack_require__(19)(function(){
	  return Object.defineProperty(__webpack_require__(20)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },

/***/ 19:
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16)
	  , document = __webpack_require__(9).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },

/***/ 22:
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },

/***/ 73:
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

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(75);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _react = __webpack_require__(42);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(73);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _zscroller = __webpack_require__(79);
	
	var _zscroller2 = _interopRequireDefault(_zscroller);
	
	var _PickerMixin = __webpack_require__(84);
	
	var _PickerMixin2 = _interopRequireDefault(_PickerMixin);
	
	var _isChildrenEqual = __webpack_require__(85);
	
	var _isChildrenEqual2 = _interopRequireDefault(_isChildrenEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Picker = _react2.default.createClass({
	    displayName: 'Picker',
	
	    mixins: [_PickerMixin2.default],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            prefixCls: 'rmc-picker',
	            pure: true,
	            onValueChange: function onValueChange() {}
	        };
	    },
	    getInitialState: function getInitialState() {
	        var selectedValueState = void 0;
	        var _props = this.props,
	            selectedValue = _props.selectedValue,
	            defaultSelectedValue = _props.defaultSelectedValue,
	            children = _props.children;
	
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
	        this.itemHeight = this.refs.indicator.offsetHeight;
	        // compact
	        this.refs.content.style.padding = this.itemHeight * 3 + 'px 0';
	        this.zscroller = new _zscroller2.default(this.refs.content, {
	            scrollingX: false,
	            snapping: true,
	            penetrationDeceleration: .1,
	            minVelocityToKeepDecelerating: 0.5,
	            scrollingComplete: this.scrollingComplete
	        });
	        this.zscroller.setDisabled(this.props.disabled);
	        this.zscroller.scroller.setSnapSize(0, this.itemHeight);
	        this.select(this.state.selectedValue);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if ('selectedValue' in nextProps) {
	            this.setState({
	                selectedValue: nextProps.selectedValue
	            });
	        }
	        this.zscroller.setDisabled(nextProps.disabled);
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	        return this.state.selectedValue !== nextState.selectedValue || !(0, _isChildrenEqual2.default)(this.props.children, nextProps.children, this.props.pure);
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        this.zscroller.reflow();
	        this.select(this.state.selectedValue);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.zscroller.destroy();
	    },
	    scrollTo: function scrollTo(top) {
	        this.zscroller.scroller.scrollTo(0, top);
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
	        var _zscroller$scroller$g = this.zscroller.scroller.getValues(),
	            top = _zscroller$scroller$g.top;
	
	        if (top >= 0) {
	            this.doScrollingComplete(top);
	        }
	    },
	    getChildMember: function getChildMember(child, m) {
	        return child[m];
	    },
	    toChildrenArray: function toChildrenArray(children) {
	        return children;
	    },
	    render: function render() {
	        var _pickerCls;
	
	        var _props2 = this.props,
	            children = _props2.children,
	            prefixCls = _props2.prefixCls,
	            className = _props2.className,
	            itemStyle = _props2.itemStyle,
	            indicatorStyle = _props2.indicatorStyle;
	        var selectedValue = this.state.selectedValue;
	
	        var itemClassName = prefixCls + '-item';
	        var selectedItemClassName = itemClassName + ' ' + prefixCls + '-item-selected';
	        var items = children.map(function (item) {
	            return _react2.default.createElement(
	                'div',
	                { style: itemStyle, className: selectedValue === item.value ? selectedItemClassName : itemClassName, key: item.value },
	                item.label
	            );
	        });
	        var pickerCls = (_pickerCls = {}, (0, _defineProperty3.default)(_pickerCls, className, !!className), (0, _defineProperty3.default)(_pickerCls, prefixCls, true), _pickerCls);
	        return _react2.default.createElement(
	            'div',
	            { className: (0, _classnames2.default)(pickerCls) },
	            _react2.default.createElement('div', { className: prefixCls + '-mask' }),
	            _react2.default.createElement('div', { className: prefixCls + '-indicator', ref: 'indicator', style: indicatorStyle }),
	            _react2.default.createElement(
	                'div',
	                { className: prefixCls + '-content', ref: 'content' },
	                items
	            )
	        );
	    }
	});
	exports.default = Picker;
	module.exports = exports['default'];

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(76);
	
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

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78);
	var $Object = __webpack_require__(10).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(18), 'Object', {defineProperty: __webpack_require__(14).f});

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	__webpack_require__(80); // vendor check
	
	var Scroller = __webpack_require__(82);
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
	
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
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
	  this.options = _extends({}, options, {
	    scrollingComplete: function scrollingComplete() {
	      _this.clearScrollbarTimer();
	      _this.timer = setTimeout(function () {
	        if (_this._destroyed) {
	          return;
	        }
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
	    if (!init && options.onScroll) {
	      options.onScroll();
	    }
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
	  this._destroyed = true;
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
	
	  var lockMouse = false;
	  var releaseLockTimer = void 0;
	
	  this.container.addEventListener('touchstart', this.onTouchStart = function (e) {
	    lockMouse = true;
	    if (releaseLockTimer) {
	      clearTimeout(releaseLockTimer);
	      releaseLockTimer = null;
	    }
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
	    releaseLockTimer = setTimeout(function () {
	      lockMouse = false;
	    }, 300);
	  }, false);
	
	  this.container.addEventListener('touchcancel', this.onTouchCancel = function (e) {
	    that.scroller.doTouchEnd(e.timeStamp);
	    releaseLockTimer = setTimeout(function () {
	      lockMouse = false;
	    }, 300);
	  }, false);
	
	  this.onMouseUp = function (e) {
	    that.scroller.doTouchEnd(e.timeStamp);
	    document.removeEventListener('mousemove', _this2.onMouseMove, false);
	    document.removeEventListener('mouseup', _this2.onMouseUp, false);
	  };
	
	  this.onMouseMove = function (e) {
	    that.scroller.doTouchMove([{
	      pageX: e.pageX,
	      pageY: e.pageY
	    }], e.timeStamp);
	  };
	
	  this.container.addEventListener('mousedown', this.onMouseDown = function (e) {
	    if (lockMouse || e.target.tagName.match(/input|textarea|select/i) || _this2.disabled) {
	      return;
	    }
	    _this2.clearScrollbarTimer();
	    that.scroller.doTouchStart([{
	      pageX: e.pageX,
	      pageY: e.pageY
	    }], e.timeStamp);
	    // reflow since the container may have changed
	    that.reflow();
	    e.preventDefault();
	    document.addEventListener('mousemove', _this2.onMouseMove, false);
	    document.addEventListener('mouseup', _this2.onMouseUp, false);
	  }, false);
	
	  this.container.addEventListener('mousewheel', this.onMouseWheel = function (e) {
	    if (that.options.zooming) {
	      that.scroller.doMouseZoom(e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
	      e.preventDefault();
	    }
	  }, false);
	};
	
	module.exports = DOMScroller;

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

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
	var Animate = __webpack_require__(83);
	
	var NOOP = function () {
	};
	
	/**
	 * A pure logic 'component' for 'virtual' scrolling/zooming.
	 */
	Scroller = function (callback, options) {
	
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
	var easeOutCubic = function (pos) {
	  return (Math.pow((pos - 1), 3) + 1);
	};
	
	/**
	 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
	 **/
	var easeInOutCubic = function (pos) {
	  if ((pos /= 0.5) < 1) {
	    return 0.5 * Math.pow(pos, 3);
	  }
	
	  return 0.5 * (Math.pow((pos - 2), 3) + 2);
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
	  setDimensions: function (clientWidth, clientHeight, contentWidth, contentHeight) {
	
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
	  setPosition: function (left, top) {
	
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
	  setSnapSize: function (width, height) {
	
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
	  activatePullToRefresh: function (height, activateCallback, deactivateCallback, startCallback) {
	
	    var self = this;
	
	    self.__refreshHeight = height;
	    self.__refreshActivate = activateCallback;
	    self.__refreshDeactivate = deactivateCallback;
	    self.__refreshStart = startCallback;
	
	  },
	
	
	  /**
	   * Starts pull-to-refresh manually.
	   */
	  triggerPullToRefresh: function () {
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
	  finishPullToRefresh: function () {
	
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
	  getValues: function () {
	
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
	  getScrollMax: function () {
	
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
	  zoomTo: function (level, animate, originLeft, originTop, callback) {
	
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
	    var left = ((originLeft + self.__scrollLeft) * level / oldLevel) - originLeft;
	    var top = ((originTop + self.__scrollTop) * level / oldLevel) - originTop;
	
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
	  zoomBy: function (factor, animate, originLeft, originTop, callback) {
	
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
	  scrollTo: function (left, top, animate, zoom, callback) {
	
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
	  scrollBy: function (left, top, animate) {
	
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
	  doMouseZoom: function (wheelDelta, timeStamp, pageX, pageY) {
	
	    var self = this;
	    var change = wheelDelta > 0 ? 0.97 : 1.03;
	
	    return self.zoomTo(self.__zoomLevel * change, false, pageX - self.__clientLeft, pageY - self.__clientTop);
	
	  },
	
	
	  /**
	   * Touch start handler for scrolling support
	   */
	  doTouchStart: function (touches, timeStamp) {
	
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
	  doTouchMove: function (touches, timeStamp, scale) {
	
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
	          scrollLeft = ((currentTouchLeftRel + scrollLeft) * level / oldLevel) - currentTouchLeftRel;
	          scrollTop = ((currentTouchTopRel + scrollTop) * level / oldLevel) - currentTouchTopRel;
	
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
	
	            scrollLeft += (moveX / 2 * this.options.speedMultiplier);
	
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
	
	            scrollTop += (moveY / 2 * this.options.speedMultiplier);
	
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
	  doTouchEnd: function (timeStamp) {
	
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
	      if (self.__isSingleTouch && self.options.animating && (timeStamp - self.__lastTouchMove) <= 100) {
	
	        // Then figure out what the scroll position was about 100ms ago
	        var positions = self.__positions;
	        var endPos = positions.length - 1;
	        var startPos = endPos;
	
	        // Move pointer to position measured 100ms ago
	        for (var i = endPos; i > 0 && positions[i] > (self.__lastTouchMove - 100); i -= 3) {
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
	      } else if ((timeStamp - self.__lastTouchMove) > 100) {
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
	  __publish: function (left, top, zoom, animate) {
	
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
	
	      var step = function (percent, now, render) {
	
	        if (render) {
	
	          self.__scrollLeft = oldLeft + (diffLeft * percent);
	          self.__scrollTop = oldTop + (diffTop * percent);
	          self.__zoomLevel = oldZoom + (diffZoom * percent);
	
	          // Push values out
	          if (self.__callback) {
	            self.__callback(self.__scrollLeft, self.__scrollTop, self.__zoomLevel);
	          }
	
	        }
	      };
	
	      var verify = function (id) {
	        return self.__isAnimating === id;
	      };
	
	      var completed = function (renderedFramesPerSecond, animationId, wasFinished) {
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
	  __computeScrollMax: function (zoomLevel) {
	
	    var self = this;
	
	    if (zoomLevel == null) {
	      zoomLevel = self.__zoomLevel;
	    }
	
	    self.__maxScrollLeft = Math.max((self.__contentWidth * zoomLevel) - self.__clientWidth, 0);
	    self.__maxScrollTop = Math.max((self.__contentHeight * zoomLevel) - self.__clientHeight, 0);
	
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
	  __startDeceleration: function (timeStamp) {
	
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
	    var step = function (percent, now, render) {
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
	    var verify = function () {
	      var shouldContinue = Math.abs(self.__decelerationVelocityX) >= minVelocityToKeepDecelerating || Math.abs(self.__decelerationVelocityY) >= minVelocityToKeepDecelerating;
	      if (!shouldContinue) {
	        self.__didDecelerationComplete = true;
	      }
	      return shouldContinue;
	    };
	
	    var completed = function (renderedFramesPerSecond, animationId, wasFinished) {
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
	  __stepThroughDeceleration: function (render) {
	
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

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
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
	var raf = __webpack_require__(80);
	
	var desiredFrames = 60;
	var millisecondsPerSecond = 1000;
	var running = {};
	var counter = 1;
	var win = typeof window !== 'undefined' ? window : undefined;
	
	if (!win) {
	  win = typeof global !== 'undefined' ? global : {};
	}
	
	var Animate = {
	  /**
	   * Stops the given animation.
	   *
	   * @param id {Integer} Unique animation ID
	   * @return {Boolean} Whether the animation was stopped (aka, was running before)
	   */
	  stop: function (id) {
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
	  isRunning: function (id) {
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
	   * @return {Integer} Identifier of animation. Can be used to stop it any time.
	   */
	  start: function (stepCallback, verifyCallback, completedCallback, duration, easingMethod) {
	    var start = +new Date();
	    var lastFrame = start;
	    var percent = 0;
	    var dropCounter = 0;
	    var id = counter++;
	
	    // Compacting running db automatically every few new animations
	    if (id % 20 === 0) {
	      var newRunning = {};
	      for (var usedId in running) {
	        newRunning[usedId] = true;
	      }
	      running = newRunning;
	    }
	
	    // This is the internal step method which is called every few milliseconds
	    var step = function (virtual) {
	      // Normalize virtual value
	      var render = virtual !== true;
	
	      // Get current time
	      var now = +new Date();
	
	      // Verification is executed before next animation step
	      if (!running[id] || (verifyCallback && !verifyCallback(id))) {
	
	        running[id] = null;
	        completedCallback && completedCallback(desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)), id, false);
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
	        completedCallback && completedCallback(desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)), id, percent === 1 || duration == null);
	      } else if (render) {
	        lastFrame = now;
	        raf(step);
	      }
	    };
	
	    // Mark as running
	    running[id] = true;
	
	    // Init first step
	    raf(step);
	
	    // Return unique animation ID
	    return id;
	  }
	};
	
	module.exports = Animate;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 84:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    select: function select(value) {
	        var children = this.toChildrenArray(this.props.children);
	        for (var i = 0, len = children.length; i < len; i++) {
	            if (this.getChildMember(children[i], 'value') === value) {
	                this.selectByIndex(i);
	                return;
	            }
	        }
	        this.selectByIndex(0);
	    },
	    selectByIndex: function selectByIndex(index) {
	        if (index < 0 || index >= this.toChildrenArray(this.props.children).length || !this.itemHeight) {
	            return;
	        }
	        this.scrollTo(index * this.itemHeight);
	    },
	    doScrollingComplete: function doScrollingComplete(top) {
	        var index = top / this.itemHeight;
	        var floor = Math.floor(index);
	        if (index - floor > 0.5) {
	            index = floor + 1;
	        } else {
	            index = floor;
	        }
	        var children = this.toChildrenArray(this.props.children);
	        index = Math.min(index, children.length - 1);
	        var child = children[index];
	        this.fireValueChange(this.getChildMember(child, 'value'));
	    }
	};
	module.exports = exports['default'];

/***/ },

/***/ 85:
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