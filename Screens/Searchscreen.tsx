import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Searchscreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
      <Icon name="search" size={30} color="black" />
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
export default Searchscreen;
