import React from 'react';
import createClass from 'create-react-class';
import classNames from 'classnames';
import ZScroller from 'zscroller';
import { IPickerProps } from './PickerTypes';
import PickerMixin from './PickerMixin';

const Picker = createClass<IPickerProps, any>({
  mixins: [PickerMixin],

  statics: {
    Item() {
    },
  },

  getDefaultProps() {
    return {
      prefixCls: 'rmc-picker',
    };
  },

  getInitialState() {
    let selectedValueState;
    const { selectedValue, defaultSelectedValue } = this.props;
    if (selectedValue !== undefined) {
      selectedValueState = selectedValue;
    } else if (defaultSelectedValue !== undefined) {
      selectedValueState = defaultSelectedValue;
    } else {
      const children: any = React.Children.toArray(this.props.children);
      selectedValueState = children && children[0] && children[0].props.value;
    }
    return {
      selectedValue: selectedValueState,
    };
  },

  componentDidMount() {
    const { content, indicator, mask, root } = this.refs;
    const rootHeight = root.getBoundingClientRect().height;
    // https://github.com/react-component/m-picker/issues/18
    const itemHeight = this.itemHeight = indicator.getBoundingClientRect().height;
    let num = Math.floor(rootHeight / itemHeight);
    if (num % 2 === 0) {
      num--;
    }
    num--;
    num /= 2;
    content.style.padding = `${itemHeight * num}px 0`;
    indicator.style.top = `${itemHeight * num}px`;
    mask.style.backgroundSize = `100% ${itemHeight * num}px`;
    this.zscroller = new ZScroller(content, {
      scrollingX: false,
      snapping: true,
      locking: false,
      penetrationDeceleration: .1,
      minVelocityToKeepDecelerating: 0.5,
      scrollingComplete: this.scrollingComplete,
    });
    this.zscroller.setDisabled(this.props.disabled);
    this.zscroller.scroller.setSnapSize(0, itemHeight);
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
      || this.props.children !== nextProps.children;
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
      if (this.props.onValueChange) {
        this.props.onValueChange(selectedValue);
      }
    }
  },

  scrollingComplete() {
    const { top } = this.zscroller.scroller.getValues();
    if (top >= 0) {
      this.doScrollingComplete(top);
    }
  },

  getValue() {
    if ('selectedValue' in this.props) {
      return this.props.selectedValue;
    }
    const children: any = React.Children.toArray(this.props.children);
    return children && children[0] && children[0].props.value;
  },

  render() {
    const { props } = this;
    const {
      prefixCls,
      itemStyle,
      indicatorStyle,
      indicatorClassName = '',
    } = props;
    const { selectedValue } = this.state;
    const itemClassName = `${prefixCls}-item`;
    const selectedItemClassName = `${itemClassName} ${prefixCls}-item-selected`;

    // compatibility for preact
    const items = [].concat(props.children).map((item: any) => {
      const { className = '', style, value } = item.props;
      return (
        <div
          style={{ ...itemStyle, ...style }}
          className={`${selectedValue === value ? selectedItemClassName : itemClassName} ${className}`}
          key={value}
        >
          {item.children || item.props.children}
        </div>
      );
    });

    const pickerCls = {
      [props.className as string]: !!props.className,
      [prefixCls as string]: true,
    };
    return (
      <div className={classNames(pickerCls)} ref="root" style={this.props.style}>
        <div className={`${prefixCls}-mask`} ref="mask"/>
        <div className={`${prefixCls}-indicator ${indicatorClassName}`} ref="indicator" style={indicatorStyle}/>
        <div className={`${prefixCls}-content`} ref="content">
          {items}
        </div>
      </div>
    );
  },
});

export default Picker;
