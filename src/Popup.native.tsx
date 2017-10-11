import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import PopupMixin from './PopupMixin';
import Modal from 'rmc-dialog/lib/Modal';

const getModal = (props, visible, { getContent, hide, onDismiss, onOk }) => {
  const { styles, title, okText, dismissText } = props;

  const titleEl = typeof title === 'string' ?
    <Text style={[styles.title]}>{title}</Text> :
    title;
  const okEl = typeof okText === 'string' ?
    <Text style={[styles.actionText, styles.okText]}>{okText}</Text> :
    okText;
  const dismissEl = typeof dismissText === 'string' ?
    <Text style={[styles.actionText, styles.dismissText]}>{dismissText}</Text> :
    dismissText;

  return (
    <Modal
      animationType="slide-up"
      wrapStyle={styles.modal}
      visible={visible}
      onClose={hide}
    >
      <View style={[styles.header]}>
        <TouchableHighlight
          onPress={onDismiss}
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
          onPress={onOk}
          style={[styles.headerItem]}
          activeOpacity={props.actionTextActiveOpacity}
          underlayColor={props.actionTextUnderlayColor}
        >
          {okEl}
        </TouchableHighlight>
      </View>
      {getContent()}
    </Modal>
  );
};

export default PopupMixin(getModal, {
  actionTextUnderlayColor: '#ddd',
  actionTextActiveOpacity: 1,
  triggerType: 'onPress',
  styles: {},
  WrapComponent: View,
});
