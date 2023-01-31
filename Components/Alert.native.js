import React from 'react';
import {Button, View} from 'react-native';

/* 
Writing Function inside functional components
*/

export default function Alert() {
  const press = () => {
    alert('You Pressed Me!');
  };
  return (
    <View>
      <Button title="Press Me!" onPress={press} />
    </View>
  );
}
