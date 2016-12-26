import React from 'react';

function noop() {
}

export default {
  getDefaultProps() {
    return {
      onVisibleChange: noop,
      okText: 'Ok',
      pickerValueProp: 'selectedValue',
      pickerValueChangeProp: 'onValueChange',
      dismissText: 'Dismiss',
      title: '',
      onOk: noop,
      onDismiss: noop,
    };
  },

  getInitialState() {
    return {
      pickerValue: null,
      visible: this.props.visible || false,
    };
  },

  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
    }
  },

  onPickerChange(pickerValue) {
    if (this.state.pickerValue !== pickerValue) {
      this.setState({
        pickerValue,
      });
      const { picker, pickerValueChangeProp } = this.props;
      if (picker && picker.props[pickerValueChangeProp]) {
        picker.props[pickerValueChangeProp](pickerValue);
      }
    }
  },

  saveRef(picker) {
    this.picker = picker;
  },

  setVisibleState(visible) {
    this.setState({
      visible,
    });
    if (!visible) {
      this.setState({
        pickerValue: null,
      });
    }
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
    const { WrapComponent, disabled } = this.props;
    const child = children;
    const newChildProps = {};
    if (!disabled) {
      newChildProps[props.triggerType] = this.onTriggerClick;
    }
    return (<WrapComponent style={props.wrapStyle}>
      {React.cloneElement(child, newChildProps)}
      {this.getModal()}
    </WrapComponent>);
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
    this.props.onOk(this.picker && this.picker.getValue());
    this.fireVisibleChange(false);
  },

  getContent() {
    if (this.props.picker) {
      return React.cloneElement(this.props.picker, ({
        [this.props.pickerValueProp]: this.state.pickerValue || this.props.value,
        [this.props.pickerValueChangeProp]: this.onPickerChange,
        ref: this.saveRef,
      }));
    } else {
      return this.props.content;
    }
  },

  onDismiss() {
    this.props.onDismiss();
    this.fireVisibleChange(false);
  },

  hide() {
    this.fireVisibleChange(false);
  },
};
