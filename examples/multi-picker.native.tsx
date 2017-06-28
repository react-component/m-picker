/* tslint:disable:no-console */
import MultiPicker from '../src/MultiPicker';
import Picker from '../src/Picker';
import React from 'react';
import { View } from 'react-native';

export class Test extends React.Component<any, any> {
  state = {
    value: ['1', '11'],
  };

  onChange = (value) => {
    console.log('onChange', value);
    this.setState({
      value,
    });
  }

  render() {
    return (
      <View style={{ borderWidth: 2, padding: 10 }}>
        <MultiPicker
          style={{
            flexDirection: 'row' as any,
            alignItems: 'center' as any,
            paddingTop: 10,
            paddingBottom: 10,
          }}
          selectedValue={this.state.value}
          onValueChange={this.onChange}
        >
          <Picker style={{ flex: 1 }}>
            <Picker.Item value="1">one</Picker.Item>
            <Picker.Item value="2">two</Picker.Item>
            <Picker.Item value="3">three</Picker.Item>
            <Picker.Item value="4">four</Picker.Item>
            <Picker.Item value="5">five</Picker.Item>
            <Picker.Item value="6">six</Picker.Item>
            <Picker.Item value="7">seven</Picker.Item>
            <Picker.Item value="8">eight</Picker.Item>
          </Picker>
          <Picker style={{ flex: 1 }}>
            <Picker.Item value="11">eleven</Picker.Item>
            <Picker.Item value="12">twelve</Picker.Item>
            <Picker.Item value="13">thirteen</Picker.Item>
            <Picker.Item value="14">fourteen</Picker.Item>
            <Picker.Item value="15">fifteen</Picker.Item>
            <Picker.Item value="16">sixteen</Picker.Item>
            <Picker.Item value="17">seventeen</Picker.Item>
            <Picker.Item value="18">eighteen</Picker.Item>
          </Picker>
        </MultiPicker>
      </View>
    );
  }
}

export const Demo = Test;
export const title = 'multi-picker';
