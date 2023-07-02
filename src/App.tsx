import React from 'react';
import {ScrollView, SectionList, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  const users = [
    {
      id: 1,
      name: 'Abcd',
      data: ['PHP', 'react.js', 'Angular'],
    },
    {
      id: 2,
      name: 'efgh',
      data: ['java', 'c', 'c++'],
    },
    {
      id: 3,
      name: 'ijk',
      data: ['html', 'css', 'javascript'],
    },
    {
      id: 4,
      name: 'lmn',
      data: ['l', 'm', 'n'],
    },
    {
      id: 5,
      name: 'opq',
      data: ['o', 'p', 'q'],
    },
    {
      id: 6,
      name: 'rst',
      data: ['R', 'S', 'T'],
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Hello From React Native</Text>
      </View>
      <ScrollView>
        <SectionList
          sections={users}
          renderItem={({item}) => (
            <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
          )}
          renderSectionHeader={({section: {name}}) => (
            <Text style={{fontSize: 25, color: 'red'}}> {name}</Text>
          )}
        />
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
});
