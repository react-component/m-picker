/*
 * Based on Zynga Scroller (http://github.com/zynga/scroller)
 * Copyright 2011, Zynga Inc.
 * Licensed under the MIT License.
 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
 */

import React, { PropTypes } from 'react';
import { Animate, easeOutCubic, easeInOutCubic } from './Animate';

const DECELERATION_VELOCITY_RATE = 0.95;
// How much velocity is required to keep the deceleration running
const MIN_VELOCITY_TO_KEEP_DECELERATING = 0.5;
const POSITION_MAX_LENGTH = 40;
const MINIUM_TRACKING_FOR_SCROLL = 0;
const MINIUM_TRACKING_FOR_DRAG = 5;
const DEFAULT_ANIM_DURATION = 250;
const TIME_FRAME = 100;
// How much velocity is required to start the deceleration
const MIN_VELOCITY_TO_START_DECELERATION = 4;

function assign(to, from) {
  for (const key in from) {
    if (from.hasOwnProperty(key)) {
      to[key] = from[key];
    }
  }
}

function getComputedStyle(el, key) {
  const computedStyle = window.getComputedStyle(el);
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
  const len = c1.length;
  for (let i = 0; i < len; i++) {
    if (c1[i].value !== c2[i].value || c1[i].label !== c2[i].label) {
      return false;
    }
  }
  return true;
}

const Picker = React.createClass({
  propTypes: {
    defaultSelectedValue: PropTypes.any,
    prefixCls: PropTypes.string,
    selectedValue: PropTypes.any,
    children: PropTypes.array,
    pure: PropTypes.bool,
    onValueChange: PropTypes.func,
  },

  getDefaultProps() {
    return {
      prefixCls: 'rmc-picker',
      pure: true,
      onValueChange() {
      },
    };
  },

  getInitialState() {
    let selectedValueState;
    const { selectedValue, defaultSelectedValue, children } = this.props;
    if (selectedValue !== undefined) {
      selectedValueState = selectedValue;
    } else if (defaultSelectedValue !== undefined) {
      selectedValueState = defaultSelectedValue;
    } else if (children.length) {
      selectedValueState = children[0].value;
    }
    return {
      selectedValue: selectedValueState,
    };
  },

  componentDidMount() {
    this.init();
    const { component } = this.refs;
    component.addEventListener('touchstart', this.onTouchStart, false);
    component.addEventListener('touchmove', this.onTouchMove, false);
    component.addEventListener('touchend', this.onTouchEnd, false);
  },

  componentWillReceiveProps(nextProps) {
    if ('selectedValue' in nextProps) {
      this.setState({
        selectedValue: nextProps.selectedValue,
      });
    }
  },

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selectedValue !== nextState.selectedValue
      || !isChildrenEqual(this.props.children, nextProps.children, this.props.pure);
  },

  componentDidUpdate(prevProps) {
    if (!isChildrenEqual(prevProps.children, this.props.children, this.props.pure)) {
      this.init();
    } else {
      this.select(this.state.selectedValue, false);
    }
  },

  componentWillUnmount() {
    const { component } = this.refs;
    component.removeEventListener('touchstart', this.onTouchStart, false);
    component.removeEventListener('touchmove', this.onTouchMove, false);
    component.removeEventListener('touchend', this.onTouchEnd, false);
    this.clearAnim();
  },

  onTouchEnd(e) {
    this.doTouchEnd(+e.timeStamp);
  },

  onTouchMove(e) {
    this.doTouchMove(e.touches, +e.timeStamp);
  },

  onTouchStart(e) {
    if (e.target.tagName.match(/input|textarea|select/i)) {
      return;
    }
    e.preventDefault();
    this.doTouchStart(e.touches, +e.timeStamp);
  },

  setTop(top) {
    if (this.refs.content) {
      this.refs.content.style.webkitTransform = `translate3d(0, ${-top}px, 0)`;
    }
  },

  setDimensions(clientHeight, contentHeight) {
    this.clientHeight = clientHeight;
    this.contentHeight = contentHeight;

    const totalItemCount = this.props.children.length;
    const clientItemCount = Math.round(this.clientHeight / this.itemHeight);

    this.minScrollTop = -this.itemHeight * (clientItemCount / 2);
    this.maxScrollTop = this.minScrollTop + totalItemCount * this.itemHeight - 0.1;
  },

  clearAnim() {
    if (this.isDecelerating) {
      Animate.stop(this.isDecelerating);
      this.isDecelerating = false;
    }

    if (this.isAnimating) {
      Animate.stop(this.isAnimating);
      this.isAnimating = false;
    }
  },

  init() {
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
      decelerationVelocityY: 0,
    });

    const { indicator, component, content } = this.refs;

    this.itemHeight = parseInt(getComputedStyle(indicator, 'height'), 10);

    this.setDimensions(component.clientHeight, content.offsetHeight);

    this.select(this.state.selectedValue, false);
  },

  selectByIndex(index, animate) {
    if (index < 0 || index >= this.props.children.length) {
      return;
    }
    this.scrollTop = this.minScrollTop + index * this.itemHeight;

    this.scrollTo(this.scrollTop, animate);
  },

  select(value, animate) {
    const children = this.props.children;
    for (let i = 0, len = children.length; i < len; i++) {
      if (children[i].value === value) {
        this.selectByIndex(i, animate);
        return;
      }
    }
    this.selectByIndex(0, animate);
  },

  scrollTo(t, a) {
    let top = t;
    let animate = a;
    animate = (animate === undefined) ? true : animate;

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

  fireValueChange(selectedValue) {
    if (selectedValue !== this.state.selectedValue) {
      if (!('selectedValue' in this.props)) {
        this.setState({
          selectedValue,
        });
      }
      this.props.onValueChange(selectedValue);
    }
  },

  scrollingComplete() {
    const index = Math.round((this.scrollTop - this.minScrollTop
      - this.itemHeight / 2) / this.itemHeight);
    const child = this.props.children[index];
    if (child) {
      this.fireValueChange(child.value);
    }
  },

  doTouchStart(touches, timeStamp) {
    this.clearAnim();
    this.initialTouchTop = this.lastTouchTop = touches[0].pageY;
    this.lastTouchMove = timeStamp;
    this.enableScrollY = false;
    this.isTracking = true;
    this.didDecelerationComplete = false;
    this.isDragging = false;
    this.positions = [];
  },

  doTouchMove(touches, timeStamp) {
    // Ignore event when tracking is not enabled (event might be outside of element)
    if (!this.isTracking) {
      return;
    }

    const currentTouchTop = touches[0].pageY;

    const positions = this.positions;

    // Are we already is dragging mode?
    if (this.isDragging) {
      const moveY = currentTouchTop - this.lastTouchTop;
      let scrollTop = this.scrollTop;

      if (this.enableScrollY) {
        scrollTop -= moveY;

        const minScrollTop = this.minScrollTop;
        const maxScrollTop = this.maxScrollTop;

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
      const distanceY = Math.abs(currentTouchTop - this.initialTouchTop);

      this.enableScrollY = distanceY >= MINIUM_TRACKING_FOR_SCROLL;

      positions.push(this.scrollTop, timeStamp);

      this.isDragging = this.enableScrollY && (distanceY >= MINIUM_TRACKING_FOR_DRAG);
    }

    // Update last touch positions and time stamp for next event
    this.lastTouchTop = currentTouchTop;
    this.lastTouchMove = timeStamp;
  },

  doTouchEnd(timeStamp) {
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
      if ((timeStamp - this.lastTouchMove) <= TIME_FRAME) {
        // Then figure out what the scroll position was about 100ms ago
        const positions = this.positions;
        const endPos = positions.length - 1;
        let startPos = endPos;

        // Move pointer to position measured 100ms ago
        for (let i = endPos; i > 0 && positions[i] > (this.lastTouchMove - TIME_FRAME); i -= 2) {
          startPos = i;
        }

        // If start and stop position is identical in a 100ms timeframe,
        // we cannot compute any useful deceleration.
        if (startPos !== endPos) {
          // Compute relative movement between these two points
          const timeOffset = positions[endPos] - positions[startPos];
          const movedTop = this.scrollTop - positions[startPos - 1];

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
  publish(top, animationDuration) {
    // Remember whether we had an animation,
    // then we try to continue based on the current "drive" of the animation
    const wasAnimating = this.isAnimating;
    if (wasAnimating) {
      Animate.stop(wasAnimating);
      this.isAnimating = false;
    }

    if (animationDuration) {
      // Keep scheduled positions for scrollBy functionality
      this.scheduledTop = top;

      const oldTop = this.scrollTop;
      const diffTop = top - oldTop;

      const step = (percent) => {
        this.scrollTop = oldTop + (diffTop * percent);
        // Push values out
        this.setTop(this.scrollTop);
      };

      const verify = (id) => {
        return this.isAnimating === id;
      };

      const completed = (renderedFramesPerSecond, animationId, wasFinished) => {
        if (animationId === this.isAnimating) {
          this.isAnimating = false;
        }
        if (this.didDecelerationComplete || wasFinished) {
          this.scrollingComplete();
        }
      };

      // When continuing based on previous animation
      // we choose an ease-out animation instead of ease-in-out
      this.isAnimating = Animate.start(step, verify,
        completed, animationDuration, wasAnimating ?
          easeOutCubic : easeInOutCubic);
    } else {
      this.scheduledTop = this.scrollTop = top;
      // Push values out
      this.setTop(top);
    }
  },

  // Called when a touch sequence end and the speed of
  // the finger was high enough to switch into deceleration mode.
  startDeceleration() {
    this.minDecelerationScrollTop = this.minScrollTop;
    this.maxDecelerationScrollTop = this.maxScrollTop;

    // Wrap class method
    const step = (percent, now, render) => {
      this.stepThroughDeceleration(render);
    };

    // Detect whether it's still worth to continue animating steps
    // If we are already slow enough to not being user perceivable anymore,
    // we stop the whole process here.
    const verify = () => {
      const shouldContinue = Math.abs(this.decelerationVelocityY)
        >= MIN_VELOCITY_TO_KEEP_DECELERATING;
      if (!shouldContinue) {
        this.didDecelerationComplete = true;
      }
      return shouldContinue;
    };

    const completed = () => {
      this.isDecelerating = false;
      if (this.scrollTop <= this.minScrollTop || this.scrollTop >= this.maxScrollTop) {
        this.scrollTo(this.scrollTop);
        return;
      }
      if (this.didDecelerationComplete) {
        this.scrollingComplete();
      }
    };

    // Start animation and switch on flag
    this.isDecelerating = Animate.start(step, verify, completed);
  },

  // Called on every step of the animation
  stepThroughDeceleration() {
    let scrollTop = this.scrollTop + this.decelerationVelocityY;

    const scrollTopFixed = Math.max(Math.min(this.maxDecelerationScrollTop, scrollTop),
      this.minDecelerationScrollTop);
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
  render() {
    const { children, prefixCls } = this.props;
    const { selectedValue } = this.state;
    const itemClassName = `${prefixCls}-item`;
    const selectedItemClassName = `${itemClassName} ${prefixCls}-item-selected`;
    const items = children.map((item) => {
      return (<div
        className={selectedValue === item.value ? selectedItemClassName : itemClassName}
        key={item.value}
        data-value={item.value}
      >
        {item.label}
      </div>);
    });
    return (<div className={`${prefixCls}`} data-role="component" ref="component">
      <div className={`${prefixCls}-mask`} data-role="mask"/>
      <div className={`${prefixCls}-indicator`} data-role="indicator" ref="indicator"/>
      <div className={`${prefixCls}-content`} data-role="content" ref="content">
        {items}
      </div>
    </div>);
  },
});
export default Picker;
