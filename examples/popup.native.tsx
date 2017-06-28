import { View, TouchableHighlight, StyleSheet, Text, ScrollView } from 'react-native';
import Popup from '../src/Popup';
import PopupStyles from '../src/PopupStyles';
import React from 'react';

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
    justifyContent: 'center' as any,
    alignItems: 'center' as any,
  },
});

export class PopupExample extends React.Component<{}, {}> {
  render() {
    const popupContent = (<View style={styles.content}><Text>
      popupContent
    </Text></View>);

    return (<ScrollView style={{ flex: 1 }}>
      <View style={{ height: 200 }}/>
      <Popup
        styles={PopupStyles}
        style={styles.root}
        title={'title'}
        content={popupContent}
      >
        <TouchableHighlight activeOpacity={0.5} style={[styles.button]} underlayColor="#a9d9d4">
          <Text>show popup</Text>
        </TouchableHighlight>
      </Popup>
      <View style={{ height: 800 }}/>
    </ScrollView>);
  }
}

export const Demo = PopupExample;
export const title = 'popup';
