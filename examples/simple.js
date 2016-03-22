webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(177);


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rmcPicker = __webpack_require__(178);
	
	var _rmcPicker2 = _interopRequireDefault(_rmcPicker);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(161);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/* eslint no-console:0 */
	
	var count = 0;
	var len = 10;
	
	var Test = _react2["default"].createClass({
	  displayName: 'Test',
	  getInitialState: function getInitialState() {
	    return {
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
	    return _react2["default"].createElement(
	      'div',
	      { style: { border: '1px solid black', padding: 10 } },
	      _react2["default"].createElement(
	        'button',
	        { onClick: this.rerender },
	        'rerender'
	      ),
	      _react2["default"].createElement(
	        _rmcPicker2["default"],
	        { selectedValue: this.state.value, onValueChange: this.onChange },
	        this.state.items
	      )
	    );
	  }
	});
	
	_reactDom2["default"].render(_react2["default"].createElement(Test, null), document.getElementById('__react-content'));

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(179);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _src2["default"]; // export this package's api
	
	module.exports = exports['default'];

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Picker = __webpack_require__(180);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Picker)["default"];
	  }
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	module.exports = exports['default'];

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Animate = __webpack_require__(181);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/*
	 * Based on Zynga Scroller (http://github.com/zynga/scroller)
	 * Copyright 2011, Zynga Inc.
	 * Licensed under the MIT License.
	 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
	 */
	
	var DECELERATION_VELOCITY_RATE = 0.95;
	// How much velocity is required to keep the deceleration running
	var MIN_VELOCITY_TO_KEEP_DECELERATING = 0.5;
	var POSITION_MAX_LENGTH = 40;
	var MINIUM_TRACKING_FOR_SCROLL = 0;
	var MINIUM_TRACKING_FOR_DRAG = 5;
	var DEFAULT_ANIM_DURATION = 250;
	var TIME_FRAME = 100;
	// How much velocity is required to start the deceleration
	var MIN_VELOCITY_TO_START_DECELERATION = 4;
	
	function assign(to, from) {
	  for (var key in from) {
	    if (from.hasOwnProperty(key)) {
	      to[key] = from[key];
	    }
	  }
	}
	
	function getComputedStyle(el, key) {
	  var computedStyle = window.getComputedStyle(el);
	  return computedStyle[key] || '';
	}
	
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
	
	var Picker = _react2["default"].createClass({
	  displayName: 'Picker',
	
	  propTypes: {
	    defaultSelectedValue: _react.PropTypes.any,
	    prefixCls: _react.PropTypes.string,
	    selectedValue: _react.PropTypes.any,
	    children: _react.PropTypes.array,
	    pure: _react.PropTypes.bool,
	    onValueChange: _react.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rmc-picker',
	      pure: true,
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
	    this.init();
	    var component = this.refs.component;
	
	    component.addEventListener('touchstart', this.onTouchStart, false);
	    component.addEventListener('touchmove', this.onTouchMove, false);
	    component.addEventListener('touchend', this.onTouchEnd, false);
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('selectedValue' in nextProps) {
	      this.setState({
	        selectedValue: nextProps.selectedValue
	      });
	    }
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return this.state.selectedValue !== nextState.selectedValue || !isChildrenEqual(this.props.children, nextProps.children, this.props.pure);
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    if (!isChildrenEqual(prevProps.children, this.props.children, this.props.pure)) {
	      this.init();
	    } else {
	      this.select(this.state.selectedValue, false);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var component = this.refs.component;
	
	    component.removeEventListener('touchstart', this.onTouchStart, false);
	    component.removeEventListener('touchmove', this.onTouchMove, false);
	    component.removeEventListener('touchend', this.onTouchEnd, false);
	    this.clearAnim();
	  },
	  onTouchEnd: function onTouchEnd(e) {
	    this.doTouchEnd(+e.timeStamp);
	  },
	  onTouchMove: function onTouchMove(e) {
	    this.doTouchMove(e.touches, +e.timeStamp);
	  },
	  onTouchStart: function onTouchStart(e) {
	    if (e.target.tagName.match(/input|textarea|select/i)) {
	      return;
	    }
	    e.preventDefault();
	    this.doTouchStart(e.touches, +e.timeStamp);
	  },
	  setTop: function setTop(top) {
	    if (this.refs.content) {
	      this.refs.content.style.webkitTransform = 'translate3d(0, ' + -top + 'px, 0)';
	    }
	  },
	  setDimensions: function setDimensions(clientHeight, contentHeight) {
	    this.clientHeight = clientHeight;
	    this.contentHeight = contentHeight;
	
	    var totalItemCount = this.props.children.length;
	    var clientItemCount = Math.round(this.clientHeight / this.itemHeight);
	
	    this.minScrollTop = -this.itemHeight * (clientItemCount / 2);
	    this.maxScrollTop = this.minScrollTop + totalItemCount * this.itemHeight - 0.1;
	  },
	  clearAnim: function clearAnim() {
	    if (this.isDecelerating) {
	      _Animate.Animate.stop(this.isDecelerating);
	      this.isDecelerating = false;
	    }
	
	    if (this.isAnimating) {
	      _Animate.Animate.stop(this.isAnimating);
	      this.isAnimating = false;
	    }
	  },
	  init: function init() {
	    assign(this, {
	      isTracking: false,
	      didDecelerationComplete: false,
	      isDragging: false,
	      isDecelerating: false,
	      isAnimating: false,
	      clientHeight: 0,
	      contentHeight: 0,
	      itemHeight: 0,
	      scrollTop: 0,
	      minScrollTop: 0,
	      maxScrollTop: 0,
	      scheduledTop: 0,
	      lastTouchTop: 0,
	      lastTouchMove: 0,
	      positions: [],
	      minDecelerationScrollTop: 0,
	      maxDecelerationScrollTop: 0,
	      decelerationVelocityY: 0
	    });
	
	    var _refs = this.refs;
	    var indicator = _refs.indicator;
	    var component = _refs.component;
	    var content = _refs.content;
	
	
	    this.itemHeight = parseInt(getComputedStyle(indicator, 'height'), 10);
	
	    this.setDimensions(component.clientHeight, content.offsetHeight);
	
	    this.select(this.state.selectedValue, false);
	  },
	  selectByIndex: function selectByIndex(index, animate) {
	    if (index < 0 || index >= this.props.children.length) {
	      return;
	    }
	    this.scrollTop = this.minScrollTop + index * this.itemHeight;
	
	    this.scrollTo(this.scrollTop, animate);
	  },
	  select: function select(value, animate) {
	    var children = this.props.children;
	    for (var i = 0, len = children.length; i < len; i++) {
	      if (children[i].value === value) {
	        this.selectByIndex(i, animate);
	        return;
	      }
	    }
	    this.selectByIndex(0, animate);
	  },
	  scrollTo: function scrollTo(t, a) {
	    var top = t;
	    var animate = a;
	    animate = animate === undefined ? true : animate;
	
	    this.clearAnim();
	
	    top = Math.round(top / this.itemHeight) * this.itemHeight;
	    top = Math.max(Math.min(this.maxScrollTop, top), this.minScrollTop);
	
	    if (top === this.scrollTop || !animate) {
	      this.publish(top);
	      this.scrollingComplete();
	      return;
	    }
	    this.publish(top, DEFAULT_ANIM_DURATION);
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
	    var index = Math.round((this.scrollTop - this.minScrollTop - this.itemHeight / 2) / this.itemHeight);
	    var child = this.props.children[index];
	    if (child) {
	      this.fireValueChange(child.value);
	    }
	  },
	  doTouchStart: function doTouchStart(touches, timeStamp) {
	    this.clearAnim();
	    this.initialTouchTop = this.lastTouchTop = touches[0].pageY;
	    this.lastTouchMove = timeStamp;
	    this.enableScrollY = false;
	    this.isTracking = true;
	    this.didDecelerationComplete = false;
	    this.isDragging = false;
	    this.positions = [];
	  },
	  doTouchMove: function doTouchMove(touches, timeStamp) {
	    // Ignore event when tracking is not enabled (event might be outside of element)
	    if (!this.isTracking) {
	      return;
	    }
	
	    var currentTouchTop = touches[0].pageY;
	
	    var positions = this.positions;
	
	    // Are we already is dragging mode?
	    if (this.isDragging) {
	      var moveY = currentTouchTop - this.lastTouchTop;
	      var scrollTop = this.scrollTop;
	
	      if (this.enableScrollY) {
	        scrollTop -= moveY;
	
	        var minScrollTop = this.minScrollTop;
	        var maxScrollTop = this.maxScrollTop;
	
	        if (scrollTop > maxScrollTop || scrollTop < minScrollTop) {
	          // Slow down on the edges
	          if (scrollTop > maxScrollTop) {
	            scrollTop = maxScrollTop;
	          } else {
	            scrollTop = minScrollTop;
	          }
	        }
	      }
	
	      // Keep list from growing infinitely (holding min 10, max 20 measure points)
	      if (positions.length > POSITION_MAX_LENGTH) {
	        positions.splice(0, POSITION_MAX_LENGTH / 2);
	      }
	
	      // Track scroll movement for declaration
	      positions.push(scrollTop, timeStamp);
	
	      // Sync scroll position
	      this.publish(scrollTop);
	      // Otherwise figure out whether we are switching into dragging mode now.
	    } else {
	        var distanceY = Math.abs(currentTouchTop - this.initialTouchTop);
	
	        this.enableScrollY = distanceY >= MINIUM_TRACKING_FOR_SCROLL;
	
	        positions.push(this.scrollTop, timeStamp);
	
	        this.isDragging = this.enableScrollY && distanceY >= MINIUM_TRACKING_FOR_DRAG;
	      }
	
	    // Update last touch positions and time stamp for next event
	    this.lastTouchTop = currentTouchTop;
	    this.lastTouchMove = timeStamp;
	  },
	  doTouchEnd: function doTouchEnd(timeStamp) {
	    // Ignore event when tracking is not enabled (no touchstart event on element)
	    // This is required as this listener ('touchmove')
	    // sits on the document and not on the element itself.
	    if (!this.isTracking) {
	      return;
	    }
	
	    // Not touching anymore (when two finger hit the screen there are two touch end events)
	    this.isTracking = false;
	
	    // Be sure to reset the dragging flag now. Here we also detect whether
	    // the finger has moved fast enough to switch into a deceleration animation.
	    if (this.isDragging) {
	      // Reset dragging flag
	      this.isDragging = false;
	
	      // Start deceleration
	      // Verify that the last move detected was in some relevant time frame
	      if (timeStamp - this.lastTouchMove <= TIME_FRAME) {
	        // Then figure out what the scroll position was about 100ms ago
	        var positions = this.positions;
	        var endPos = positions.length - 1;
	        var startPos = endPos;
	
	        // Move pointer to position measured 100ms ago
	        for (var i = endPos; i > 0 && positions[i] > this.lastTouchMove - TIME_FRAME; i -= 2) {
	          startPos = i;
	        }
	
	        // If start and stop position is identical in a 100ms timeframe,
	        // we cannot compute any useful deceleration.
	        if (startPos !== endPos) {
	          // Compute relative movement between these two points
	          var timeOffset = positions[endPos] - positions[startPos];
	          var movedTop = this.scrollTop - positions[startPos - 1];
	
	          // Based on 50ms compute the movement to apply for each render step
	          this.decelerationVelocityY = movedTop / timeOffset * (1000 / 60);
	
	          // Verify that we have enough velocity to start deceleration
	          if (Math.abs(this.decelerationVelocityY) > MIN_VELOCITY_TO_START_DECELERATION) {
	            this.startDeceleration(timeStamp);
	          }
	        }
	      }
	    }
	
	    if (!this.isDecelerating) {
	      this.scrollTo(this.scrollTop);
	    }
	
	    // Fully cleanup list
	    this.positions.length = 0;
	  },
	
	
	  // Applies the scroll position to the content element
	  publish: function publish(top, animationDuration) {
	    var _this = this;
	
	    // Remember whether we had an animation,
	    // then we try to continue based on the current "drive" of the animation
	    var wasAnimating = this.isAnimating;
	    if (wasAnimating) {
	      _Animate.Animate.stop(wasAnimating);
	      this.isAnimating = false;
	    }
	
	    if (animationDuration) {
	      (function () {
	        // Keep scheduled positions for scrollBy functionality
	        _this.scheduledTop = top;
	
	        var oldTop = _this.scrollTop;
	        var diffTop = top - oldTop;
	
	        var step = function step(percent) {
	          _this.scrollTop = oldTop + diffTop * percent;
	          // Push values out
	          _this.setTop(_this.scrollTop);
	        };
	
	        var verify = function verify(id) {
	          return _this.isAnimating === id;
	        };
	
	        var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
	          if (animationId === _this.isAnimating) {
	            _this.isAnimating = false;
	          }
	          if (_this.didDecelerationComplete || wasFinished) {
	            _this.scrollingComplete();
	          }
	        };
	
	        // When continuing based on previous animation
	        // we choose an ease-out animation instead of ease-in-out
	        _this.isAnimating = _Animate.Animate.start(step, verify, completed, animationDuration, wasAnimating ? _Animate.easeOutCubic : _Animate.easeInOutCubic);
	      })();
	    } else {
	      this.scheduledTop = this.scrollTop = top;
	      // Push values out
	      this.setTop(top);
	    }
	  },
	
	
	  // Called when a touch sequence end and the speed of
	  // the finger was high enough to switch into deceleration mode.
	  startDeceleration: function startDeceleration() {
	    var _this2 = this;
	
	    this.minDecelerationScrollTop = this.minScrollTop;
	    this.maxDecelerationScrollTop = this.maxScrollTop;
	
	    // Wrap class method
	    var step = function step(percent, now, render) {
	      _this2.stepThroughDeceleration(render);
	    };
	
	    // Detect whether it's still worth to continue animating steps
	    // If we are already slow enough to not being user perceivable anymore,
	    // we stop the whole process here.
	    var verify = function verify() {
	      var shouldContinue = Math.abs(_this2.decelerationVelocityY) >= MIN_VELOCITY_TO_KEEP_DECELERATING;
	      if (!shouldContinue) {
	        _this2.didDecelerationComplete = true;
	      }
	      return shouldContinue;
	    };
	
	    var completed = function completed() {
	      _this2.isDecelerating = false;
	      if (_this2.scrollTop <= _this2.minScrollTop || _this2.scrollTop >= _this2.maxScrollTop) {
	        _this2.scrollTo(_this2.scrollTop);
	        return;
	      }
	      if (_this2.didDecelerationComplete) {
	        _this2.scrollingComplete();
	      }
	    };
	
	    // Start animation and switch on flag
	    this.isDecelerating = _Animate.Animate.start(step, verify, completed);
	  },
	
	
	  // Called on every step of the animation
	  stepThroughDeceleration: function stepThroughDeceleration() {
	    var scrollTop = this.scrollTop + this.decelerationVelocityY;
	
	    var scrollTopFixed = Math.max(Math.min(this.maxDecelerationScrollTop, scrollTop), this.minDecelerationScrollTop);
	    if (scrollTopFixed !== scrollTop) {
	      scrollTop = scrollTopFixed;
	      this.decelerationVelocityY = 0;
	    }
	
	    if (Math.abs(this.decelerationVelocityY) <= 1) {
	      if (Math.abs(scrollTop % this.itemHeight) < 1) {
	        this.decelerationVelocityY = 0;
	      }
	    } else {
	      this.decelerationVelocityY *= DECELERATION_VELOCITY_RATE;
	    }
	
	    this.publish(scrollTop);
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var children = _props2.children;
	    var prefixCls = _props2.prefixCls;
	    var selectedValue = this.state.selectedValue;
	
	    var itemClassName = prefixCls + '-item';
	    var selectedItemClassName = itemClassName + ' ' + prefixCls + '-item-selected';
	    var items = children.map(function (item) {
	      return _react2["default"].createElement(
	        'div',
	        {
	          className: selectedValue === item.value ? selectedItemClassName : itemClassName,
	          key: item.value,
	          'data-value': item.value
	        },
	        item.label
	      );
	    });
	    return _react2["default"].createElement(
	      'div',
	      { className: '' + prefixCls, 'data-role': 'component', ref: 'component' },
	      _react2["default"].createElement('div', { className: prefixCls + '-mask', 'data-role': 'mask' }),
	      _react2["default"].createElement('div', { className: prefixCls + '-indicator', 'data-role': 'indicator', ref: 'indicator' }),
	      _react2["default"].createElement(
	        'div',
	        { className: prefixCls + '-content', 'data-role': 'content', ref: 'content' },
	        items
	      )
	    );
	  }
	});
	exports["default"] = Picker;
	module.exports = exports['default'];

/***/ },

/***/ 181:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.easeOutCubic = easeOutCubic;
	exports.easeInOutCubic = easeInOutCubic;
	var DESIRED_FRAMES = 60;
	var MILLISECONDS_PER_SECOND = 1000;
	var running = {};
	var counter = 1;
	
	var Animate = exports.Animate = {
	  // A requestAnimationFrame wrapper / polyfill.
	  requestAnimationFrame: function () {
	    var requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
	    return function (callback) {
	      requestFrame(callback);
	    };
	  }(),
	
	  // Stops the given animation.
	  stop: function stop(id) {
	    var cleared = running[id] !== null;
	    if (cleared) {
	      running[id] = null;
	    }
	    return cleared;
	  },
	
	
	  // Whether the given animation is still running.
	  isRunning: function isRunning(id) {
	    return running[id] !== null;
	  },
	
	
	  // Start the animation.
	  start: function start(stepCallback, verifyCallback, completedCallback, duration, easingMethod) {
	    var start = Date.now();
	    var lastFrame = start;
	    var percent = 0;
	    var dropCounter = 0;
	    var id = counter++;
	    // Compacting running db automatically every few new animations
	    if (id % 20 === 0) {
	      var newRunning = {};
	      for (var usedId in running) {
	        if (running.hasOwnProperty(usedId)) {
	          newRunning[usedId] = true;
	        }
	      }
	      running = newRunning;
	    }
	
	    // This is the internal step method which is called every few milliseconds
	    var step = function step(virtual) {
	      // Normalize virtual value
	      var render = virtual !== true;
	      // Get current time
	      var now = Date.now();
	
	      // Verification is executed before next animation step
	      if (!running[id] || verifyCallback && !verifyCallback(id)) {
	        running[id] = null;
	        if (completedCallback) {
	          completedCallback(DESIRED_FRAMES - dropCounter / ((now - start) / MILLISECONDS_PER_SECOND), id, false);
	        }
	        return;
	      }
	
	      // For the current rendering to apply let's update omitted steps in memory.
	      // This is important to bring internal state constiables up-to-date with progress in time.
	      if (render) {
	        var droppedFrames = Math.round((now - lastFrame) / (MILLISECONDS_PER_SECOND / DESIRED_FRAMES)) - 1;
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
	        if (completedCallback) {
	          completedCallback(DESIRED_FRAMES - dropCounter / ((now - start) / MILLISECONDS_PER_SECOND), id, percent === 1 || duration === null);
	        }
	      } else if (render) {
	        lastFrame = now;
	        Animate.requestAnimationFrame(step);
	      }
	    };
	
	    // Mark as running
	    running[id] = true;
	    // Init first step
	    Animate.requestAnimationFrame(step);
	    // Return unique animation ID
	    return id;
	  }
	};
	
	// Easing Equations (c) 2003 Robert Penner, all rights reserved.
	// Open source under the BSD License.
	function easeOutCubic(pos) {
	  return Math.pow(pos - 1, 3) + 1;
	}
	
	function easeInOutCubic(p) {
	  var pos = p;
	  pos /= 0.5;
	  if (pos < 1) {
	    return 0.5 * Math.pow(pos, 3);
	  }
	  return 0.5 * (Math.pow(pos - 2, 3) + 2);
	}

/***/ }

});
//# sourceMappingURL=simple.js.map