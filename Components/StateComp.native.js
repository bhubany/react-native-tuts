import React from 'react';
import {Button, Text, View} from 'react-native';

// Using states inside class components

class StateComp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 'Some Initial Data',
    };
  }

  updateState() {
    this.setState({data: 'From Function App'});
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 50}}> {this.state.data}</Text>

        {/* Updating Directly */}
        <Button
          title="Update State"
          onPress={() => {
            this.setState({data: 'Second App Data'});
          }}
        />

        {/* Update Using function */}

        <Button
          title="Update Using Function"
          onPress={() => {
            this.updateState();
          }}
        />
      </View>
    );
  }
}

export default StateComp;
