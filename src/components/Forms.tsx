import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Forms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const [hidePwd, setHidePwd] = useState(true);
  return (
    <View>
      <View>
        <Text style={{fontSize: 20, fontWeight: '700', margin: 'auto'}}>
          My Custom Forms
        </Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Enter User Name"
        onChangeText={text => {
          setName(text);
        }}
        value={name}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter User Email"
        onChangeText={text => {
          setEmail(text);
        }}
        value={email}
      />
      <View style={styles.pwdContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter User Password"
          secureTextEntry={hidePwd}
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
        />
        <Button title="show/Hide" onPress={() => setHidePwd(!hidePwd)} />
      </View>
      <View style={styles.btnContainer}>
        <Button
          color={'red'}
          title="clear Value"
          onPress={() => setDisplay(false)}
        />
        <Button
          color={'green'}
          title="print Value"
          onPress={() => setDisplay(true)}
        />
      </View>
      {display && (
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>{`User Name: ${name}`} </Text>
          <Text style={styles.valueText}>{`User Email: ${email}`} </Text>
          <Text style={styles.valueText}>{`User Password: ${password}`} </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
  pwdContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    gap: 10,
  },
  valueContainer: {
    margin: 10,
    borderColor: 'orange',
    borderWidth: 2,
    minHeight: 300,
    padding: 10,
  },
  valueText: {
    fontSize: 20,
  },
});
