import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const Homescreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
});
export default Homescreen;

