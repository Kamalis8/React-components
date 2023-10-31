import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Postscreen = () => {
  return (
    <View style={styles.container}>
      <Text>Post Screen</Text>
      <Icon name="pencil" size={30} color="black" />
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

export default Postscreen;
