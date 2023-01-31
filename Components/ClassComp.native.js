import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class ClassComp extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 60}}>From Class Component</Text>
        <Button
          title="Press Me !"
          onPress={() => {
            alert('You Just pressed Me!');
          }}
        />
      </View>
    );
  }
}

export default ClassComp;
