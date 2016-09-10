import * as React from 'react';
import { PickerProps } from './PickerTypes';
import classNames from 'classnames';
import isChildrenEqual from './isChildrenEqual';
import ZScroller from 'zscroller';
import assign from 'object-assign';

const Picker = React.createClass<PickerProps, any>({
  getDefaultProps() {
    return {
      prefixCls: 'rmc-picker',
      pure: true,
      visibleItemCount: 7,
      itemHeight: 34,
      itemStyle: {},
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
    this.zscroller = new ZScroller(this.refs.content, {
      scrollingX: false,
      snapping: true,
      penetrationDeceleration: .1,
      minVelocityToKeepDecelerating: 0.5,
      scrollingComplete: this.scrollingComplete,
    });
    this.zscroller.scroller.setSnapSize(0, this.props.itemHeight);
    this.select(this.state.selectedValue);
  },

  componentWillReceiveProps(nextProps) {
    if ('selectedValue' in nextProps) {
      this.setState({
        selectedValue: nextProps.selectedValue,
      });
    }
    this.zscroller.disabled = nextProps.disabled;
  },

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selectedValue !== nextState.selectedValue
      || !isChildrenEqual(this.props.children, nextProps.children, this.props.pure);
  },

  componentDidUpdate() {
    this.select(this.state.selectedValue);
  },

  componentWillUnmount() {
    this.zscroller.destroy();
  },

  selectByIndex(index) {
    if (index < 0 || index >= this.props.children.length) {
      return;
    }
    this.zscroller.scroller.scrollTo(0, index * this.props.itemHeight);
  },

  select(value) {
    const children = this.props.children;
    for (let i = 0, len = children.length; i < len; i++) {
      if (children[i].value === value) {
        this.selectByIndex(i);
        return;
      }
    }
    this.selectByIndex(0);
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
    const { top } = this.zscroller.scroller.getValues();
    const index = Math.round((top - this.props.itemHeight / 2) / this.props.itemHeight);
    const child = this.props.children[index];
    if (child) {
      this.fireValueChange(child.value);
    }
  },

  render() {
    const { children, prefixCls, className, itemHeight, visibleItemCount } = this.props;
    if (visibleItemCount % 2 !== 1) {
      throw new Error(`picker visibleItemCount must be odd`);
    }
    const { selectedValue } = this.state;
    const itemClassName = `${prefixCls}-item`;
    const selectedItemClassName = `${itemClassName} ${prefixCls}-item-selected`;
    const items = children.map((item) => {
      const itemStyle = assign({
        height: itemHeight,
      }, this.props.itemStyle);
      return (
        <div
          className={selectedValue === item.value ? selectedItemClassName : itemClassName}
          key={item.value}
          style={itemStyle}
        >
          {item.label}
        </div>
      );
    });
    const pickerCls = {
      [className]: !!className,
      [prefixCls]: true,
    };
    const padding = (visibleItemCount - 1) / 2 * itemHeight;
    return (
      <div
        className={classNames(pickerCls)}
        style={{
          height: visibleItemCount * itemHeight,
        }}
      >
        <div className={`${prefixCls}-mask`} />
        <div className={`${prefixCls}-indicator`} ref="indicator" style={{
          top: padding,
          height: itemHeight,
        }} />
        <div className={`${prefixCls}-content`} ref="content" style={{
        padding:`${padding}px 0`,
        }}>
          {items}
        </div>
      </div>
    );
  },
});

export default Picker;
