import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import IScroll from 'iscroll';

// compare two object,  props.data with nextProps.data
// data: [{value: '1', name: '1x'}, {value: '2', name: '2x'}...]
function isEqual(preData, data) {
  if (preData.length !== data.length) {
    return false;
  }
  const equal = data.every((item, index) => {
    return item.value === preData[index].value && item.name === preData[index].name;
  });
  if (!equal) {
    return false;
  }
  return true;
}
// console.log(isEqual([{value: '1', name: '1x'}, {value: '2', name: '2x'}], [{value: '1', name: '1x'}]));

const Picker = React.createClass({
  propTypes: {
    prefixCls: React.PropTypes.string,
    data: React.PropTypes.array,
    onValueChange: React.PropTypes.func,
    selectedValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    heightOfItem: React.PropTypes.number,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rmc-picker',
      selectedValue: '',
      heightOfItem: 34, // scroller's list item's height, should be a constant value
    };
  },
  componentDidMount() {
    this.componentDidUpdate();
  },
  shouldComponentUpdate(nextProps) {
    if (isEqual(this.props.data, nextProps.data) && this.iscroll) {
      return false;
    }
    return true;
  },
  componentDidUpdate() {
    const thisDom = ReactDOM.findDOMNode(this);
    // when parent element display none
    if (thisDom.offsetHeight <= 0 || thisDom.offsetWidth <= 0) {
      return;
    }
    if (!this.iscroll) {
      this.initScroller();
    } else {
      // refresh 和 scrollTo 等方法都会再次触发 scrollEnd
      setTimeout(() => {
        this.iscroll.refresh();
        this.iscroll.scrollTo(0, this.iscroll.pages[0][this.defaultScrollPosition].y);
      }, 0);
    }
  },
  componentWillUnmount() {
    this.iscroll.destroy();
    this.iscroll = null;
  },
  onScrollEnd() {
    let index = undefined;
    if (this.props.heightOfItem) {
      index = Math.abs(this.iscroll.y / this.props.heightOfItem);
    } else {
      this.iscroll.pages[0].forEach((item, i) => {
        if (index !== undefined && Math.abs(this.iscroll.y - item.y) < 2) {
          index = i;
        }
      });
    }
    if (this.props.onValueChange && index !== undefined) {
      this.props.onValueChange(this.data[index]);
    }
  },
  initScroller() {
    // debugger
    this.iscroll = new IScroll(this.refs.iscroll_wrapper, {
      snap: 'div',
      startY: this.startY,
    });
    this.iscroll.on('scrollEnd', this.onScrollEnd);
  },
  teardownScroller() {},
  render() {
    const props = this.props;
    const prefixCls = props.prefixCls;

    let data = [...props.data];
    this.data = data;
    // 前后补三个空元素，页面展示需要
    const temp = [0, 1, 2].map(() => {
      return {value: '', name: ''};
    });
    const len = temp.length;
    data = [...temp, ...data, ...temp];

    // get default scroll position
    this.defaultScrollPosition = 0;
    if (props.selectedValue) {
      data.forEach((item, index) => {
        if (item.value === props.selectedValue) {
          this.defaultScrollPosition = index - len;
        }
      });
    }

    // get default scroll startY
    this.startY = -(props.heightOfItem * this.defaultScrollPosition) || 0;

    return (<div ref="iscroll_wrapper" className={classNames(props.className, `${prefixCls}-scroller-wrapper`)}>
        <div ref="iscroll_scroller" className={`${prefixCls}-scroller`}>{
          data.map((item, index) => {
            return (<div key={index} className={`${prefixCls}-scroller-item`}
                data-value={item.value}>{item.name}</div>);
          })
        }</div>
        <div className={`${prefixCls}-scroller-mask`} data-role="mask"></div>
        <div ref="indicator" className={`${prefixCls}-scroller-indicator`} data-role="indicator"></div>
      </div>);
  },
});

export default Picker;
