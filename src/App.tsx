import React from 'react';
import {ScrollView, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 30,
            display: 'flex',
            textAlign: 'center',
            paddingTop: 10,
            fontWeight: 'bold',
          }}>
          Hello From React Native
        </Text>
      </View>
    </ScrollView>
  );
}

export default App;
