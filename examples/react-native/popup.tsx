import {View, TouchableHighlight, AppRegistry, StyleSheet, Text} from 'react-native';
import Popup from '../../src/Popup';
import PopupStyles from '../../src/PopupStyles';
import * as React from 'react';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
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

class PopupExample extends React.Component<{}, {}> {
  render() {
    const popupContent = (<View style={styles.content}><Text>
      popupContent
    </Text></View>);

    return (<Popup
      styles={PopupStyles}
      style={styles.root}
      title={'title'}
      content={popupContent}
    >
      <TouchableHighlight activeOpacity={0.5} style={[styles.button]} underlayColor="#a9d9d4">
        <Text>show popup</Text>
      </TouchableHighlight>
    </Popup>);
  }
}

AppRegistry.registerComponent('popup', () => PopupExample);
