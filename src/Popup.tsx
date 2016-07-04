import {Modal, View, TouchableHighlight, Text} from 'react-native';
import * as React from 'react';
import {PopupPickerProps, PopupPickerState} from './PopupPickerTypes';
import reactMixin from 'react-mixin';
import PopupMixin from './PopupMixin';

export interface PopupPickerPropsIOS extends PopupPickerProps {
  style?:any;
  styles?:any;
  actionTextUnderlayColor?:string;
  actionTextActiveOpacity?:number;
}

export default class PopupPicker extends React.Component<PopupPickerPropsIOS, PopupPickerState> {
  static defaultProps = {
    actionTextUnderlayColor: '#a9d9d4',
    actionTextActiveOpacity: 0.5,
    triggerType: 'onPress',
    styles: {},
    WrapComponent: View,
  };

  onDismiss:() => void;

  onOk:() => void;

  getModal() {
    if (!this.state.visible) {
      return null;
    }
    const {props} = this;
    const {styles} = props;
    return (<Modal visible transparent animationType="slide">
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
    </Modal>);
  }
}

reactMixin.onClass(PopupPicker, PopupMixin);
