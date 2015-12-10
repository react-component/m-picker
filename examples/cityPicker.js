webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(160);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcMCascadeSelect = __webpack_require__(161);
	
	var _rcMCascadeSelect2 = _interopRequireDefault(_rcMCascadeSelect);
	
	var data = __webpack_require__(166);
	
	var remoteData = [data.province, data.city, data.region];
	var gData = [[].concat(_toConsumableArray(data.province)), [], []];
	
	function setData(val, index) {
	  gData.forEach(function (item, ind) {
	    if (ind <= index) {
	      return;
	    } else if (index + 1 === ind) {
	      gData[ind] = remoteData[ind].filter(function (ii) {
	        return ii.value.indexOf(val) === 0;
	      });
	    } else {
	      gData[ind] = [];
	    }
	  });
	}
	
	var CityPicker = _react2['default'].createClass({
	  displayName: 'CityPicker',
	
	  propTypes: {},
	  getInitialState: function getInitialState() {
	    return {
	      changedIndex: 0,
	      value: [],
	      finalSel: ''
	    };
	  },
	  onSubmit: function onSubmit(info) {
	    console.log(info);
	    var finalSel = '';
	    info.value.forEach(function (item, index) {
	      gData[index].forEach(function (ii) {
	        if (ii.value === item) {
	          finalSel += ii.name + ' ';
	        }
	      });
	    });
	    this.setState({ finalSel: finalSel });
	  },
	  onChange: function onChange(info) {
	    console.log('value changed', info);
	    this.setState({
	      changedIndex: info.changedIndex,
	      value: info.value
	    });
	  },
	  render: function render() {
	    var st = this.state;
	    var newVal = [].concat(_toConsumableArray(st.value));
	
	    // 设置 changedIndex 下一条的默认值
	    var index = st.changedIndex;
	    var next = gData[index];
	    while (next && next.length) {
	      newVal[index] = index === st.changedIndex ? newVal[index] || next[0].value : next[0].value;
	      setData(newVal[index], index);
	      index++;
	      next = gData[index];
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      { style: { margin: '10px 30px' } },
	      _react2['default'].createElement(
	        'h3',
	        null,
	        'city picker'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        '您选择的城市是：',
	        st.finalSel
	      ),
	      _react2['default'].createElement(
	        _rcMCascadeSelect2['default'],
	        {
	          data: gData, value: newVal,
	          onSubmit: this.onSubmit, onChange: this.onChange },
	        _react2['default'].createElement(
	          'button',
	          null,
	          'trigger'
	        )
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(CityPicker, null), document.getElementById('__react-content'));

/***/ },

/***/ 166:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var province = [{ name: '北京', value: '01' }, { name: '浙江', value: '02' }];
	exports.province = province;
	var city = [{ name: '东城区', value: '01-1' }, { name: '西城区', value: '01-2' }, { name: '崇文区', value: '01-3' }, { name: '宣武区', value: '01-4' }, { name: '朝阳区"', value: '01-5' }, { name: '丰台区', value: '01-6' }, { name: '杭州', value: '02-1' }, { name: '宁波', value: '02-2' }, { name: '温州', value: '02-3' }, { name: '嘉兴', value: '02-4' }, { name: '湖州', value: '02-5' }, { name: '绍兴', value: '02-6' }];
	exports.city = city;
	var region = [{ name: '西湖区', value: '02-1-1' }, { name: '上城区', value: '02-1-2' }, { name: '江干区', value: '02-1-3' }, { name: '下城区', value: '02-1-4' }];
	exports.region = region;

/***/ }

});
//# sourceMappingURL=cityPicker.js.map