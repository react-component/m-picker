import React from 'react';
import Modal from 'rc-dialog';
import { IPopupPickerProps } from './PopupPickerTypes';
import PopupMixin from './PopupMixin';
import Touchable from 'rc-touchable';

const PopupPicker = React.createClass<IPopupPickerProps, any>({
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
    const { prefixCls } = props;
    return (
      <Modal
        prefixCls={`${prefixCls}`}
        className={props.className || ''}
        visible
        closable={false}
        transitionName={props.transitionName || props.popupTransitionName}
        maskTransitionName={props.maskTransitionName}
        onClose={this.hide}
        style={props.style}
      >
        <div>
          <div className={`${prefixCls}-header`}>
            <Touchable activeClassName={`${prefixCls}-item-active`}>
              <div className={`${prefixCls}-item ${prefixCls}-header-left`} onClick={this.onDismiss}>
                {props.dismissText}
              </div>
            </Touchable>
            <div className={`${prefixCls}-item ${prefixCls}-title`}>{props.title}</div>
            <Touchable activeClassName={`${prefixCls}-item-active`}>
              <div className={`${prefixCls}-item ${prefixCls}-header-right`} onClick={this.onOk}>
                {props.okText}
              </div>
            </Touchable>
          </div>
          {this.getContent()}
        </div>
      </Modal>
    );
  },

  render() {
    return this.getRender();
  },
});

export default PopupPicker;
