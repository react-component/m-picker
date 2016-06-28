import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Modal from 'rc-dialog';
import { contains } from './utils.web';
import {PopupPickerPropsWeb, PopupPickerState} from './PopupPickerTypes';
import reactMixin from 'react-mixin';
import PopupMixin from './PopupMixin';

export default class PopupPicker extends React.Component<PopupPickerPropsWeb, PopupPickerState> {
  static defaultProps = {
    prefixCls: 'rmc-picker-popup',
    modalStyle: {},
    triggerType: 'onClick',
    WrapComponent:'span',
  };

  onDismiss:() => void;

  onOk:() => void;

  hide:() => void;

  getModal() {
    const props = this.props;
    if (!this.state.visible) {
      return null;
    }
    return (<Modal
      prefixCls={`${props.prefixCls}`}
      visible
      transitionName={props.popupTransitionName}
      maskTransitionName={props.maskTransitionName}
      onClose={this.hide}
      style={props.modalStyle}
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
  }
}

reactMixin.onClass(PopupPicker, PopupMixin);
