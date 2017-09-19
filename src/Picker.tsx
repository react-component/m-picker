import React from 'react';
import classNames from 'classnames';
import ZScroller from 'zscroller';
import { IPickerProps } from './PickerTypes';
import PickerMixin from './PickerMixin';

type IPickerProp = {
  select: Function;
  doScrollingComplete: Function;
  coumputeChildIndex: Function;
};

class Picker extends React.Component<IPickerProp & IPickerProps, any> {
  static defaultProps = {
    prefixCls: 'rmc-picker',
  };

  rootRef: any;
  maskRef: any;
  contentRef: any;
  indicatorRef: any;
  itemHeight: number;
  zscroller: any;
  scrollValue: any;

  constructor(props) {
    super(props);

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
    this.state = {
      selectedValue: selectedValueState,
    };
  }

  componentDidMount() {
    const { contentRef, indicatorRef, maskRef, rootRef } = this;
    const rootHeight = rootRef.getBoundingClientRect().height;
    // https://github.com/react-component/m-picker/issues/18
    const itemHeight = this.itemHeight = indicatorRef.getBoundingClientRect().height;
    let num = Math.floor(rootHeight / itemHeight);
    if (num % 2 === 0) {
      num--;
    }
    num--;
    num /= 2;
    contentRef.style.padding = `${itemHeight * num}px 0`;
    indicatorRef.style.top = `${itemHeight * num}px`;
    maskRef.style.backgroundSize = `100% ${itemHeight * num}px`;
    this.zscroller = new ZScroller(contentRef, {
      scrollingX: false,
      snapping: true,
      locking: false,
      penetrationDeceleration: .1,
      minVelocityToKeepDecelerating: 0.5,
      scrollingComplete: this.scrollingComplete,
      onScroll: this.props.onScrollChange && this.onScrollChange,
    });
    this.zscroller.setDisabled(this.props.disabled);
    this.zscroller.scroller.setSnapSize(0, itemHeight);
    this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);
  }

  componentWillReceiveProps(nextProps) {
    if ('selectedValue' in nextProps) {
      this.setState({
        selectedValue: nextProps.selectedValue,
      });
    }
    this.zscroller.setDisabled(nextProps.disabled);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selectedValue !== nextState.selectedValue
      || this.props.children !== nextProps.children;
  }

  componentDidUpdate() {
    this.zscroller.reflow();
    this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);
  }

  componentWillUnmount() {
    this.zscroller.destroy();
  }

  scrollTo = (top) => {
    this.zscroller.scroller.scrollTo(0, top);
  }

  fireValueChange = (selectedValue) => {
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
  }

  onScrollChange = () => {
    const { top } = this.zscroller.scroller.getValues();
    if (top >= 0) {
      const children = React.Children.toArray(this.props.children);
      const index = this.props.coumputeChildIndex(top, this.itemHeight, children.length);
      if (this.scrollValue !== index) {
        this.scrollValue = index;
        const child: any = children[index];
        if (child && this.props.onScrollChange) {
          this.props.onScrollChange(child.props.value);
        } else if (console.warn) {
          console.warn('child not found', children, index);
        }
      }
    }
  }

  scrollingComplete = () => {
    const { top } = this.zscroller.scroller.getValues();
    if (top >= 0) {
      this.props.doScrollingComplete(top, this.itemHeight, this.fireValueChange);
    }
  }

  getValue() {
    if ('selectedValue' in this.props) {
      return this.props.selectedValue;
    }
    const children: any = React.Children.toArray(this.props.children);
    return children && children[0] && children[0].props.value;
  }

  render() {
    const { props } = this;
    const {
      prefixCls,
      itemStyle,
      indicatorStyle,
      indicatorClassName = '',
      children,
    } = props;
    const { selectedValue } = this.state;
    const itemClassName = `${prefixCls}-item`;
    const selectedItemClassName = `${itemClassName} ${prefixCls}-item-selected`;
    const map = (item: any) => {
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
    };
    // compatibility for preact
    const items = React.Children ? React.Children.map(children, map) : ([] as any[]).concat(children).map(map);

    const pickerCls = {
      [props.className as string]: !!props.className,
      [prefixCls as string]: true,
    };
    return (
      <div className={classNames(pickerCls)} ref={el => this.rootRef = el} style={this.props.style}>
        <div className={`${prefixCls}-mask`} ref={el => this.maskRef = el} />
        <div
          className={`${prefixCls}-indicator ${indicatorClassName}`}
          ref={el => this.indicatorRef = el}
          style={indicatorStyle}
        />
        <div className={`${prefixCls}-content`} ref={el => this.contentRef = el}>
          {items}
        </div>
      </div>
    );
  }
}

export default PickerMixin(Picker);
