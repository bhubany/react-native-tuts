import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';

class StackNavigation extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> From Stack Navigator Home </Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Profile');
          }}
          title={'Go to Profile'}
        />
      </View>
    );
  }
}

function Profile(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> From Profile Screen </Text>
      <Button
        onPress={() => {
          props.navigation.navigate('About');
        }}
        title={'Go to About'}
      />
    </View>
  );
}

function About(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> From About Screen </Text>
      <Button
        onPress={() => {
          props.navigation.navigate('Home');
        }}
        title={'Go to Home'}
      />
    </View>
  );
}

const appNavigator = createStackNavigator({
  Home: {
    screen: StackNavigation,
  },
  Profile: {
    screen: Profile,
  },
  About: {
    screen: About,
  },
});

export default createAppContainer(appNavigator);
