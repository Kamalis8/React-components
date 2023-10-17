/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <View>
      <Pressable onPress={toggleDropdown}>
        <Text style={styles.text}>
          {isOpen ? 'Close Dropdown' : 'Open Dropdown'}
        </Text>
      </Pressable>
      {isOpen && (
        <View style={styles.textclose}>
          <Text>close</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },

  textclose: {
    backgroundColor: 'lightgray',
    padding: 10,
  },
});

export default Dropdown;
