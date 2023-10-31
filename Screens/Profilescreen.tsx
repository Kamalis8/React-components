import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profilescreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Icon name="user" size={30} color="black" />
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

export default Profilescreen;
