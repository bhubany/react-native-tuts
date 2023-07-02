import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  const users = [
    {
      id: 1,
      name: 'ABC',
    },
    {
      id: 2,
      name: 'DEF',
    },
    {
      id: 3,
      name: 'GHI',
    },
    {
      id: 4,
      name: 'JKL',
    },
  ];

  return (
    <ScrollView>
      <View>
        <Text style={styles.container}>
          Lists and Flast Lists In react Native
        </Text>
      </View>
      <Text> Displaying List</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles.item}> {item.name}</Text>}
      />
    </ScrollView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    display: 'flex',
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 24,
    padding: 10,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
});
