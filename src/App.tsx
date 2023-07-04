import React, {Component} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Student from './components/student';

class App extends Component {
  fruit = () => {
    console.warn('Apple');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text>Hello From React Native</Text>
        </View>
        <ScrollView>
          <Text>This is Parent class Component</Text>
          <View>
            <TextInput placeholder="Enter Your Name" />
            <Button title="Press Me" onPress={this.fruit} />
          </View>
          <Student />
        </ScrollView>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    borderColor: 'green',
    borderWidth: 5,
    margin: 5,
    padding: 5,
    height: 'auto',
    width: 'auto',
  },
  subContainer: {
    fontSize: 30,
    display: 'flex',
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
    borderColor: 'green',
  },
});
