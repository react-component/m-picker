import React from 'react';
import Modal from 'rmc-dialog';
import PopupMixin from './PopupMixin';
import Touchable from 'rmc-feedback';

const getModal = (props, visible, { getContent, hide, onDismiss, onOk }) => {
  if (!visible) {
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
      onClose={hide}
      style={props.style}
    >
      <div>
        <div className={`${prefixCls}-header`}>
          <Touchable activeClassName={`${prefixCls}-item-active`}>
            <div className={`${prefixCls}-item ${prefixCls}-header-left`} onClick={onDismiss}>
              {props.dismissText}
            </div>
          </Touchable>
          <div className={`${prefixCls}-item ${prefixCls}-title`}>{props.title}</div>
          <Touchable activeClassName={`${prefixCls}-item-active`}>
            <div className={`${prefixCls}-item ${prefixCls}-header-right`} onClick={onOk}>
              {props.okText}
            </div>
          </Touchable>
        </div>
        {getContent()}
      </div>
    </Modal>
  );
};

export default PopupMixin(getModal, {
  prefixCls: 'rmc-picker-popup',
  WrapComponent: 'span',
  triggerType: 'onClick',
  pickerValueProp: 'selectedValue',
  pickerValueChangeProp: 'onValueChange',
});
