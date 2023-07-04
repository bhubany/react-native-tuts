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
  //Need to call constructor
  constructor() {
    super();
    this.state = {
      name: 'ABCD',
    };
  }

  updateNname(val: string) {
    this.setState({name: val});
  }
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
            <TextInput
              placeholder="Enter Your Name"
              onChangeText={text => this.updateNname(text)}
            />
            <Button title="Press Me" />
          </View>
          <Student name={this.state.name} />
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
