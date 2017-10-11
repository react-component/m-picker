webpackJsonp([2],{

/***/ 139:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_less__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_Picker__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);




/* tslint:disable:no-console */




var count = 0;
var len = 10;

var PickerDemo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(PickerDemo, _React$Component);

    function PickerDemo() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PickerDemo);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PickerDemo.__proto__ || Object.getPrototypeOf(PickerDemo)).apply(this, arguments));

        _this.state = {
            disabled: false,
            items: _this.getItems(count),
            value: '' + (count + len / 2)
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
        _this.disable = function () {
            _this.setState({
                disabled: !_this.state.disabled
            });
        };
        _this.rerender = function () {
            count += len;
            var items = _this.getItems(count);
            _this.setState({
                items: items,
                value: String(count)
            });
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(PickerDemo, [{
        key: 'getItems',
        value: function getItems(start) {
            var items = [];
            for (var i = start; i < start + len; i++) {
                items.push(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5__src_Picker__["a" /* default */].Item,
                    { value: i + '', key: i },
                    count,
                    ' ',
                    i
                ));
            }
            return items;
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { style: { background: '#f5f5f9', padding: 10 } },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'button',
                    { onClick: this.rerender },
                    'rerender'
                ),
                '\xA0',
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'button',
                    { onClick: this.disable },
                    this.state.disabled ? 'enable' : 'disable'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5__src_Picker__["a" /* default */],
                    { selectedValue: this.state.value, disabled: this.state.disabled, onValueChange: this.onChange, onScrollChange: this.onScrollChange },
                    this.state.items
                )
            );
        }
    }]);

    return PickerDemo;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(PickerDemo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(139);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PickerMixin__ = __webpack_require__(59);










var Picker = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Picker, _React$Component);

    function Picker(props) {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Picker);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

        _this.scrollHanders = function () {
            var scrollY = 0;
            var lastY = 0;
            var startY = 0;
            var scrollDisabled = false;
            var isMoving = false;
            var setTransform = function setTransform(nodeStyle, value) {
                nodeStyle.transform = value;
                nodeStyle.webkitTransform = value;
            };
            var setTransition = function setTransition(nodeStyle, value) {
                nodeStyle.transition = value;
                nodeStyle.webkitTransition = value;
            };
            var scrollTo = function scrollTo(x, y) {
                var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .3;

                if (scrollY !== y) {
                    scrollY = y;
                    if (time && !_this.props.noAnimate) {
                        setTransition(_this.contentRef.style, 'cubic-bezier(0,0,0.2,1.15) ' + time + 's');
                    }
                    setTransform(_this.contentRef.style, 'translate3d(0,' + -y + 'px,0)');
                    setTimeout(function () {
                        _this.scrollingComplete();
                        if (_this.contentRef) {
                            setTransition(_this.contentRef.style, '');
                        }
                    }, +time * 1000);
                }
            };
            var Velocity = function () {
                var minInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
                var maxInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

                var _time = 0;
                var _y = 0;
                var _velocity = 0;
                var recorder = {
                    record: function record(y) {
                        var now = +new Date();
                        _velocity = (y - _y) / (now - _time);
                        if (now - _time >= minInterval) {
                            _velocity = now - _time <= maxInterval ? _velocity : 0;
                            _y = y;
                            _time = now;
                        }
                    },
                    getVelocity: function getVelocity(y) {
                        if (y !== _y) {
                            recorder.record(y);
                        }
                        return _velocity;
                    }
                };
                return recorder;
            }();
            var onFinish = function onFinish() {
                isMoving = false;
                var targetY = scrollY;
                var height = (_this.props.children.length - 1) * _this.itemHeight;
                var time = .3;
                var velocity = Velocity.getVelocity(targetY) * 4;
                if (velocity) {
                    targetY = velocity * 40 + targetY;
                    time = Math.abs(velocity) * .1;
                }
                if (targetY % _this.itemHeight !== 0) {
                    targetY = Math.round(targetY / _this.itemHeight) * _this.itemHeight;
                }
                if (targetY < 0) {
                    targetY = 0;
                } else if (targetY > height) {
                    targetY = height;
                }
                scrollTo(0, targetY, time < .3 ? .3 : time);
                _this.onScrollChange();
            };
            var onStart = function onStart(y) {
                if (scrollDisabled) {
                    return;
                }
                isMoving = true;
                startY = y;
                lastY = scrollY;
            };
            var onMove = function onMove(y) {
                if (scrollDisabled || !isMoving) {
                    return;
                }
                scrollY = lastY - y + startY;
                Velocity.record(scrollY);
                _this.onScrollChange();
                setTransform(_this.contentRef.style, 'translate3d(0,' + -scrollY + 'px,0)');
            };
            return {
                touchstart: function touchstart(evt) {
                    return onStart(evt.touches[0].screenY);
                },
                mousedown: function mousedown(evt) {
                    return onStart(evt.screenY);
                },
                touchmove: function touchmove(evt) {
                    evt.preventDefault();
                    onMove(evt.touches[0].screenY);
                },
                mousemove: function mousemove(evt) {
                    evt.preventDefault();
                    onMove(evt.screenY);
                },
                touchend: function touchend() {
                    return onFinish();
                },
                touchcancel: function touchcancel() {
                    return onFinish();
                },
                mouseup: function mouseup() {
                    return onFinish();
                },
                getValue: function getValue() {
                    return scrollY;
                },
                scrollTo: scrollTo,
                setDisabled: function setDisabled() {
                    var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                    scrollDisabled = disabled;
                }
            };
        }();
        _this.scrollTo = function (top) {
            _this.scrollHanders.scrollTo(0, top);
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
        _this.onScrollChange = function () {
            var top = _this.scrollHanders.getValue();
            if (top >= 0) {
                var children = __WEBPACK_IMPORTED_MODULE_6_react___default.a.Children.toArray(_this.props.children);
                var index = _this.props.coumputeChildIndex(top, _this.itemHeight, children.length);
                if (_this.scrollValue !== index) {
                    _this.scrollValue = index;
                    var child = children[index];
                    if (child && _this.props.onScrollChange) {
                        _this.props.onScrollChange(child.props.value);
                    } else if (console.warn) {
                        console.warn('child not found', children, index);
                    }
                }
            }
        };
        _this.scrollingComplete = function () {
            var top = _this.scrollHanders.getValue();
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
            var _this2 = this;

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
            this.scrollHanders.setDisabled(this.props.disabled);
            this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);
            var passiveSupported = this.passiveSupported();
            var willPreventDefault = passiveSupported ? { passive: false } : false;
            var willNotPreventDefault = passiveSupported ? { passive: true } : false;
            Object.keys(this.scrollHanders).forEach(function (key) {
                if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
                    var pd = key.indexOf('move') >= 0 ? willPreventDefault : willNotPreventDefault;
                    rootRef.addEventListener(key, _this2.scrollHanders[key], pd);
                }
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var _this3 = this;

            Object.keys(this.scrollHanders).forEach(function (key) {
                if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
                    _this3.rootRef.removeEventListener(key, _this3.scrollHanders[key]);
                }
            });
        }
    }, {
        key: 'passiveSupported',
        value: function passiveSupported() {
            var passiveSupported = false;
            try {
                var options = Object.defineProperty({}, 'passive', {
                    get: function get() {
                        passiveSupported = true;
                    }
                });
                window.addEventListener('test', null, options);
            } catch (err) {}
            return passiveSupported;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('selectedValue' in nextProps) {
                this.setState({
                    selectedValue: nextProps.selectedValue
                });
            }
            this.scrollHanders.setDisabled(nextProps.disabled);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.state.selectedValue !== nextState.selectedValue || this.props.children !== nextProps.children;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);
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
                _this4 = this;

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
                        return _this4.rootRef = el;
                    }, style: this.props.style },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: prefixCls + '-mask', ref: function ref(el) {
                        return _this4.maskRef = el;
                    } }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: prefixCls + '-indicator ' + indicatorClassName, ref: function ref(el) {
                        return _this4.indicatorRef = el;
                    }, style: indicatorStyle }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: prefixCls + '-content', ref: function ref(el) {
                            return _this4.contentRef = el;
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
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__PickerMixin__["a" /* default */])(Picker));

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(14);
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
                var children = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.toArray(_this.props.children);
                var index = _this.coumputeChildIndex(top, itemHeight, children.length);
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
            key: 'coumputeChildIndex',
            value: function coumputeChildIndex(top, itemHeight, childrenLength) {
                var index = top / itemHeight;
                var floor = Math.floor(index);
                if (index - floor > 0.5) {
                    index = floor + 1;
                } else {
                    index = floor;
                }
                return Math.min(index, childrenLength - 1);
            }
        }, {
            key: 'render',
            value: function render() {
                return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ComposedComponent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, { doScrollingComplete: this.doScrollingComplete, coumputeChildIndex: this.coumputeChildIndex, select: this.select }));
            }
        }]);

        return _a;
    }(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component), _a.Item = Item, _a;
    var _a;
});

/***/ })

},[300]);
//# sourceMappingURL=picker.js.map