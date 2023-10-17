/* eslint-disable @typescript-eslint/no-shadow */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Text, ImageBackground, StyleSheet, Button, Alert} from 'react-native';

const App = () => {
  function handleClick() {
    Alert('Button Clicked!');
  }

  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/5077039/pexels-photo-5077039.jpeg?auto=compress&cs=tinysrgb&w=600',
      }}
      style={styles.background}
      resizeMode="cover">
      <Text style={styles.text}>Welcome</Text>

      <Button title="Click me" onPress={handleClick} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'yellow',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
