webpackJsonp([1],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_index_less__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_MultiPicker__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Picker__ = __webpack_require__(59);




/* tslint:disable:no-console */






var Test = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Test, _React$Component);

    function Test() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Test);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));

        _this.state = {
            value: ['1', '11']
        };
        _this.onChange = function (value) {
            console.log('onChange', value);
            _this.setState({
                value: value
            });
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Test, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { style: { background: '#f5f5f9', padding: 10 } },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5__src_MultiPicker__["a" /* default */],
                    { selectedValue: this.state.value, onValueChange: this.onChange },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */],
                        { indicatorClassName: 'my-picker-indicator' },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '1' },
                            'one'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '2' },
                            'two'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '3' },
                            'three'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '4' },
                            'four'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '5' },
                            'five'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '6' },
                            'six'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '7' },
                            'seven'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '8' },
                            'eight'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */],
                        { indicatorClassName: 'my-picker-indicator' },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '11' },
                            'eleven'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '12' },
                            'twelve'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '13' },
                            'thirteen'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '14' },
                            'fourteen'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '15' },
                            'fifteen'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '16' },
                            'sixteen'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '17' },
                            'seventeen'
                        ),
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8__src_Picker__["a" /* default */].Item,
                            { className: 'my-picker-view-item', value: '18' },
                            'eighteen'
                        )
                    )
                )
            );
        }
    }]);

    return Test;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MultiPickerMixin__ = __webpack_require__(148);




var MultiPicker = function MultiPicker(props) {
    var prefixCls = props.prefixCls,
        className = props.className,
        rootNativeProps = props.rootNativeProps,
        children = props.children,
        style = props.style;

    var selectedValue = props.getValue();
    var colElements = __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.map(children, function (col, i) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(col, {
            selectedValue: selectedValue[i],
            onValueChange: function onValueChange() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return props.onValueChange.apply(props, [i].concat(args));
            }
        });
    });
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rootNativeProps, { style: style, className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, prefixCls) }),
        colElements
    );
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__MultiPickerMixin__["a" /* default */])(MultiPicker));

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);






/* harmony default export */ __webpack_exports__["a"] = (function (ComposedComponent) {
    return _a = function (_React$Component) {
        __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(_a, _React$Component);

        function _a() {
            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, _a);

            var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_a.__proto__ || Object.getPrototypeOf(_a)).apply(this, arguments));

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
                    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.map(children, function (c) {
                        var cc = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.toArray(c.children || c.props.children);
                        return cc && cc[0] && cc[0].props.value;
                    });
                }
            };
            _this.onValueChange = function (i, v) {
                var value = _this.getValue().concat();
                value[i] = v;
                _this.props.onValueChange(value, i);
            };
            return _this;
        }

        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(_a, [{
            key: 'render',
            value: function render() {
                return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ComposedComponent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, { getValue: this.getValue, onValueChange: this.onValueChange }));
            }
        }]);

        return _a;
    }(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component), _a.defaultProps = {
        prefixCls: 'rmc-multi-picker',
        onValueChange: function onValueChange() {}
    }, _a;
    var _a;
});
;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_zscroller__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__PickerMixin__ = __webpack_require__(60);











var Picker = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Picker, _React$Component);

    function Picker(props) {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Picker);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

        _this.scrollTo = function (top) {
            _this.zscroller.scroller.scrollTo(0, top);
        };
        _this.fireValueChange = function (selectedValue) {
            if (selectedValue !== _this.state.selectedValue) {
                if (!('selectedValue' in _this.props)) {
                    _this.setState({
                        selectedValue: selectedValue
                    });
                }
                if (_this.props.onValueChange) {
                    _this.props.onValueChange(selectedValue);
                }
            }
        };
        _this.scrollingComplete = function () {
            var _this$zscroller$scrol = _this.zscroller.scroller.getValues(),
                top = _this$zscroller$scrol.top;

            if (top >= 0) {
                _this.props.doScrollingComplete(top, _this.itemHeight, _this.fireValueChange);
            }
        };
        var selectedValueState = void 0;
        var _this$props = _this.props,
            selectedValue = _this$props.selectedValue,
            defaultSelectedValue = _this$props.defaultSelectedValue;

        if (selectedValue !== undefined) {
            selectedValueState = selectedValue;
        } else if (defaultSelectedValue !== undefined) {
            selectedValueState = defaultSelectedValue;
        } else {
            var children = __WEBPACK_IMPORTED_MODULE_6_react___default.a.Children.toArray(_this.props.children);
            selectedValueState = children && children[0] && children[0].props.value;
        }
        _this.state = {
            selectedValue: selectedValueState
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Picker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var contentRef = this.contentRef,
                indicatorRef = this.indicatorRef,
                maskRef = this.maskRef,
                rootRef = this.rootRef;

            var rootHeight = rootRef.getBoundingClientRect().height;
            // https://github.com/react-component/m-picker/issues/18
            var itemHeight = this.itemHeight = indicatorRef.getBoundingClientRect().height;
            var num = Math.floor(rootHeight / itemHeight);
            if (num % 2 === 0) {
                num--;
            }
            num--;
            num /= 2;
            contentRef.style.padding = itemHeight * num + 'px 0';
            indicatorRef.style.top = itemHeight * num + 'px';
            maskRef.style.backgroundSize = '100% ' + itemHeight * num + 'px';
            this.zscroller = new __WEBPACK_IMPORTED_MODULE_8_zscroller__["a" /* default */](contentRef, {
                scrollingX: false,
                snapping: true,
                locking: false,
                penetrationDeceleration: .1,
                minVelocityToKeepDecelerating: 0.5,
                scrollingComplete: this.scrollingComplete
            });
            this.zscroller.setDisabled(this.props.disabled);
            this.zscroller.scroller.setSnapSize(0, itemHeight);
            this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('selectedValue' in nextProps) {
                this.setState({
                    selectedValue: nextProps.selectedValue
                });
            }
            this.zscroller.setDisabled(nextProps.disabled);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.state.selectedValue !== nextState.selectedValue || this.props.children !== nextProps.children;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.zscroller.reflow();
            this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.zscroller.destroy();
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            if ('selectedValue' in this.props) {
                return this.props.selectedValue;
            }
            var children = __WEBPACK_IMPORTED_MODULE_6_react___default.a.Children.toArray(this.props.children);
            return children && children[0] && children[0].props.value;
        }
    }, {
        key: 'render',
        value: function render() {
            var _pickerCls,
                _this2 = this;

            var props = this.props;
            var prefixCls = props.prefixCls,
                itemStyle = props.itemStyle,
                indicatorStyle = props.indicatorStyle,
                _props$indicatorClass = props.indicatorClassName,
                indicatorClassName = _props$indicatorClass === undefined ? '' : _props$indicatorClass,
                children = props.children;
            var selectedValue = this.state.selectedValue;

            var itemClassName = prefixCls + '-item';
            var selectedItemClassName = itemClassName + ' ' + prefixCls + '-item-selected';
            var map = function map(item) {
                var _item$props = item.props,
                    _item$props$className = _item$props.className,
                    className = _item$props$className === undefined ? '' : _item$props$className,
                    style = _item$props.style,
                    value = _item$props.value;

                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { style: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, itemStyle, style), className: (selectedValue === value ? selectedItemClassName : itemClassName) + ' ' + className, key: value },
                    item.children || item.props.children
                );
            };
            // compatibility for preact
            var items = __WEBPACK_IMPORTED_MODULE_6_react___default.a.Children ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.Children.map(children, map) : [].concat(children).map(map);
            var pickerCls = (_pickerCls = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_pickerCls, props.className, !!props.className), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_pickerCls, prefixCls, true), _pickerCls);
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(pickerCls), ref: function ref(el) {
                        return _this2.rootRef = el;
                    }, style: this.props.style },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: prefixCls + '-mask', ref: function ref(el) {
                        return _this2.maskRef = el;
                    } }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: prefixCls + '-indicator ' + indicatorClassName, ref: function ref(el) {
                        return _this2.indicatorRef = el;
                    }, style: indicatorStyle }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: prefixCls + '-content', ref: function ref(el) {
                            return _this2.contentRef = el;
                        } },
                    items
                )
            );
        }
    }]);

    return Picker;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Picker.defaultProps = {
    prefixCls: 'rmc-picker'
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__PickerMixin__["a" /* default */])(Picker));

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);





/* tslint:disable:no-console */

var Item = function Item(_props) {
    return null;
};
/* harmony default export */ __webpack_exports__["a"] = (function (ComposedComponent) {
    return _a = function (_React$Component) {
        __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(_a, _React$Component);

        function _a() {
            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, _a);

            var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_a.__proto__ || Object.getPrototypeOf(_a)).apply(this, arguments));

            _this.select = function (value, itemHeight, scrollTo) {
                var children = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.toArray(_this.props.children);
                for (var i = 0, len = children.length; i < len; i++) {
                    if (children[i].props.value === value) {
                        _this.selectByIndex(i, itemHeight, scrollTo);
                        return;
                    }
                }
                _this.selectByIndex(0, itemHeight, scrollTo);
            };
            _this.doScrollingComplete = function (top, itemHeight, fireValueChange) {
                var index = top / itemHeight;
                var floor = Math.floor(index);
                if (index - floor > 0.5) {
                    index = floor + 1;
                } else {
                    index = floor;
                }
                var children = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.toArray(_this.props.children);
                index = Math.min(index, children.length - 1);
                var child = children[index];
                if (child) {
                    fireValueChange(child.props.value);
                } else if (console.warn) {
                    console.warn('child not found', children, index);
                }
            };
            return _this;
        }

        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(_a, [{
            key: 'selectByIndex',
            value: function selectByIndex(index, itemHeight, zscrollTo) {
                if (index < 0 || index >= __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.count(this.props.children) || !itemHeight) {
                    return;
                }
                zscrollTo(index * itemHeight);
            }
        }, {
            key: 'render',
            value: function render() {
                return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ComposedComponent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, { doScrollingComplete: this.doScrollingComplete, select: this.select }));
            }
        }]);

        return _a;
    }(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component), _a.Item = Item, _a;
    var _a;
});

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(78)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raf__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_raf__);
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
   * @return {Integer} Identifier of animation. Can be used to stop it any time.
   */
  start: function start(stepCallback, verifyCallback, completedCallback, duration, easingMethod) {
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
        __WEBPACK_IMPORTED_MODULE_0_raf___default()(step);
      }
    };

    // Mark as running
    running[id] = true;

    // Init first step
    __WEBPACK_IMPORTED_MODULE_0_raf___default()(step);

    // Return unique animation ID
    return id;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Animate);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(45)))

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Scroller__ = __webpack_require__(98);



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
  this.options = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, options, {
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
  this.scroller = new __WEBPACK_IMPORTED_MODULE_1__Scroller__["a" /* default */](function (left, top, zoom) {
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
    if (_this2.options.preventDefaultOnTouchMove !== false) {
      e.preventDefault();
    }
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

/* harmony default export */ __webpack_exports__["a"] = (DOMScroller);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Animate__ = __webpack_require__(96);
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
      __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].stop(self.__isDecelerating);
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
      __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].stop(self.__isDecelerating);
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
      __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].stop(self.__isDecelerating);
      self.__isDecelerating = false;
      self.__interruptedAnimation = true;
    }

    // Stop animation
    if (self.__isAnimating) {
      __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].stop(self.__isAnimating);
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

      var minimumTrackingForScroll = 3;
      var minimumTrackingForDrag = 5;

      var distanceX = Math.abs(currentTouchLeft - self.__initialTouchLeft);
      var distanceY = Math.abs(currentTouchTop - self.__initialTouchTop);

      self.__enableScrollX = self.options.scrollingX && distanceX >= minimumTrackingForScroll;
      self.__enableScrollY = self.options.scrollingY && distanceY >= minimumTrackingForScroll;

      var radian = void 0;

      if (self.options.locking && self.__enableScrollY) {
        radian = radian || Math.atan2(distanceY, distanceX);
        if (radian < Math.PI / 4) {
          self.__enableScrollY = false;
        }
      }

      if (self.options.locking && self.__enableScrollX) {
        radian = radian || Math.atan2(distanceY, distanceX);
        if (radian > Math.PI / 4) {
          self.__enableScrollX = false;
        }
      }

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
      __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].stop(wasAnimating);
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
      self.__isAnimating = __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].start(step, verify, completed, self.options.animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic);
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
    self.__isDecelerating = __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].start(step, verify, completed);
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

/* harmony default export */ __webpack_exports__["a"] = (Scroller);

/***/ })

},[301]);
//# sourceMappingURL=multi-picker.js.map