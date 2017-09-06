webpackJsonp([0],{

/***/ 101:
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(117)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(206)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_less__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_picker_assets_popup_less__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_picker_assets_popup_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rmc_picker_assets_popup_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Popup__ = __webpack_require__(300);




/* tslint:disable:no-console */






var Demo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

    function Demo() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));

        _this.state = {
            disabled: false,
            value: null
        };
        _this.disable = function () {
            _this.setState({
                disabled: !_this.state.disabled
            });
        };
        _this.onOk = function (value) {
            console.log('onOk', value);
            _this.setState({
                value: value
            });
        };
        _this.onDismiss = function () {
            console.log('onDismiss');
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Demo, [{
        key: 'render',
        value: function render() {
            var popupContent = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { style: { height: 160, display: 'flex', justifyContent: 'center', alignItems: 'center' } },
                'popup content'
            );
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { style: { margin: '10px 30px' } },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'h2',
                    null,
                    'popup date picker'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'button',
                    { onClick: this.disable },
                    this.state.disabled ? 'enable' : 'disable'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src_Popup__["a" /* default */],
                        { className: 'fortest', transitionName: 'rmc-picker-popup-slide-fade', maskTransitionName: 'rmc-picker-popup-fade', content: popupContent, title: 'Picker', disabled: this.state.disabled, onDismiss: this.onDismiss, onOk: this.onOk, value: this.state.value },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            'button',
                            { disabled: this.state.disabled },
                            'open'
                        )
                    )
                )
            );
        }
    }]);

    return Demo;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(101);
} catch (err) {
  var index = __webpack_require__(101);
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];
      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },


  endEvents: endEvents,

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (TransitionEvents);

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCssAnimationSupported; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_component_classes__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_component_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_component_classes__);




var isCssAnimationSupported = __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = __WEBPACK_IMPORTED_MODULE_2_component_classes___default()(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;



/* harmony default export */ __webpack_exports__["b"] = (cssAnimation);

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(9);
var invariant = __webpack_require__(1);
var ReactPropTypesSecret = __webpack_require__(74);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AnimateChild__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util__ = __webpack_require__(119);










var defaultKey = 'rc_animate_' + Date.now();


function getChildrenFromProps(props) {
  var children = props.children;
  if (__WEBPACK_IMPORTED_MODULE_6_react___default.a.isValidElement(children)) {
    if (!children.key) {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Animate, _React$Component);

  function Animate(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Animate);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(_this.props))
    };

    _this.childrenRefs = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(nextChild || currentChild, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["c" /* mergeChildren */])(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["d" /* findShownChildInChildrenByKey */])(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["d" /* findShownChildInChildrenByKey */])(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["d" /* findShownChildInChildrenByKey */])(currentChildren, key, showProp);
      }
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findChildInChildrenByKey */])(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9__AnimateChild__["a" /* default */],
            {
              key: child.key,
              ref: function ref(node) {
                return _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Animate.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
  componentProps: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  animation: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  transitionName: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object]),
  transitionEnter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  transitionAppear: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  exclusive: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  transitionLeave: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  onEnd: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onEnter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onLeave: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onAppear: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  showProp: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string
};
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else {
      if (type === 'appear') {
        if (__WEBPACK_IMPORTED_MODULE_10__util__["a" /* default */].allowAppearCallback(props)) {
          props.onAppear(key);
          props.onEnd(key, true);
        }
      } else {
        if (__WEBPACK_IMPORTED_MODULE_10__util__["a" /* default */].allowEnterCallback(props)) {
          props.onEnter(key);
          props.onEnd(key, true);
        }
      }
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (__WEBPACK_IMPORTED_MODULE_10__util__["a" /* default */].allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["e" /* isSameChildren */])(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Animate);

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_css_animation__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util__ = __webpack_require__(119);











var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AnimateChild, _React$Component);

  function AnimateChild() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AnimateChild);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(transitionName)) === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((__WEBPACK_IMPORTED_MODULE_8_css_animation__["a" /* isCssAnimationSupported */] || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_css_animation__["b" /* default */])(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

AnimateChild.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any
};
/* harmony default export */ __webpack_exports__["a"] = (AnimateChild);

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toArrayChildren;
/* harmony export (immutable) */ __webpack_exports__["b"] = findChildInChildrenByKey;
/* harmony export (immutable) */ __webpack_exports__["d"] = findShownChildInChildrenByKey;
/* unused harmony export findHiddenChildInChildrenByKey */
/* harmony export (immutable) */ __webpack_exports__["e"] = isSameChildren;
/* harmony export (immutable) */ __webpack_exports__["c"] = mergeChildren;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function toArrayChildren(children) {
  var ret = [];
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = shouldFirePress;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

function PressEvent(nativeEvent) {
    var _this = this;

    this.nativeEvent = nativeEvent;
    ['type', 'currentTarget', 'target', 'touches', 'changedTouches'].forEach(function (m) {
        _this[m] = nativeEvent[m];
    });
    if (!nativeEvent.$pressSeq) {
        nativeEvent.$pressSeq = 1;
    } else {
        nativeEvent.$pressSeq += 1;
    }
    this.$pressSeq = nativeEvent.$pressSeq;
}
PressEvent.prototype = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, PressEvent.prototype, {
    preventDefault: function preventDefault() {
        this.nativeEvent.preventDefault();
    },
    stopPropagation: function stopPropagation() {
        var nativeEvent = this.nativeEvent,
            $pressSeq = this.$pressSeq;

        if (nativeEvent.$stopPressSeq) {
            return;
        }
        nativeEvent.$stopPressSeq = $pressSeq;
    }
});
function shouldFirePress(e) {
    var nativeEvent = e.nativeEvent,
        $pressSeq = e.$pressSeq;

    if (!nativeEvent.$stopPressSeq) {
        return true;
    }
    return nativeEvent.$stopPressSeq >= $pressSeq;
}
/* harmony default export */ __webpack_exports__["a"] = (PressEvent);

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PressEvent__ = __webpack_require__(210);





// inspired by react-native



function keyMirror(obj) {
    Object.keys(obj).forEach(function (k) {
        return obj[k] = k;
    });
    return obj;
}
function copy(from, list) {
    var to = {};
    list.forEach(function (k) {
        to[k] = from[k];
    });
    return to;
}
function extractSingleTouch(_nativeEvent) {
    var nativeEvent = _nativeEvent;
    if (nativeEvent.nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
    }
    var touches = nativeEvent.touches;
    var changedTouches = nativeEvent.changedTouches;
    var hasTouches = touches && touches.length > 0;
    var hasChangedTouches = changedTouches && changedTouches.length > 0;
    return !hasTouches && hasChangedTouches ? changedTouches[0] : hasTouches ? touches[0] : nativeEvent;
}
/**
 * Touchable states.
 */
var States = keyMirror({
    NOT_RESPONDER: null,
    RESPONDER_INACTIVE_PRESS_IN: null,
    RESPONDER_INACTIVE_PRESS_OUT: null,
    RESPONDER_ACTIVE_PRESS_IN: null,
    RESPONDER_ACTIVE_PRESS_OUT: null,
    RESPONDER_ACTIVE_LONG_PRESS_IN: null,
    RESPONDER_ACTIVE_LONG_PRESS_OUT: null,
    ERROR: null
});
/**
 * Quick lookup map for states that are considered to be "active"
 */
var IsActive = {
    RESPONDER_ACTIVE_PRESS_OUT: true,
    RESPONDER_ACTIVE_PRESS_IN: true
};
/**
 * Quick lookup for states that are considered to be "pressing" and are
 * therefore eligible to result in a "selection" if the press stops.
 */
var IsPressingIn = {
    RESPONDER_INACTIVE_PRESS_IN: true,
    RESPONDER_ACTIVE_PRESS_IN: true,
    RESPONDER_ACTIVE_LONG_PRESS_IN: true
};
var IsLongPressingIn = {
    RESPONDER_ACTIVE_LONG_PRESS_IN: true
};
/**
 * Inputs to the state machine.
 */
var Signals = keyMirror({
    DELAY: null,
    RESPONDER_GRANT: null,
    RESPONDER_RELEASE: null,
    RESPONDER_TERMINATED: null,
    ENTER_PRESS_RECT: null,
    LEAVE_PRESS_RECT: null,
    LONG_PRESS_DETECTED: null
});
/**
 * Mapping from States x Signals => States
 */
var Transitions = {
    NOT_RESPONDER: {
        DELAY: States.ERROR,
        RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
        RESPONDER_RELEASE: States.ERROR,
        RESPONDER_TERMINATED: States.ERROR,
        ENTER_PRESS_RECT: States.ERROR,
        LEAVE_PRESS_RECT: States.ERROR,
        LONG_PRESS_DETECTED: States.ERROR
    },
    RESPONDER_INACTIVE_PRESS_IN: {
        DELAY: States.RESPONDER_ACTIVE_PRESS_IN,
        RESPONDER_GRANT: States.ERROR,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
        LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
        LONG_PRESS_DETECTED: States.ERROR
    },
    RESPONDER_INACTIVE_PRESS_OUT: {
        DELAY: States.RESPONDER_ACTIVE_PRESS_OUT,
        RESPONDER_GRANT: States.ERROR,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
        LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
        LONG_PRESS_DETECTED: States.ERROR
    },
    RESPONDER_ACTIVE_PRESS_IN: {
        DELAY: States.ERROR,
        RESPONDER_GRANT: States.ERROR,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
        LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
        LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN
    },
    RESPONDER_ACTIVE_PRESS_OUT: {
        DELAY: States.ERROR,
        RESPONDER_GRANT: States.ERROR,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
        LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
        LONG_PRESS_DETECTED: States.ERROR
    },
    RESPONDER_ACTIVE_LONG_PRESS_IN: {
        DELAY: States.ERROR,
        RESPONDER_GRANT: States.ERROR,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
        LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
        LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN
    },
    RESPONDER_ACTIVE_LONG_PRESS_OUT: {
        DELAY: States.ERROR,
        RESPONDER_GRANT: States.ERROR,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
        LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
        LONG_PRESS_DETECTED: States.ERROR
    },
    error: {
        DELAY: States.NOT_RESPONDER,
        RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.NOT_RESPONDER,
        LEAVE_PRESS_RECT: States.NOT_RESPONDER,
        LONG_PRESS_DETECTED: States.NOT_RESPONDER
    }
};
// ==== Typical Constants for integrating into UI components ====
// const HIT_EXPAND_PX = 20;
// const HIT_VERT_OFFSET_PX = 10;
var HIGHLIGHT_DELAY_MS = 130;
var PRESS_EXPAND_PX = 20;
var LONG_PRESS_THRESHOLD = 500;
var LONG_PRESS_DELAY_MS = LONG_PRESS_THRESHOLD - HIGHLIGHT_DELAY_MS;
var LONG_PRESS_ALLOWED_MOVEMENT = 10;
var lastClickTime = 0;
var pressDelay = 200;
function isAllowPress() {
    // avoid click penetration
    return Date.now() - lastClickTime >= pressDelay;
}

var Touchable = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Touchable, _React$Component);

    function Touchable() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Touchable);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Touchable.__proto__ || Object.getPrototypeOf(Touchable)).apply(this, arguments));

        _this.state = {
            active: false
        };
        _this.onTouchStart = function (e) {
            _this.callChildEvent('onTouchStart', e);
            _this.lockMouse = true;
            if (_this.releaseLockTimer) {
                clearTimeout(_this.releaseLockTimer);
            }
            _this.touchableHandleResponderGrant(e.nativeEvent);
        };
        _this.onTouchMove = function (e) {
            _this.callChildEvent('onTouchMove', e);
            _this.touchableHandleResponderMove(e.nativeEvent);
        };
        _this.onTouchEnd = function (e) {
            _this.callChildEvent('onTouchEnd', e);
            _this.releaseLockTimer = setTimeout(function () {
                _this.lockMouse = false;
            }, 300);
            _this.touchableHandleResponderRelease(new __WEBPACK_IMPORTED_MODULE_7__PressEvent__["a" /* default */](e.nativeEvent));
        };
        _this.onTouchCancel = function (e) {
            _this.callChildEvent('onTouchCancel', e);
            _this.releaseLockTimer = setTimeout(function () {
                _this.lockMouse = false;
            }, 300);
            _this.touchableHandleResponderTerminate(e.nativeEvent);
        };
        _this.onMouseDown = function (e) {
            _this.callChildEvent('onMouseDown', e);
            if (_this.lockMouse) {
                return;
            }
            _this.touchableHandleResponderGrant(e.nativeEvent);
            document.addEventListener('mousemove', _this.touchableHandleResponderMove, false);
            document.addEventListener('mouseup', _this.onMouseUp, false);
        };
        _this.onMouseUp = function (e) {
            document.removeEventListener('mousemove', _this.touchableHandleResponderMove, false);
            document.removeEventListener('mouseup', _this.onMouseUp, false);
            _this.touchableHandleResponderRelease(new __WEBPACK_IMPORTED_MODULE_7__PressEvent__["a" /* default */](e));
        };
        _this.touchableHandleResponderMove = function (e) {
            if (!_this.touchable.startMouse) {
                return;
            }
            // Measurement may not have returned yet.
            if (!_this.touchable.dimensionsOnActivate || _this.touchable.touchState === States.NOT_RESPONDER) {
                return;
            }
            // Not enough time elapsed yet, wait for highlight -
            // this is just a perf optimization.
            if (_this.touchable.touchState === States.RESPONDER_INACTIVE_PRESS_IN) {
                return;
            }
            var touch = extractSingleTouch(e);
            var pageX = touch && touch.pageX;
            var pageY = touch && touch.pageY;
            if (_this.pressInLocation) {
                var movedDistance = _this._getDistanceBetweenPoints(pageX, pageY, _this.pressInLocation.pageX, _this.pressInLocation.pageY);
                if (movedDistance > LONG_PRESS_ALLOWED_MOVEMENT) {
                    _this._cancelLongPressDelayTimeout();
                }
            }
            if (_this.checkTouchWithinActive(e)) {
                _this._receiveSignal(Signals.ENTER_PRESS_RECT, e);
                var curState = _this.touchable.touchState;
                if (curState === States.RESPONDER_INACTIVE_PRESS_IN) {
                    _this._cancelLongPressDelayTimeout();
                }
            } else {
                _this._cancelLongPressDelayTimeout();
                _this._receiveSignal(Signals.LEAVE_PRESS_RECT, e);
            }
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Touchable, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.touchable = { touchState: undefined };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.root = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.root = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this);
            // disabled auto clear active state
            if (this.props.disabled && this.state.active) {
                this.setState({
                    active: false
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.releaseLockTimer) {
                clearTimeout(this.releaseLockTimer);
            }
            if (this.touchableDelayTimeout) {
                clearTimeout(this.touchableDelayTimeout);
            }
            if (this.longPressDelayTimeout) {
                clearTimeout(this.longPressDelayTimeout);
            }
            if (this.pressOutDelayTimeout) {
                clearTimeout(this.pressOutDelayTimeout);
            }
        }
    }, {
        key: 'callChildEvent',
        value: function callChildEvent(event, e) {
            var childHandle = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.only(this.props.children).props[event];
            if (childHandle) {
                childHandle(e);
            }
        }
    }, {
        key: '_remeasureMetricsOnInit',
        value: function _remeasureMetricsOnInit(e) {
            var root = this.root;

            var touch = extractSingleTouch(e);
            var boundingRect = root.getBoundingClientRect();
            this.touchable = {
                touchState: this.touchable.touchState,
                startMouse: {
                    pageX: touch.pageX,
                    pageY: touch.pageY
                },
                positionOnGrant: {
                    left: boundingRect.left + window.pageXOffset,
                    top: boundingRect.top + window.pageYOffset,
                    width: boundingRect.width,
                    height: boundingRect.height,
                    clientLeft: boundingRect.left,
                    clientTop: boundingRect.top
                }
            };
        }
    }, {
        key: 'touchableHandleResponderGrant',
        value: function touchableHandleResponderGrant(e) {
            var _this2 = this;

            this.touchable.touchState = States.NOT_RESPONDER;
            if (this.pressOutDelayTimeout) {
                clearTimeout(this.pressOutDelayTimeout);
                this.pressOutDelayTimeout = null;
            }
            if (this.props.fixClickPenetration && !isAllowPress()) {
                return;
            }
            this._remeasureMetricsOnInit(e);
            this._receiveSignal(Signals.RESPONDER_GRANT, e);
            var _props = this.props,
                delayMS = _props.delayPressIn,
                longDelayMS = _props.delayLongPress;

            if (delayMS) {
                this.touchableDelayTimeout = setTimeout(function () {
                    _this2._handleDelay(e);
                }, delayMS);
            } else {
                this._handleDelay(e);
            }
            var longPressEvent = new __WEBPACK_IMPORTED_MODULE_7__PressEvent__["a" /* default */](e);
            this.longPressDelayTimeout = setTimeout(function () {
                _this2._handleLongDelay(longPressEvent);
            }, longDelayMS + delayMS);
        }
    }, {
        key: 'checkScroll',
        value: function checkScroll(e) {
            var positionOnGrant = this.touchable.positionOnGrant;
            // container or window scroll
            var boundingRect = this.root.getBoundingClientRect();
            if (boundingRect.left !== positionOnGrant.clientLeft || boundingRect.top !== positionOnGrant.clientTop) {
                this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
                return false;
            }
        }
    }, {
        key: 'touchableHandleResponderRelease',
        value: function touchableHandleResponderRelease(e) {
            if (!this.touchable.startMouse) {
                return;
            }
            var touch = extractSingleTouch(e);
            if (Math.abs(touch.pageX - this.touchable.startMouse.pageX) > 30 || Math.abs(touch.pageY - this.touchable.startMouse.pageY) > 30) {
                this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
                return;
            }
            if (this.checkScroll(e) === false) {
                return;
            }
            this._receiveSignal(Signals.RESPONDER_RELEASE, e);
        }
    }, {
        key: 'touchableHandleResponderTerminate',
        value: function touchableHandleResponderTerminate(e) {
            if (!this.touchable.startMouse) {
                return;
            }
            this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
        }
    }, {
        key: 'checkTouchWithinActive',
        value: function checkTouchWithinActive(e) {
            var positionOnGrant = this.touchable.positionOnGrant;
            var _props2 = this.props,
                _props2$pressRetentio = _props2.pressRetentionOffset,
                pressRetentionOffset = _props2$pressRetentio === undefined ? {} : _props2$pressRetentio,
                hitSlop = _props2.hitSlop;

            var pressExpandLeft = pressRetentionOffset.left;
            var pressExpandTop = pressRetentionOffset.top;
            var pressExpandRight = pressRetentionOffset.right;
            var pressExpandBottom = pressRetentionOffset.bottom;
            if (hitSlop) {
                pressExpandLeft += hitSlop.left;
                pressExpandTop += hitSlop.top;
                pressExpandRight += hitSlop.right;
                pressExpandBottom += hitSlop.bottom;
            }
            var touch = extractSingleTouch(e);
            var pageX = touch && touch.pageX;
            var pageY = touch && touch.pageY;
            return pageX > positionOnGrant.left - pressExpandLeft && pageY > positionOnGrant.top - pressExpandTop && pageX < positionOnGrant.left + positionOnGrant.width + pressExpandRight && pageY < positionOnGrant.top + positionOnGrant.height + pressExpandBottom;
        }
    }, {
        key: 'callProp',
        value: function callProp(name, e) {
            if (this.props[name] && !this.props.disabled) {
                this.props[name](e);
            }
        }
    }, {
        key: 'touchableHandleActivePressIn',
        value: function touchableHandleActivePressIn(e) {
            this.setActive(true);
            this.callProp('onPressIn', e);
        }
    }, {
        key: 'touchableHandleActivePressOut',
        value: function touchableHandleActivePressOut(e) {
            this.setActive(false);
            this.callProp('onPressOut', e);
        }
    }, {
        key: 'touchableHandlePress',
        value: function touchableHandlePress(e) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__PressEvent__["b" /* shouldFirePress */])(e)) {
                this.callProp('onPress', e);
            }
            lastClickTime = Date.now();
        }
    }, {
        key: 'touchableHandleLongPress',
        value: function touchableHandleLongPress(e) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__PressEvent__["b" /* shouldFirePress */])(e)) {
                this.callProp('onLongPress', e);
            }
        }
    }, {
        key: 'setActive',
        value: function setActive(active) {
            if (this.props.activeClassName || this.props.activeStyle) {
                this.setState({
                    active: active
                });
            }
        }
    }, {
        key: '_remeasureMetricsOnActivation',
        value: function _remeasureMetricsOnActivation() {
            this.touchable.dimensionsOnActivate = this.touchable.positionOnGrant;
        }
    }, {
        key: '_handleDelay',
        value: function _handleDelay(e) {
            this.touchableDelayTimeout = null;
            this._receiveSignal(Signals.DELAY, e);
        }
    }, {
        key: '_handleLongDelay',
        value: function _handleLongDelay(e) {
            this.longPressDelayTimeout = null;
            var curState = this.touchable.touchState;
            if (curState !== States.RESPONDER_ACTIVE_PRESS_IN && curState !== States.RESPONDER_ACTIVE_LONG_PRESS_IN) {
                console.error('Attempted to transition from state `' + curState + '` to `' + States.RESPONDER_ACTIVE_LONG_PRESS_IN + '`, which is not supported. This is ' + 'most likely due to `Touchable.longPressDelayTimeout` not being cancelled.');
            } else {
                this._receiveSignal(Signals.LONG_PRESS_DETECTED, e);
            }
        }
    }, {
        key: '_receiveSignal',
        value: function _receiveSignal(signal, e) {
            var curState = this.touchable.touchState;
            var nextState = Transitions[curState] && Transitions[curState][signal];
            if (!nextState) {
                return;
            }
            if (nextState === States.ERROR) {
                return;
            }
            if (curState !== nextState) {
                this._performSideEffectsForTransition(curState, nextState, signal, e);
                this.touchable.touchState = nextState;
            }
        }
    }, {
        key: '_cancelLongPressDelayTimeout',
        value: function _cancelLongPressDelayTimeout() {
            if (this.longPressDelayTimeout) {
                clearTimeout(this.longPressDelayTimeout);
                this.longPressDelayTimeout = null;
            }
        }
    }, {
        key: '_isHighlight',
        value: function _isHighlight(state) {
            return state === States.RESPONDER_ACTIVE_PRESS_IN || state === States.RESPONDER_ACTIVE_LONG_PRESS_IN;
        }
    }, {
        key: '_savePressInLocation',
        value: function _savePressInLocation(e) {
            var touch = extractSingleTouch(e);
            var pageX = touch && touch.pageX;
            var pageY = touch && touch.pageY;
            this.pressInLocation = { pageX: pageX, pageY: pageY };
        }
    }, {
        key: '_getDistanceBetweenPoints',
        value: function _getDistanceBetweenPoints(aX, aY, bX, bY) {
            var deltaX = aX - bX;
            var deltaY = aY - bY;
            return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        }
    }, {
        key: '_performSideEffectsForTransition',
        value: function _performSideEffectsForTransition(curState, nextState, signal, e) {
            var curIsHighlight = this._isHighlight(curState);
            var newIsHighlight = this._isHighlight(nextState);
            var isFinalSignal = signal === Signals.RESPONDER_TERMINATED || signal === Signals.RESPONDER_RELEASE;
            if (isFinalSignal) {
                this._cancelLongPressDelayTimeout();
            }
            if (!IsActive[curState] && IsActive[nextState]) {
                this._remeasureMetricsOnActivation();
            }
            if (IsPressingIn[curState] && signal === Signals.LONG_PRESS_DETECTED) {
                this.touchableHandleLongPress(e);
            }
            if (newIsHighlight && !curIsHighlight) {
                this._startHighlight(e);
            } else if (!newIsHighlight && curIsHighlight) {
                this._endHighlight(e);
            }
            if (IsPressingIn[curState] && signal === Signals.RESPONDER_RELEASE) {
                var hasLongPressHandler = !!this.props.onLongPress;
                var pressIsLongButStillCallOnPress = IsLongPressingIn[curState] && (!hasLongPressHandler || !this.props.longPressCancelsPress // or we're told to ignore it.
                );
                var shouldInvokePress = !IsLongPressingIn[curState] || pressIsLongButStillCallOnPress;
                if (shouldInvokePress) {
                    if (!newIsHighlight && !curIsHighlight) {
                        // we never highlighted because of delay, but we should highlight now
                        this._startHighlight(e);
                        this._endHighlight(e);
                    }
                    this.touchableHandlePress(e);
                }
            }
            if (this.touchableDelayTimeout) {
                clearTimeout(this.touchableDelayTimeout);
                this.touchableDelayTimeout = null;
            }
        }
    }, {
        key: '_startHighlight',
        value: function _startHighlight(e) {
            this._savePressInLocation(e);
            this.touchableHandleActivePressIn(e);
        }
    }, {
        key: '_endHighlight',
        value: function _endHighlight(e) {
            var _this3 = this;

            if (this.props.delayPressOut) {
                this.pressOutDelayTimeout = setTimeout(function () {
                    _this3.touchableHandleActivePressOut(e);
                }, this.props.delayPressOut);
            } else {
                this.touchableHandleActivePressOut(e);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                children = _props3.children,
                disabled = _props3.disabled,
                activeStyle = _props3.activeStyle,
                activeClassName = _props3.activeClassName;

            var events = disabled ? undefined : copy(this, ['onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel', 'onMouseDown']);
            var child = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.only(children);
            if (!disabled && this.state.active) {
                var _child$props = child.props,
                    style = _child$props.style,
                    className = _child$props.className;

                if (activeStyle) {
                    style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, activeStyle);
                }
                if (activeClassName) {
                    if (className) {
                        className += ' ' + activeClassName;
                    } else {
                        className = activeClassName;
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(child, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: className,
                    style: style }, events));
            }
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(child, events);
        }
    }]);

    return Touchable;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Touchable);

Touchable.defaultProps = {
    fixClickPenetration: false,
    disabled: false,
    delayPressIn: HIGHLIGHT_DELAY_MS,
    delayLongPress: LONG_PRESS_DELAY_MS,
    delayPressOut: 100,
    pressRetentionOffset: {
        left: PRESS_EXPAND_PX,
        right: PRESS_EXPAND_PX,
        top: PRESS_EXPAND_PX,
        bottom: PRESS_EXPAND_PX
    },
    hitSlop: undefined,
    longPressCancelsPress: true
};

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_animate__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LazyRenderBox__ = __webpack_require__(297);








function noop() {}

var Dialog = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Dialog, _React$Component);

    function Dialog() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Dialog);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));

        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var footer = void 0;
            if (props.footer) {
                footer = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { className: prefixCls + '-footer', ref: function ref(el) {
                        return _this.footerRef = el;
                    } }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { className: prefixCls + '-header', ref: function ref(el) {
                        return _this.headerRef = el;
                    } }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { className: prefixCls + '-title' }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", { onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: prefixCls + '-close-x' }));
            }
            var transitionName = _this.getTransitionName();
            var dialogElement = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__LazyRenderBox__["a" /* default */], { key: "dialog-element", role: "document", ref: function ref(el) {
                    return _this.dialogRef = el;
                }, style: props.style || {}, className: prefixCls + ' ' + (props.className || ''), visible: props.visible }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { className: prefixCls + '-content' }, closer, header, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { className: prefixCls + '-body', style: props.bodyStyle, ref: function ref(el) {
                    return _this.bodyRef = el;
                } }, props.children), footer));
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_rc_animate__["a" /* default */], { key: "dialog", showProp: "visible", onAppear: _this.onAnimateAppear, onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, dialogElement);
        };
        _this.onAnimateAppear = function () {
            document.body.style.overflow = 'hidden';
        };
        _this.onAnimateLeave = function () {
            document.body.style.overflow = '';
            if (_this.wrapRef) {
                _this.wrapRef.style.display = 'none';
            }
            if (_this.props.onAnimateLeave) {
                _this.props.onAnimateLeave();
            }
            if (_this.props.afterClose) {
                _this.props.afterClose();
            }
        };
        _this.close = function (e) {
            if (_this.props.onClose) {
                _this.props.onClose(e);
            }
        };
        _this.onMaskClick = function (e) {
            if (e.target === e.currentTarget) {
                _this.close(e);
            }
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Dialog, [{
        key: 'getZIndexStyle',
        value: function getZIndexStyle() {
            var style = {};
            var props = this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        }
    }, {
        key: 'getWrapStyle',
        value: function getWrapStyle() {
            var wrapStyle = this.props.wrapStyle || {};
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.getZIndexStyle(), wrapStyle);
        }
    }, {
        key: 'getMaskStyle',
        value: function getMaskStyle() {
            var maskStyle = this.props.maskStyle || {};
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.getZIndexStyle(), maskStyle);
        }
    }, {
        key: 'getMaskTransitionName',
        value: function getMaskTransitionName() {
            var props = this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        }
    }, {
        key: 'getTransitionName',
        value: function getTransitionName() {
            var props = this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        }
    }, {
        key: 'getMaskElement',
        value: function getMaskElement() {
            var props = this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = this.getMaskTransitionName();
                maskElement = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__LazyRenderBox__["a" /* default */], { style: this.getMaskStyle(), key: "mask-element", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible });
                if (maskTransition) {
                    maskElement = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_rc_animate__["a" /* default */], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            var prefixCls = props.prefixCls,
                maskClosable = props.maskClosable;

            var style = this.getWrapStyle();
            if (props.visible) {
                style.display = null;
            }
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", null, this.getMaskElement(), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: function ref(el) {
                    return _this2.wrapRef = el;
                }, onClick: maskClosable ? this.onMaskClick : undefined, role: "dialog", "aria-labelledby": props.title, style: style }, props.wrapProps), this.getDialogElement()));
        }
    }]);

    return Dialog;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Dialog);

Dialog.defaultProps = {
    afterClose: noop,
    className: '',
    mask: true,
    visible: false,
    closable: true,
    maskClosable: true,
    prefixCls: 'rmc-dialog',
    onClose: noop
};

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Dialog__ = __webpack_require__(295);








function noop() {}

var DialogWrap = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(DialogWrap, _React$Component);

    function DialogWrap() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, DialogWrap);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (DialogWrap.__proto__ || Object.getPrototypeOf(DialogWrap)).apply(this, arguments));

        _this.removeContainer = function () {
            var container = document.querySelector('#' + _this.props.prefixCls + '-container');
            if (container) {
                __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.unmountComponentAtNode(container);
                container.parentNode.removeChild(container);
            }
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(DialogWrap, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.visible) {
                this.componentDidUpdate();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.renderDialog(false);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.visible !== this.props.visible;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.renderDialog(this.props.visible);
        }
    }, {
        key: 'getComponent',
        value: function getComponent(visible) {
            var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props);
            ['visible', 'onAnimateLeave'].forEach(function (key) {
                if (props.hasOwnProperty(key)) {
                    delete props[key];
                }
            });
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Dialog__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { visible: visible, onAnimateLeave: this.removeContainer }));
        }
    }, {
        key: 'renderDialog',
        value: function renderDialog(visible) {
            var prefixCls = this.props.prefixCls;
            var container = document.querySelector('#' + prefixCls + '-container');
            if (!container) {
                container = document.createElement('div');
                container.setAttribute('id', prefixCls + '-container');
                document.body.appendChild(container);
            }
            __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.unstable_renderSubtreeIntoContainer(this, this.getComponent(visible), container);
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return DialogWrap;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (DialogWrap);

DialogWrap.defaultProps = {
    visible: false,
    prefixCls: 'rmc-dialog',
    onClose: noop
};

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);







var LazyRenderBox = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, LazyRenderBox);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (LazyRenderBox.__proto__ || Object.getPrototypeOf(LazyRenderBox)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(LazyRenderBox, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !!nextProps.hiddenClassName || !!nextProps.visible;
        }
    }, {
        key: "render",
        value: function render() {
            var className = this.props.className;
            if (!!this.props.hiddenClassName && !this.props.visible) {
                className += " " + this.props.hiddenClassName;
            }
            var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props);
            delete props.hiddenClassName;
            delete props.visible;
            props.className = className;
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props));
        }
    }]);

    return LazyRenderBox;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LazyRenderBox);

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rmc_dialog__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PopupMixin__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_touchable__ = __webpack_require__(211);





var PopupPicker = __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
  mixins: [__WEBPACK_IMPORTED_MODULE_3__PopupMixin__["a" /* default */]],
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rmc-picker-popup',
      triggerType: 'onClick',
      WrapComponent: 'span'
    };
  },
  getModal: function getModal() {
    var props = this.props;
    if (!this.state.visible) {
      return null;
    }
    var prefixCls = props.prefixCls;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_rmc_dialog__["a" /* default */],
      { prefixCls: '' + prefixCls, className: props.className || '', visible: true, closable: false, transitionName: props.transitionName || props.popupTransitionName, maskTransitionName: props.maskTransitionName, onClose: this.hide, style: props.style },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: prefixCls + '-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_rc_touchable__["a" /* default */],
            { activeClassName: prefixCls + '-item-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: prefixCls + '-item ' + prefixCls + '-header-left', onClick: this.onDismiss },
              props.dismissText
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: prefixCls + '-item ' + prefixCls + '-title' },
            props.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_rc_touchable__["a" /* default */],
            { activeClassName: prefixCls + '-item-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: prefixCls + '-item ' + prefixCls + '-header-right', onClick: this.onOk },
              props.okText
            )
          )
        ),
        this.getContent()
      )
    );
  },
  render: function render() {
    return this.getRender();
  }
});
/* harmony default export */ __webpack_exports__["a"] = (PopupPicker);

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


function noop() {}
/* harmony default export */ __webpack_exports__["a"] = ({
    getDefaultProps: function getDefaultProps() {
        return {
            onVisibleChange: noop,
            okText: 'Ok',
            pickerValueProp: 'selectedValue',
            pickerValueChangeProp: 'onValueChange',
            dismissText: 'Dismiss',
            title: '',
            onOk: noop,
            onDismiss: noop
        };
    },
    getInitialState: function getInitialState() {
        return {
            pickerValue: 'value' in this.props ? this.props.value : null,
            visible: this.props.visible || false
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                pickerValue: nextProps.value
            });
        }
        if ('visible' in nextProps) {
            this.setVisibleState(nextProps.visible);
        }
    },
    onPickerChange: function onPickerChange(pickerValue) {
        if (this.state.pickerValue !== pickerValue) {
            this.setState({
                pickerValue: pickerValue
            });
            var _props = this.props,
                picker = _props.picker,
                pickerValueChangeProp = _props.pickerValueChangeProp;

            if (picker && picker.props[pickerValueChangeProp]) {
                picker.props[pickerValueChangeProp](pickerValue);
            }
        }
    },
    saveRef: function saveRef(picker) {
        this.picker = picker;
    },
    setVisibleState: function setVisibleState(visible) {
        this.setState({
            visible: visible
        });
        if (!visible) {
            this.setState({
                pickerValue: null
            });
        }
    },
    fireVisibleChange: function fireVisibleChange(visible) {
        if (this.state.visible !== visible) {
            if (!('visible' in this.props)) {
                this.setVisibleState(visible);
            }
            this.props.onVisibleChange(visible);
        }
    },
    getRender: function getRender() {
        var props = this.props;
        var children = props.children;
        if (!children) {
            return this.getModal();
        }
        var _props2 = this.props,
            WrapComponent = _props2.WrapComponent,
            disabled = _props2.disabled;

        var child = children;
        var newChildProps = {};
        if (!disabled) {
            newChildProps[props.triggerType] = this.onTriggerClick;
        }
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            WrapComponent,
            { style: props.wrapStyle },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(child, newChildProps),
            this.getModal()
        );
    },
    onTriggerClick: function onTriggerClick(e) {
        var child = this.props.children;
        var childProps = child.props || {};
        if (childProps[this.props.triggerType]) {
            childProps[this.props.triggerType](e);
        }
        this.fireVisibleChange(!this.state.visible);
    },
    onOk: function onOk() {
        this.props.onOk(this.picker && this.picker.getValue());
        this.fireVisibleChange(false);
    },
    getContent: function getContent() {
        if (this.props.picker) {
            var _React$cloneElement;

            var pickerValue = this.state.pickerValue;

            if (pickerValue === null) {
                pickerValue = this.props.value;
            }
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(this.props.picker, (_React$cloneElement = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_React$cloneElement, this.props.pickerValueProp, pickerValue), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_React$cloneElement, this.props.pickerValueChangeProp, this.onPickerChange), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_React$cloneElement, 'ref', this.saveRef), _React$cloneElement));
        } else {
            return this.props.content;
        }
    },
    onDismiss: function onDismiss() {
        this.props.onDismiss();
        this.fireVisibleChange(false);
    },
    hide: function hide() {
        this.fireVisibleChange(false);
    }
});

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ })

},[305]);
//# sourceMappingURL=popup.js.map