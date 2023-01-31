import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

/**
 * Form in React-native
 * Make constructor and define state
 * take Some inputs
 * Style little bit
 * Get the form values
 */

class FormComp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      address: '',
    };
  }

  submit() {
    console.warn('All Values', this.state);
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter name"
          style={styles.textBox}
          onChangeText={text => {
            this.setState({name: text});
          }}
        />

        <TextInput
          placeholder="Enter Password"
          style={styles.textBox}
          secureTextEntry={true}
          onChangeText={text => {
            this.setState({password: text});
          }}
        />

        <TextInput
          placeholder="Enter Address"
          style={styles.textBox}
          onChangeText={text => {
            this.setState({address: text});
          }}
        />

        <Button
          title="Submit"
          onPress={() => {
            this.submit();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBox: {
    borderColor: 'skyblue',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 25,
  },
});

export default FormComp;
