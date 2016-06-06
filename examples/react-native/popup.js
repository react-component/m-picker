import React, { View, TouchableHighlight, AppRegistry, StyleSheet, Text } from 'react-native';
import Popup from 'rmc-picker/src/Popup';
import PopupStyles from 'rmc-picker/src/PopupStyles';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 4,
    width: 100,
  },
  root: {
    paddingTop: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    padding: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const PopupExample = React.createClass({
  render() {
    const popupContent = (<View style={styles.content}><Text>
      popupContent
    </Text></View>);

    return (<Popup
      styles={PopupStyles}
      style={styles.root}
      title="show popup"
      content={popupContent}
    >
      <TouchableHighlight activeOpacity={0.5} style={[styles.button]} underlayColor="#a9d9d4">
        <Text>show popup</Text>
      </TouchableHighlight>
    </Popup>);
  },
});

AppRegistry.registerComponent('popup', () => PopupExample);
