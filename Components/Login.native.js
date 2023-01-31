import React from 'react';
import {View, Text, Button} from 'react-native';

/**
 * Creating separate Components
 */

export default function Login() {
  return (
    <View>
      <Text>From Login Page </Text>
      <Button
        title="Login"
        onPress={() => {
          alert('You Logined Sucessfully');
        }}
      />
    </View>
  );
}
