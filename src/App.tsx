import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  const users = [
    {
      id: 1,
      name: 'abcd',
    },
    {
      id: 2,
      name: 'efgh',
    },
    {
      id: 3,
      name: 'ijkl',
    },
    {
      id: 4,
      name: 'mnop',
    },
    {
      id: 5,
      name: 'qrst',
    },
    {
      id: 6,
      name: 'abcd',
    },
    {
      id: 7,
      name: 'efgh',
    },
    {
      id: 8,
      name: 'ijkl',
    },
    {
      id: 9,
      name: 'mnop',
    },
    {
      id: 10,
      name: 'qrst',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Hello From React Native</Text>
      </View>
      <View style={{margin: 10, display: 'flex', gap: 5}}>
        <Text style={{color: 'red'}}>
          Description : List need Scrool view as it might have elements greater
          than particular screen size.
        </Text>
        <Text> We can also set header and footer in flat list</Text>
        <Text>
          * If memory is less in mobile and we have to render long list then it
          might got hangs that's why we need flat lists.
        </Text>
        <Text>Inn flat list we can also implement lazy loading for items</Text>
      </View>
      <ScrollView style={{marginBottom: 50}}>
        {users.map(item => (
          <Text style={styles.textWrapper} key={item.id}>
            User Name: {item.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
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
  textWrapper: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    backgroundColor: 'blue',
  },
});
