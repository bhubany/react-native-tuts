import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  const items = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Makinng Dynamic Grid</Text>
      </View>
      <ScrollView>
        <View>
          <Text>Making Static Grid</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text style={styles.item}>Item 1</Text>
          <Text style={styles.item}>Item 2</Text>
          <Text style={styles.item}>Item 3</Text>
          <Text style={styles.item}>Item 4</Text>
          <Text style={styles.item}>Item 5</Text>
          <Text style={styles.item}>Item 6</Text>
          <Text style={styles.item}>Item 7</Text>
          <Text style={styles.item}>Item 8</Text>
          <Text style={styles.item}>Item 9</Text>
          <Text style={styles.item}>Item 10</Text>
        </View>

        <View>
          <Text>Dynamic Grid</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {items.map(item => (
            <Text style={styles.item} key={item.id}>
              Item {item.id}
            </Text>
          ))}
        </View>
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
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: '#fff',
    margin: 5,
    padding: 5,
  },
});
