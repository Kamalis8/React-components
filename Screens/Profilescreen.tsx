import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profilescreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen </Text>
    </View>
  );
};

export default Profilescreen;
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
