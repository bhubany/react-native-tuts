import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  const users = [
    {
      id: 1,
      name: 'abc',
      email: 'abc@gmail.com',
    },
    {
      id: 2,
      name: 'def',
      email: 'def@gmail.com',
    },
    {
      id: 3,
      name: 'ghi',
      email: 'ghi@gmail.com',
    },
    {
      id: 4,
      name: 'jkl',
      email: 'jkl@gmail.com',
    },
    {
      id: 5,
      name: 'mno',
      email: 'mno@gmail.com',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Hello From React Native</Text>
      </View>
      <ScrollView>
        <FlatList
          data={users}
          renderItem={({item}) => <UserData item={item} />}
        />
      </ScrollView>
    </View>
  );
}

const UserData = props => {
  const item = props.item;
  return (
    <View key={item.id} style={styles.box}>
      <Text style={styles.item}> {item.name}</Text>
      <Text style={styles.item}> {item.email}</Text>
    </View>
  );
};

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
  item: {
    fontSize: 24,
    color: 'orange',
    flex: 1,
    margin: 2,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,
  },
});
