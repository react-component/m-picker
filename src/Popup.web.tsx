import * as React from 'react';
import Modal from 'rc-dialog';
import { PopupPickerProps, PopupPickerState } from './PopupPickerTypes';
import PopupMixin from './PopupMixin';

const PopupPicker = React.createClass<PopupPickerProps, PopupPickerState>({
  mixins: [PopupMixin],

  getDefaultProps() {
    return {
      prefixCls: 'rmc-picker-popup',
      triggerType: 'onClick',
      WrapComponent: 'span',
    };
  },

  getModal() {
    const props = this.props;
    if (!this.state.visible) {
      return null;
    }
    return (<Modal
      prefixCls={`${props.prefixCls}`}
      className={props.className || ''}
      visible
      transitionName={props.transitionName || props.popupTransitionName}
      maskTransitionName={props.maskTransitionName}
      onClose={this.hide}
      style={props.style}
    >
      <div>
        <div className={`${props.prefixCls}-header`}>
          <div className={`${props.prefixCls}-item ${props.prefixCls}-header-left`} onClick={this.onDismiss}>
            {props.dismissText}
          </div>
          <div className={`${props.prefixCls}-item ${props.prefixCls}-title`}>{props.title}</div>
          <div className={`${props.prefixCls}-item ${props.prefixCls}-header-right`} onClick={this.onOk}>
            {props.okText}
          </div>
        </div>
        {this.props.content}
      </div>
    </Modal>);
  },

  render() {
    return this.getRender();
  }
});

export default PopupPicker;
