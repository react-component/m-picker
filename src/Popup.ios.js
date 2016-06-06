import React, { PropTypes, Modal, View, TouchableHighlight, Text } from 'react-native';

function noop() {

}

const PopupPicker = React.createClass({
  propTypes: {
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    onVisibleChange: PropTypes.func,
    children: PropTypes.element,
    styles: PropTypes.object,
    content: PropTypes.any,
    onDismiss: PropTypes.func,
    okText: PropTypes.string,
    dismissText: PropTypes.string,
    actionTextActiveOpacity: PropTypes.number,
    actionTextUnderlayColor: PropTypes.string,
  },
  getDefaultProps() {
    return {
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
  },
  getInitialState() {
    return {
      visible: this.props.visible || false,
    };
  },
  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
    }
  },
  onOk() {
    this.fireVisibleChange(false);
    this.props.onOk();
  },
  onDismiss() {
    this.fireVisibleChange(false);
    this.props.onDismiss();
  },
  onTriggerClick(e) {
    this.fireVisibleChange(!this.state.visible);
    const child = React.Children.only(this.props.children);
    const childProps = child.props || {};
    if (childProps.onPress) {
      childProps.onPress(e);
    }
  },
  setVisibleState(visible) {
    this.setState({
      visible,
    });
  },
  getModal() {
    if (!this.state.visible) {
      return null;
    }
    const { props } = this;
    const { styles } = props;
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
  },
  fireVisibleChange(visible) {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
      this.props.onVisibleChange(visible);
    }
  },
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
  },
});

export default PopupPicker;
