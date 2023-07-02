import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Forms from './components/Forms';

function App(): JSX.Element {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 30,
            display: 'flex',
            textAlign: 'center',
            padding: 10,
            fontWeight: 'bold',
          }}>
          Hello From React Native
        </Text>
        <Forms />
      </View>
    </ScrollView>
  );
}

export default App;
