/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <View>
      <Pressable onPress={toggleDropdown}>
        <Text style={{fontSize: 20}}>
          {isOpen ? 'Close Dropdown' : 'Open Dropdown'}
        </Text>
      </Pressable>
      {isOpen && (
        <View style={{backgroundColor: 'lightgray', padding: 10}}>
          <Text>close</Text>
        </View>
      )}
    </View>
  );
};

export default Dropdown;
