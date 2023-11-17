/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * https://github.com/facebook/react-native
 *
 * @format
 */

// App.js

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  IMAGEFACEBOOK,
  IMAGEGOOGLE,
  IMAGENAME,
} from './android/app/src/assests/image';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    // <View style={styles.container}>
    //   <Text>Login</Text>
    <View style={{flex: 1}}>
      <Image style={styles.image} source={IMAGENAME} />
      <View style={styles.text3con}>
        <Text style={styles.text3}>Login</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="black"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          onChangeText={setPassword}
          value={password}
        />
        <View style={styles.buttoncontainer}>
          <Button
            style={styles.butonlog}
            title="Log in"
            onPress={handleLogin}
          />
        </View>
        <Text>or continue with</Text>
        <View style={styles.icon}>
          <View style={styles.imagecon}>
            <Image style={styles.imageicon} source={IMAGEGOOGLE} />
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.text}>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imagecon}>
            <Image style={styles.imageicon} source={IMAGEFACEBOOK} />
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.text}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containertext}>
          <Text style={styles.text1}>Don't have account?</Text>
          <TouchableOpacity>
            <Text style={styles.text2}>Create now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingtop: 20,
    backgroundColor: 'white',
  },
  input: {
    height: 50,
    width: 150,
    borderBottomColor: 'gray',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderTopColor: 'white',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: 'black',
    fontSize: 20,
  },
  button: {
    height: 40,
    width: 200,
  },
  buttoncontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  imageicon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  imagecon: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F1F5F9',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  text: {
    alignItems: 'center',
    color: '#475569',
  },
  text1: {
    color: '#828282',
  },
  text2: {
    color: '#000113',
  },
  containertext: {
    flexDirection: 'row',
    margin: 8,
  },
  text3: {
    color: '#1E293B',
    fontWeight: '800',
    alignItems: 'center',
    fontSize: 26,
  },
  text3con: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  butonlog:{
    paddingHorizontal: 20,  }
});
export default App;
