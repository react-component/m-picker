webpackJsonp([2],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_less__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_Picker__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(25);
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
            value: '' + count
        };
        _this.onChange = function (value) {
            console.log('onChange', value);
            _this.setState({
                value: value
            });
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
                items.push({
                    value: String(i),
                    label: count + ' ' + i
                });
            }
            return items;
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { style: { border: '1px solid black', padding: 10 } },
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
                    { selectedValue: this.state.value, disabled: this.state.disabled, onValueChange: this.onChange },
                    this.state.items
                )
            );
        }
    }]);

    return PickerDemo;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(PickerDemo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


/***/ })

},[311]);
//# sourceMappingURL=picker.js.map