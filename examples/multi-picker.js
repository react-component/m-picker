/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"examples/multi-picker": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/multi-picker.tsx":
/*!***********************************!*\
  !*** ./examples/multi-picker.tsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/index.less */ "./assets/index.less");
/* harmony import */ var _assets_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_MultiPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/MultiPicker */ "./src/MultiPicker.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_Picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Picker */ "./src/Picker.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* tslint:disable:no-console */






var Test =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test() {
    var _this;

    _classCallCheck(this, Test);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Test).apply(this, arguments));
    _this.state = {
      value: ['1', '11']
    };

    _this.onChange = function (value) {
      console.log('onChange', value);

      _this.setState({
        value: value
      });
    };

    _this.onScrollChange = function (value) {
      console.log('onScrollChange', value);
    };

    return _this;
  }

  _createClass(Test, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        style: {
          background: '#f5f5f9',
          padding: 10
        }
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_MultiPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
        selectedValue: this.state.value,
        onValueChange: this.onChange,
        onScrollChange: this.onScrollChange
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        indicatorClassName: "my-picker-indicator"
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "1"
      }, "one"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "2"
      }, "two"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "3"
      }, "three"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "4"
      }, "four"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "5"
      }, "five"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "6"
      }, "six"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "7"
      }, "seven"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "8"
      }, "eight")), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        indicatorClassName: "my-picker-indicator"
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "11"
      }, "eleven"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "12"
      }, "twelve"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "13"
      }, "thirteen"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "14"
      }, "fourteen"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "15"
      }, "fifteen"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "16"
      }, "sixteen"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "17"
      }, "seventeen"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        className: "my-picker-view-item",
        value: "18"
      }, "eighteen"))));
    }
  }]);

  return Test;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

react_dom__WEBPACK_IMPORTED_MODULE_3__["render"](react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ "./src/MultiPicker.tsx":
/*!*****************************!*\
  !*** ./src/MultiPicker.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MultiPickerMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiPickerMixin */ "./src/MultiPickerMixin.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var MultiPicker = function MultiPicker(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      rootNativeProps = props.rootNativeProps,
      children = props.children,
      style = props.style;
  var selectedValue = props.getValue();
  var colElements = react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (col, i) {
    return react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](col, {
      selectedValue: selectedValue[i],
      onValueChange: function onValueChange() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return props.onValueChange.apply(props, [i].concat(args));
      },
      onScrollChange: props.onScrollChange && function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return props.onScrollChange.apply(props, [i].concat(args));
      }
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, rootNativeProps, {
    style: style,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, prefixCls)
  }), colElements);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_MultiPickerMixin__WEBPACK_IMPORTED_MODULE_2__["default"])(MultiPicker));

/***/ }),

/***/ "./src/MultiPickerMixin.tsx":
/*!**********************************!*\
  !*** ./src/MultiPickerMixin.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/* harmony default export */ __webpack_exports__["default"] = (function (ComposedComponent) {
  var _a;

  return _a =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(_a, _React$Component);

    function _a() {
      var _this;

      _classCallCheck(this, _a);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_a).apply(this, arguments));

      _this.getValue = function () {
        var _this$props = _this.props,
            children = _this$props.children,
            selectedValue = _this$props.selectedValue;

        if (selectedValue && selectedValue.length) {
          return selectedValue;
        } else {
          if (!children) {
            return [];
          }

          return react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
            var cc = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(c.children || c.props.children);
            return cc && cc[0] && cc[0].props.value;
          });
        }
      };

      _this.onChange = function (i, v, cb) {
        var value = _this.getValue().concat();

        value[i] = v;

        if (cb) {
          cb(value, i);
        }
      };

      _this.onValueChange = function (i, v) {
        _this.onChange(i, v, _this.props.onValueChange);
      };

      _this.onScrollChange = function (i, v) {
        _this.onChange(i, v, _this.props.onScrollChange);
      };

      return _this;
    }

    _createClass(_a, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ComposedComponent, _extends({}, this.props, {
          getValue: this.getValue,
          onValueChange: this.onValueChange,
          onScrollChange: this.props.onScrollChange && this.onScrollChange
        }));
      }
    }]);

    return _a;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _a.defaultProps = {
    prefixCls: 'rmc-multi-picker',
    onValueChange: function onValueChange() {}
  }, _a;
});
;

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./examples/multi-picker.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/multi-picker.tsx */"./examples/multi-picker.tsx");


/***/ })

/******/ });
//# sourceMappingURL=multi-picker.js.map