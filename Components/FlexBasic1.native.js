import React from 'react';
import {View} from 'react-native';

export default function FlexBasic1() {
  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <View style={{height: 125, width: 125, backgroundColor: 'red'}}></View>
      <View style={{height: 125, width: 125, backgroundColor: 'black'}}></View>
      <View style={{height: 125, width: 125, backgroundColor: 'orange'}}></View>
      <View style={{height: 125, width: 125, backgroundColor: 'blue'}}></View>
    </View>
  );
}
