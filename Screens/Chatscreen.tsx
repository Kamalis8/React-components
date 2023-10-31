import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Chatscreen = () => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
      <Icon name="comments" size={30} color="black" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Chatscreen;
