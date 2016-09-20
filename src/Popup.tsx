import {
  View, TouchableHighlight, Text,
} from 'react-native';
import * as React from 'react';
import { PopupPickerProps, PopupPickerState } from './PopupPickerTypes';
import PopupMixin from './PopupMixin';
import Modal from 'rc-dialog/lib/Modal';

const PopupPicker = React.createClass<PopupPickerProps, PopupPickerState>({
  mixins: [PopupMixin],

  getDefaultProps() {
    return {
      actionTextUnderlayColor: '#a9d9d4',
      actionTextActiveOpacity: 0.5,
      triggerType: 'onPress',
      styles: {},
      WrapComponent: View,
    };
  },

  getModal() {
    const { props } = this;
    const { styles } = props;
    return (
      <Modal
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
      </Modal>
    );
  },

  render() {
    return this.getRender();
  },
});

export default PopupPicker;
