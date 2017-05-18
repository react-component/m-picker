webpackJsonp([2],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rmc_picker_assets_index_less__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rmc_picker_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rmc_picker_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Picker__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* tslint:disable:no-console */




var count = 0;
var len = 10;
var Test = __WEBPACK_IMPORTED_MODULE_2_react___default.a.createClass({
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
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { style: { border: '1px solid black', padding: 10 } },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'button',
                { onClick: this.rerender },
                'rerender'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'button',
                { onClick: this.disable },
                this.state.disabled ? 'enable' : 'disable'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__src_Picker__["a" /* default */],
                { selectedValue: this.state.value, disabled: this.state.disabled, onValueChange: this.onChange },
                this.state.items
            )
        );
    }
});
__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(125);


/***/ })

},[261]);
//# sourceMappingURL=picker.js.map