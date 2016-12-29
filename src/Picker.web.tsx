import React from 'react';
import classNames from 'classnames';
import ZScroller from 'zscroller';
import { IPickerProps } from './PickerTypes';
import PickerMixin from './PickerMixin';
import isChildrenEqual from './isChildrenEqual';

const Picker = React.createClass<IPickerProps, any>({
  mixins: [PickerMixin],

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
    } else if (children && children.length) {
      selectedValueState = children[0].value;
    }
    return {
      selectedValue: selectedValueState,
    };
  },

  componentDidMount() {
    this.itemHeight = this.refs.indicator.offsetHeight;
    // compact
    this.refs.content.style.padding = `${this.itemHeight * 3}px 0`;
    this.zscroller = new ZScroller(this.refs.content, {
      scrollingX: false,
      snapping: true,
      penetrationDeceleration: .1,
      minVelocityToKeepDecelerating: 0.5,
      scrollingComplete: this.scrollingComplete,
    });
    this.zscroller.setDisabled(this.props.disabled);
    this.zscroller.scroller.setSnapSize(0, this.itemHeight);
    this.select(this.state.selectedValue);
  },

  componentWillReceiveProps(nextProps) {
    if ('selectedValue' in nextProps) {
      this.setState({
        selectedValue: nextProps.selectedValue,
      });
    }
    this.zscroller.setDisabled(nextProps.disabled);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selectedValue !== nextState.selectedValue
      || !isChildrenEqual(this.props.children, nextProps.children, this.props.pure);
  },

  componentDidUpdate() {
    this.zscroller.reflow();
    this.select(this.state.selectedValue);
  },

  componentWillUnmount() {
    this.zscroller.destroy();
  },

  scrollTo(top) {
    this.zscroller.scroller.scrollTo(0, top);
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
    if (top >= 0) {
      this.doScrollingComplete(top);
    }
  },

  getChildMember(child, m) {
    return child[m];
  },

  getValue() {
    return this.props.selectedValue || this.props.children && this.props.children[0] && this.props.children[0].value;
  },

  toChildrenArray(children) {
    return children;
  },

  render() {
    const {
      children, prefixCls,
      className, itemStyle,
      indicatorStyle,
    } = this.props;
    const { selectedValue } = this.state;
    const itemClassName = `${prefixCls}-item`;
    const selectedItemClassName = `${itemClassName} ${prefixCls}-item-selected`;
    const items = children.map((item) => {
      return (
        <div
          style={itemStyle}
          className={selectedValue === item.value ? selectedItemClassName : itemClassName}
          key={item.value}
        >
          {item.label}
        </div>
      );
    });
    const pickerCls = {
      [className]: !!className,
      [prefixCls]: true,
    };
    return (
      <div
        className={classNames(pickerCls)}
      >
        <div className={`${prefixCls}-mask`}/>
        <div className={`${prefixCls}-indicator`} ref="indicator" style={indicatorStyle}/>
        <div className={`${prefixCls}-content`} ref="content">
          {items}
        </div>
      </div>
    );
  },
});

export default Picker;
