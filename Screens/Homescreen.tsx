import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Homescreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Detail Screen"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default Homescreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  button: {}
});