import React, {Component, Modal, View, TouchableHighlight, Text} from 'react-native';
import { PopupPickerProps, PopupPickerState } from './PopupPickerTypes';

function noop() {
}

export interface PopupPickerPropsIOS extends PopupPickerProps {
  style?:any;
  styles?:any;
  actionTextUnderlayColor?:string;
  actionTextActiveOpacity?:number;
}

export default class PopupPicker extends Component<PopupPickerPropsIOS, PopupPickerState> {
  static defaultProps = {
    onVisibleChange: noop,
    okText: 'Ok',
    dismissText: 'Dismiss',
    title: '',
    actionTextUnderlayColor: '#a9d9d4',
    actionTextActiveOpacity: 0.5,
    styles: {},
    onOk: noop,
    onDismiss: noop,
  };

  constructor(props:PopupPickerProps) {
    super(props);
    this.state = {
      visible: props.visible || false,
    };
  }

  componentWillReceiveProps(nextProps:PopupPickerProps) {
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
    }
  }

  onOk = () => {
    this.props.onOk();
    this.fireVisibleChange(false);
  };

  onDismiss = () => {
    this.props.onDismiss();
    this.fireVisibleChange(false);
  };

  onTriggerClick = (e) => {
    const child = React.Children.only(this.props.children);
    const childProps = child.props || {};
    if (childProps.onPress) {
      childProps.onPress(e);
    }
    this.fireVisibleChange(!this.state.visible);
  };

  setVisibleState(visible) {
    this.setState({
      visible,
    });
  }

  getModal() {
    if (!this.state.visible) {
      return null;
    }
    const {props} = this;
    const {styles} = props;
    return (<Modal visible transparent animated animationType="slide">
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

  fireVisibleChange(visible) {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
      this.props.onVisibleChange(visible);
    }
  }

  render() {
    const props = this.props;
    const children = props.children;
    if (!children) {
      return null;
    }
    const child = React.Children.only(children);
    const newChildProps = {
      onPress: this.onTriggerClick,
    };
    return (<View style={props.style}>
      {React.cloneElement(child, newChildProps)}
      {this.getModal()}
    </View>);
  }
}
