import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

/**
 * Handling Text Input
 * Use event with TextInput
 *Getting Value If TextInput
 * Get Value on button Click
 * Style Text Input
 */

class TextInputComp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 40}}>Input Value: {this.state.name}</Text>
        <TextInput
          placeholder="Enter Your Name"
          style={{
            borderColor: 'red',
            borderWidth: 2,
            borderRadius: 10,
            padding: 10,
          }}
          onChangeText={e => {
            this.setState({name: e});
          }}
        />
        <Button
          title="Alert Input"
          onPress={() => {
            alert(this.state.name);
          }}
        />
      </View>
    );
  }
}

export default TextInputComp;
