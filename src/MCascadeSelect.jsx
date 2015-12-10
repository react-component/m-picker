import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
// import iscrollLite from 'iscroll/build/iscroll-lite';
import Scroller from '../vendor/scroller';

const MCascadeSelect = React.createClass({
  propTypes: {
    prefixCls: React.PropTypes.string,
    data: React.PropTypes.array,
    value: React.PropTypes.array,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onCancel: React.PropTypes.func,
    onChange: React.PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rc-m-cascade-select',
      data: [],
      value: [],
    };
  },
  getInitialState() {
    return {
      open: false,
    };
  },
  componentDidUpdate() {
    if (this.state.open) {
      if (!this.selectorContainer) {
        this.createSelector();
      }
      this.createScrollerContainer();
    } else {
      this.destroySelector();
    }
  },
  componentWillUnmount() {
    this.destroySelector();
  },
  onOpen() {
    this.setOpenState(true);
  },
  onClose() {
    this.setOpenState(false);
  },
  onSubmit() {
    this.setOpenState(false);
    if (this.props.onSubmit) {
      this.props.onSubmit({
        event: 'submit',
        value: this.value,
      });
    }
  },
  onCancel() {
    this.setOpenState(false);
    if (this.props.onCancel) {
      this.props.onCancel({
        event: 'cancel',
      });
    }
  },
  onSelect(index, selectVal) {
    const newVal = [...this.value];
    newVal[index] = selectVal;
    if (this.props.onChange) {
      this.props.onChange({value: newVal, changedIndex: index});
    }
  },
  setOpenState(open, callback) {
    const {onOpen, onClose} = this.props;
    if (this.state.open !== open) {
      this.setState({
        open: open,
      }, callback);
      const event = {
        open: open,
      };
      if (open) {
        if (onOpen) {
          onOpen(event);
        }
      } else {
        if (onClose) {
          onClose(event);
        }
      }
    }
  },
  createScrollerContainer() {
    this.processDataAndValue();

    const props = this.props;
    let html = '';
    const scrollers = [];
    this.data.forEach((item, index) => {
      const ref = 'scroll_' + index;
      html += `<div id="${ref}" class="${props.prefixCls}-item" data-index="${index}"></div>`;

      scrollers.push({
        el: '#' + ref,
        data: item,
        defaultValue: this.value[index],
        onSelect: this.onSelect.bind(this, index),
      });
    });

    this.scrollsWrapper.innerHTML = html;

    scrollers.forEach(item => {
      const { el, data, defaultValue, onSelect } = item;
      this.initScroller(el, data, defaultValue, onSelect);
    });
  },
  createSelector() {
    const props = this.props;
    const state = this.state;

    const container = (<div className={classNames(props.className, props.prefixCls + '-container')}>
        <div className={props.prefixCls + '-header'}>
          <div className={props.prefixCls + '-item'} onClick={this.onCancel}>取消</div>
          <div className={props.prefixCls + '-item'}></div>
          <div className={props.prefixCls + '-item'} onClick={this.onSubmit}>完成</div>
        </div>
        <div id="__scrolls_wrapper" className={props.prefixCls + '-content'}></div>
      </div>);

    const maskCls = props.prefixCls + '-mask';
    const maskOpenCls = state.open ? props.prefixCls + '-mask-open' : '';
    const mask = <div className={classNames(maskCls, maskOpenCls)} onClick={this.onClose}></div>;

    if (!this.selectorContainer) {
      this.selectorContainer = document.createElement('div');
      document.body.appendChild(this.selectorContainer);
    }

    ReactDOM.render((<div>{container}{mask}</div>), this.selectorContainer);

    this.scrollsWrapper = document.getElementById('__scrolls_wrapper');
  },
  initScroller(el, data, defaultValue, onSelect) {
    const prefixCls = this.props.prefixCls;
    // destroy each scroller, is it required ??
    this.scrollerInstances = [];
    const scroller = new Scroller(el, {
      template: `<div class="${prefixCls}-scroller-component" data-role="component">
          <div class="${prefixCls}-scroller-mask" data-role="mask"></div>
          <div class="${prefixCls}-scroller-indicator" data-role="indicator"></div>
          <div class="${prefixCls}-scroller-content" data-role="content"></div>
        </div>`,
      itemClass: `${prefixCls}-scroller-item`,
      data: data,
      defaultValue: defaultValue,
      onSelect: onSelect,
    });
    this.scrollerInstances.push(scroller);
    return scroller;
  },
  teardownScroller() {},
  destroySelector() {
    if (this.selectorContainer) {
      ReactDOM.unmountComponentAtNode(this.selectorContainer);
      document.body.removeChild(this.selectorContainer);
      this.selectorContainer = null;
    }
  },
  processDataAndValue() {
    // init data and value：
    //
    // props.data = [[{value: '1', name: '1p'}, {value: '2', name: '2p'}], []]
    // props.value = ['1']
    // ->
    // props.data = [[{value: '1', name: '1p'}, {value: '2', name: '2p'}], [{value: '', name: ''}]]
    // props.value = ['1', '']
    const value = [...this.props.value];
    this.value = value;
    this.data = this.props.data.map((item, index) => {
      let newItem = item;
      if (!item.length) {
        newItem = [{value: '', name: ''}];
      }

      value[index] = value[index] || '';
      const existing = newItem.some((ii) => {
        return ii.value === value[index];
      });
      if (!existing) {
        value[index] = newItem[Math.floor(newItem.length / 2)].value;
      }

      return newItem;
    });
  },
  render() {
    const props = this.props;

    let ele = '';
    if (React.Children.count(props.children) === 1) {
      ele = React.Children.only(props.children);
    } else {
      ele = <span>{props.children}</span>;
    }

    ele = React.cloneElement(ele, {
      onClick: this.onOpen,
    });

    return ele;
  },
});
export default MCascadeSelect;
