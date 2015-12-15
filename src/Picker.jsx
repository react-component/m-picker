import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Scroller from './Scroller';

const Picker = React.createClass({
  propTypes: {
    prefixCls: React.PropTypes.string,
    open: React.PropTypes.bool,
    data: React.PropTypes.array,
    value: React.PropTypes.array,
    onOk: React.PropTypes.func,
    onCancel: React.PropTypes.func,
    onChange: React.PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rmc-picker',
      data: [],
      value: [],
    };
  },
  getInitialState() {
    const st = {
      open: false,
    };
    if ('open' in this.props) {
      st.open = this.props.open || false;
    }
    return st;
  },
  componentDidMount() {
    this.componentDidUpdate();
  },
  componentWillReceiveProps(nextProps) {
    const props = {};
    if ('open' in nextProps) {
      props.open = nextProps.open;
    }
    this.setState(props);
  },
  componentDidUpdate() {
    if (this.state.open) {
      this.processDataValue();
      this.createSelector();
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
  onCancel() {
    this.setOpenState(false);
    if (this.props.onCancel) {
      this.props.onCancel({
        event: 'cancel',
      });
    }
  },
  onOk() {
    this.setOpenState(false);
    if (this.props.onOk) {
      this.props.onOk({
        value: this.value,
      });
    }
  },
  onSelect(selectNameValue, indexOfScrollers) {
    if (this.props.onChange) {
      this.props.onChange(selectNameValue.value, {
        indexOfScrollers: indexOfScrollers,
        preValue: [...this.value],
      });
    }
  },
  setOpenState(open, callback) {
    if (this.state.open !== open) {
      if (!('open' in this.props)) {
        this.setState({
          open: open,
        }, callback);
      } else {
        this.setState({
          open: this.props.open,
        });
      }
    }
  },
  createSelector() {
    const props = this.props;

    const container = (<div className={classNames(props.className, props.prefixCls + '-container')}>
        <div className={props.prefixCls + '-header'}>
          <div className={props.prefixCls + '-item'} onClick={this.onCancel}>取消</div>
          <div className={props.prefixCls + '-item'}></div>
          <div className={props.prefixCls + '-item'} onClick={this.onOk}>完成</div>
        </div>
        <div className={props.prefixCls + '-content'}>
          {this.data.map((item, index) => {
            return item.length ? (<div key={index} className={`${this.props.prefixCls}-item`} data-index={index}>
                <Scroller data={item} indexOfScrollers={index} defaultValue={this.value[index]} onSelect={this.onSelect} />
              </div>) : null;
          })}
        </div>
      </div>);

    const mask = (<div className={classNames(`${props.prefixCls}-mask`,
        this.state.open ? `${props.prefixCls}-mask-open` : '')}
      onClick={this.onClose}></div>);

    if (!this.selectorContainer) {
      this.selectorContainer = document.createElement('div');
      document.body.appendChild(this.selectorContainer);
    }

    ReactDOM.render((<div>{container}{mask}</div>), this.selectorContainer);
  },
  destroySelector() {
    if (this.selectorContainer) {
      ReactDOM.unmountComponentAtNode(this.selectorContainer);
      document.body.removeChild(this.selectorContainer);
      this.selectorContainer = null;
    }
  },
  processDataValue() {
    // make value array lenth equal with data array length
    const value = [...this.props.value];
    this.value = value;
    this.data = [...this.props.data];
    this.data.forEach((item, index) => {
      value[index] = value[index] || '';
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

    ele = React.cloneElement(ele, ('open' in this.props) ? {} : {
      onClick: this.onOpen,
    });

    return ele;
  },
});
export default Picker;
