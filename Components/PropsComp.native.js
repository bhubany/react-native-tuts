import React from 'react';
import {Text, View} from 'react-native';

// Implementation of Props

export default function PropsComp(props) {
  console.warn(props);
  return (
    <View>
      <Text>From Props</Text>
      <Text>Data: {props.data}</Text>
    </View>
  );
}
