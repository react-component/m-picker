import * as React from 'react';

function noop() {
}

export default {
  getDefaultProps() {
    return {
      onVisibleChange: noop,
      okText: 'Ok',
      dismissText: 'Dismiss',
      title: '',
      onOk: noop,
      onDismiss: noop,
    };
  },

  getInitialState() {
    return {
      visible: this.props.visible || false,
    };
  },

  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
    }
  },

  setVisibleState(visible) {
    this.setState({
      visible,
    });
  },

  fireVisibleChange(visible) {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
      this.props.onVisibleChange(visible);
    }
  },

  getRender() {
    const props = this.props;
    const children = props.children;
    if (!children) {
      return this.getModal();
    }
    const {WrapComponent} = this.props;
    const child = children;
    const newChildProps = {
      [props.triggerType]: this.onTriggerClick,
    };
    return <WrapComponent style={props.style}>
      {React.cloneElement(child, newChildProps)}
      {this.getModal()}
    </WrapComponent>;
  },

  onTriggerClick(e) {
    const child = this.props.children;
    const childProps = child.props || {};
    if (childProps[this.props.triggerType]) {
      childProps[this.props.triggerType](e);
    }
    this.fireVisibleChange(!this.state.visible);
  },
  onOk() {
    this.props.onOk();
    this.fireVisibleChange(false);
  },

  onDismiss() {
    this.props.onDismiss();
    this.fireVisibleChange(false);
  },

  hide() {
    this.fireVisibleChange(false);
  },
};
