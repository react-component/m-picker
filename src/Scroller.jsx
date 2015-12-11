import React from 'react';
import IScroll from 'iscroll';

const Scroller = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    defaultValue: React.PropTypes.string,
    indexOfScrollers: React.PropTypes.number,
    onSelect: React.PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rmc-cascade-select',
      defaultValue: '',
    };
  },
  getInitialState() {
    return {
    };
  },
  componentDidMount() {
    this.componentDidUpdate();
  },
  componentDidUpdate() {
    // if (!this.iscroll) {
    //   this.initScroller();
    // } else {
    //   this.iscroll.refresh();
    // }
    if (this.iscroll) {
      this.componentWillUnmount();
    }
    this.initScroller();
    // scrollTo 会再次触发 scrollEnd 产生 bug
    const y = this.iscroll.pages[0][this.defaultScrollPosition].y;
    // this.iscroll.scrollTo(0, this.iscroll.pages[0][this.defaultScrollPosition].y);
    // console.log(this.refs.iscroll_scroller.style.transform, y);
    // todo remove
    this.refs.iscroll_scroller.style.transform = 'translate(0px, ' + y + 'px) translateZ(0px)';
  },
  componentWillUnmount() {
    this.iscroll.off();
    this.iscroll.destroy();
    this.iscroll = null;
  },
  onScrollEnd() {
    // console.log(this.iscroll.currentPage);
    // console.log(this);
    // debugger
    this.iscroll.pages[0].forEach((item, index) => {
      if (Math.abs(this.iscroll.y - item.y) < 2) {
        if (this.props.onSelect) {
          this.props.onSelect(this.data[index], this.props.indexOfScrollers);
        }
      }
    });
  },
  initScroller() {
    // debugger
    this.iscroll = new IScroll(this.refs.iscroll_wrapper, {
      snap: 'div',
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
    if (props.defaultValue) {
      data.forEach((item, index) => {
        if (item.value === props.defaultValue) {
          this.defaultScrollPosition = index - len;
        }
      });
    }

    return (<div ref="iscroll_wrapper" className={`${prefixCls}-scroller-wrapper`} data-role="wrapper">
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

export default Scroller;
