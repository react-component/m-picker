import React from 'react';
import Modal from 'rc-dialog';
import reactMixin from 'react-mixin';
import { IPopupPickerProps } from './PopupPickerTypes';
import PopupMixin from './PopupMixin';
import Touchable from 'rc-touchable';

class PopupPicker extends React.Component<IPopupPickerProps, any> {
  static defaultProps = {
    prefixCls: 'rmc-picker-popup',
    triggerType: 'onClick',
    WrapComponent: 'span',
  };

  hide: () => void;
  onDismiss: () => void;
  onOk: () => void;
  getContent: () => any;
  getRender: () => any;

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
        onClose={this.hide.bind(this)}
        style={props.style}
      >
        <div>
          <div className={`${prefixCls}-header`}>
            <Touchable activeClassName={`${prefixCls}-item-active`}>
              <div className={`${prefixCls}-item ${prefixCls}-header-left`} onClick={this.onDismiss.bind(this)}>
                {props.dismissText}
              </div>
            </Touchable>
            <div className={`${prefixCls}-item ${prefixCls}-title`}>{props.title}</div>
            <Touchable activeClassName={`${prefixCls}-item-active`}>
              <div className={`${prefixCls}-item ${prefixCls}-header-right`} onClick={this.onOk.bind(this)}>
                {props.okText}
              </div>
            </Touchable>
          </div>
          {this.getContent()}
        </div>
      </Modal>
    );
  }

  render() {
    return this.getRender();
  }
}

reactMixin.onClass(PopupPicker, PopupMixin);

export default PopupPicker;
