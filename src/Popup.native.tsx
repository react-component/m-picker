import {
  View, TouchableHighlight, Text,
} from 'react-native';
import React from 'react';
import { IPopupPickerProps } from './PopupPickerTypes';
import PopupMixin from './PopupMixin';
import Modal from 'rc-dialog/lib/Modal';

const PopupPicker = React.createClass<IPopupPickerProps, any>({
  mixins: [PopupMixin],

  getDefaultProps() {
    return {
      actionTextUnderlayColor: '#ddd',
      actionTextActiveOpacity: 1,
      triggerType: 'onPress',
      styles: {},
      WrapComponent: View,
    };
  },

  getModal() {
    const { props } = this;
    const { styles, title, okText, dismissText } = props;

    const titleEl = typeof title === 'string' ?
      <Text style={[styles.title]}>{title}</Text> :
      title;
    const okEl = typeof okText === 'string' ?
      <Text style={[styles.actionText]}>{okText}</Text> :
      okText;
    const dismissEl = typeof dismissText === 'string' ?
      <Text style={[styles.actionText]}>{dismissText}</Text> :
      dismissText;

    return (
      <Modal
        animationType="slide-up"
        wrapStyle={styles.modal}
        visible={this.state.visible}
        onClose={this.onDismiss}
      >
        <View style={[styles.header]}>
          <TouchableHighlight
            onPress={this.onDismiss}
            style={[styles.headerItem]}
            activeOpacity={props.actionTextActiveOpacity}
            underlayColor={props.actionTextUnderlayColor}
          >
            {dismissEl}
          </TouchableHighlight>
          <View style={[styles.headerItem]}>
            {titleEl}
          </View>
          <TouchableHighlight
            onPress={this.onOk}
            style={[styles.headerItem]}
            activeOpacity={props.actionTextActiveOpacity}
            underlayColor={props.actionTextUnderlayColor}
          >
            {okEl}
          </TouchableHighlight>
        </View>
        {this.getContent()}
      </Modal>
    );
  },

  render() {
    return this.getRender();
  },
});

export default PopupPicker;
