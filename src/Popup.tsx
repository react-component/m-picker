import { Modal, View, TouchableHighlight, Text, Platform } from 'react-native';
import * as React from 'react';
import { PopupPickerProps, PopupPickerState } from './PopupPickerTypes';
import PopupMixin from './PopupMixin';

function noop() {
}

const PopupPicker = React.createClass<PopupPickerProps, PopupPickerState>({
  mixins: [PopupMixin],

  getDefaultProps() {
    return {
      actionTextUnderlayColor: '#a9d9d4',
      actionTextActiveOpacity: 0.5,
      triggerType: 'onPress',
      styles: {},
      animationType: 'slide',
      WrapComponent: View,
    };
  },

  getModal() {
    if (!this.state.visible) {
      return null;
    }
    const {props} = this;
    const {styles} = props;
    return (
      <Modal
        visible
        transparent
        animationType={props.animationType}
        onRequestClose={Platform.OS === 'android' ? this.onDismiss : undefined}
      >
        <View style={[styles.modal]}>
          <View style={[styles.modalContent]}>
            <View style={[styles.header]}>
              <TouchableHighlight
                onPress={this.onDismiss}
                style={[styles.headerItem]}
                activeOpacity={props.actionTextActiveOpacity}
                underlayColor={props.actionTextUnderlayColor}
              >
                <Text style={[styles.actionText]}>{props.dismissText}</Text>
              </TouchableHighlight>
              <View style={[styles.headerItem]}>
                <Text style={[styles.title]}>{props.title}</Text>
              </View>
              <TouchableHighlight
                onPress={this.onOk}
                style={[styles.headerItem]}
                activeOpacity={props.actionTextActiveOpacity}
                underlayColor={props.actionTextUnderlayColor}
              >
                <Text style={[styles.actionText]}>{props.okText}</Text>
              </TouchableHighlight>
            </View>
            {props.content}
          </View>
        </View>
      </Modal>
    );
  },

  render() {
    return this.getRender();
  },
});

export default PopupPicker;
