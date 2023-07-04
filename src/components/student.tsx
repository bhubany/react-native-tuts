import {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

class Student extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text>Hello From React Native</Text>
        </View>
        <ScrollView>
          <Text>This is Sub Class Component for student</Text>
        </ScrollView>
      </View>
    );
  }
}

export default Student;

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
