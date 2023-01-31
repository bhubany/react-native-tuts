import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Implementing different styles

export default function StyleComp() {
  return (
    <View>
      <Text style={{color: 'green', fontSize: 30}}>Simple inline Style</Text>
      <Text style={styles.colors}>Applying Single Style Sheet</Text>
      <Text style={[styles.colors, styles.fonts]}>
        Applying multiple styles from stylesheet
      </Text>
      <Text style={[styles.fonts, styles.others]}>
        Applying same style in multiple elements
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  colors: {
    color: 'red',
    backgroundColor: 'greenn',
  },
  fonts: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  others: {
    color: 'blue',
  },
});
