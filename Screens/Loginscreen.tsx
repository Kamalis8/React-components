import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
const Loginscreen = props => {
  const [name, setname] = useState('');
  return (
    <View>
      <Text>To visit the app login with your name </Text>
      <TextInput
        placeholder="enter your name "
        onChangeText={text => setname(text)}></TextInput>
      <Button
        title="login"
        onPress={() =>
          props.navigation.navigate('Home', {
            name,
          })
        }
      />
    </View>
  );
};
export default Loginscreen;
