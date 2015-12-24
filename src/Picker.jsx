import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import IScroll from 'iscroll';

// 前后补三个空元素，页面展示需要
const paddingElements = [0, 1, 2, 3, 4, 5].map((i) => {
  return {
    props: {
      value: 'padding_' + i,
      label: '',
      key: 'padding_' + i,
    },
  };
});

const paddingElementsHalfLen = paddingElements.length / 2;

const Picker = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    onValueChange: PropTypes.func,
    children: PropTypes.any,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  },
  getDefaultProps() {
    return {
      onValueChange() {
      },
      prefixCls: 'rmc-picker',
    };
  },
  componentDidMount() {
    this.init();
  },
  shouldComponentUpdate() {
    const thisDom = ReactDOM.findDOMNode(this);
    // when parent element display none
    if (thisDom.offsetHeight <= 0 || thisDom.offsetWidth <= 0) {
      return false;
    }
    return true;
  },
  componentDidUpdate() {
    this.componentWillUnmount();
    this.init();
  },
  componentWillUnmount() {
    this.iscroll.destroy();
    this.iscroll = null;
  },
  onScrollEnd() {
    let index;
    const iscrollY = this.iscroll.y;
    this.iscroll.pages[0].forEach((item, i) => {
      if (index === undefined && Math.abs(iscrollY - item.y) < 2) {
        index = i;
      }
    });
    if (index !== undefined) {
      const selectedValue = this.getValueByIndex(index);
      if (selectedValue !== this.props.selectedValue) {
        this.props.onValueChange(this.getValueByIndex(index));
      }
    }
  },
  getValueByIndex(index) {
    return this.props.children[index].props.value;
  },
  getScrollPosition() {
    const props = this.props;
    if (!props.selectedValue) {
      return 0;
    }
    let scrollPosition = 0;
    props.children.forEach((item, index) => {
      if (item.props.value === props.selectedValue) {
        scrollPosition = index;
      }
    });
    return scrollPosition;
  },
  init() {
    // refresh 不能改变 pages[0] 里数组的长度，导致计算错误。todo remove iscroll !
    // this.iscroll.refresh();
    setTimeout(() => {
      this.initScroller();
      this.positionScroll();
    }, 10);
  },
  initScroller() {
    this.iscroll = new IScroll(this.refs.iscrollWrapper, {
      snap: 'div',
    });
    this.iscroll.on('scrollEnd', this.onScrollEnd);
  },
  positionScroll() {
    if (this.iscroll.pages[0]) {
      this.iscroll.scrollTo(0, this.iscroll.pages[0][this.getScrollPosition()].y);
    }
  },
  render() {
    const props = this.props;
    const prefixCls = props.prefixCls;
    const compositeData = [...paddingElements.slice(0, paddingElementsHalfLen),
      ...props.children,
      ...paddingElements.slice(paddingElementsHalfLen, paddingElements.length)];
    const items = compositeData.map((item, index) => {
      const itemProps = item.props;
      return (<div key={itemProps.key || index} className={`${prefixCls}-scroller-item`}>{itemProps.label}</div>);
    });
    return (<div ref="iscrollWrapper" className={classNames(props.className, `${prefixCls}-scroller-wrapper`)}>
      <div ref="iscroll_scroller" className={`${prefixCls}-scroller`}>{items}</div>
      <div className={`${prefixCls}-scroller-mask`} data-role="mask"></div>
      <div ref="indicator" className={`${prefixCls}-scroller-indicator`} data-role="indicator"></div>
    </div>);
  },
});

export default Picker;
