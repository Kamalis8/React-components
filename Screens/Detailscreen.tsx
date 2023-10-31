import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Detailscreen = () => {
  return (
    <View>
      <Text style={styles.text}>click here for more details </Text>
    </View>
  );
};

export default Detailscreen;
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
});
