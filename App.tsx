/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * https://github.com/facebook/react-native
 *
 * @format
 */

// App.js

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Appearance,
  Alert,
} from 'react-native';
import {
  IMAGEDARKFRAME,
  IMAGEFACEBOOK,
  IMAGEGOOGLE,
  IMAGENAME,
} from './src/assets/image';

const App = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setColorScheme(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = text => {
    setEmail(text);
  };
  const handlePasswordChange = text => {
    setPassword(text);
  };

  const imageSource = colorScheme === 'dark' ? IMAGEDARKFRAME : IMAGENAME;
  const handleValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      if (password.length >= 6) {
        Alert.alert('Success', 'Email and password are valid');
      } else {
        Alert.alert('Error', 'Password must be at least 6 characters');
      }
    } else {
      Alert.alert('Error', 'Please enter a valid email address');
    }
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: colorScheme === 'dark' ? '#000113' : '#FFFFFF',
        }}>
        <Image style={styles.image} source={imageSource} />
        <View style={styles.overlay}>
          <Text
            style={[
              styles.text3,
              {color: colorScheme === 'dark' ? '#FFFFFF' : '#1E293B'},
            ]}>
            Login
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View
          style={[
            styles.textcontainer,
            {backgroundColor: colorScheme === 'dark' ? '#000113' : '#FFFFFF'},
          ]}>
          <TextInput
            style={[
              styles.input,
              {
                borderBottomColor:
                  colorScheme === 'dark' ? '#64748B' : '#CBD5E1',
                color: colorScheme === 'dark' ? '#CCCCCC' : '#000113',
              },
            ]}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor={
              colorScheme === 'dark' ? '#94A3B8' : '#475569'
            }
            onChangeText={handleEmailChange}
            value={email}
          />
          <View style={styles.password}>
            <TextInput
              style={[
                styles.input,
                {
                  borderBottomColor:
                    colorScheme === 'dark' ? '#64748B' : '#CBD5E1',
                },
              ]}
              placeholder="Passsword"
              placeholderTextColor={
                colorScheme === 'dark' ? '#94A3B8' : '#475569'
              }
              onChangeText={handlePasswordChange}
              value={password}
            />
            <TouchableOpacity style={styles.forget}>
              <Text
                style={[
                  styles.text5,
                  {color: colorScheme === 'dark' ? '#FFFFFF' : '#000113'},
                ]}>
                Forgot?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? '#000113' : '#FFFFFF',
          }}>
          <View
            style={[
              styles.buttoncontainer,
              {
                backgroundColor: colorScheme === 'dark' ? '#000113' : '#FFFFFF',
              },
            ]}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor:
                    colorScheme === 'dark' ? '#334155' : '#000113',
                },
              ]}
              onPress={handleValidation}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.container,
              {backgroundColor: colorScheme === 'dark' ? '#000113' : '#FFFFFF'},
            ]}>
            <View style={styles.textcontinue}>
              <Text
                style={[
                  styles.text6,
                  {color: colorScheme === 'dark' ? '#94A3B8' : '#64748B'},
                ]}>
                Or continue with
              </Text>
            </View>
            <View style={styles.icon}>
              <View
                style={[
                  styles.imagecon,
                  {
                    backgroundColor:
                      colorScheme === 'dark' ? '#000113' : '#F1F5F9',
                    borderColor: colorScheme === 'dark' ? '#334155' : '#F1F5F9',
                  },
                ]}>
                <Image
                  style={[
                    styles.imageicon,
                    {
                      backgroundColor:
                        colorScheme === 'dark' ? '#000113' : '#FFFFFF',
                    },
                  ]}
                  source={IMAGEGOOGLE}
                />
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.text,
                      {color: colorScheme === 'dark' ? '#94A3B8' : '#64748B'},
                    ]}>
                    Google
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.imagecon,
                  {
                    backgroundColor:
                      colorScheme === 'dark' ? '#000113' : '#F1F5F9',
                    borderColor: colorScheme === 'dark' ? '#334155' : '#F1F5F9',
                  },
                ]}>
                <Image style={styles.imageicon} source={IMAGEFACEBOOK} />
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.text,
                      {color: colorScheme === 'dark' ? '#94A3B8' : '#64748B'},
                    ]}>
                    Facebook
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.containertext}>
              <Text
                style={[
                  styles.text1,
                  {color: colorScheme === 'dark' ? '#94A3B8' : '#64748B'},
                ]}>
                Don’t have account?
              </Text>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.text2,
                    {color: colorScheme === 'dark' ? '#FFFFFF' : '#000113'},
                  ]}>
                  Create now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    marginRight: 20,
  },
  text3: {
    fontWeight: '800',
    fontSize: 32,
  },
  container: {
    justifyContent: 'flex-start',
    marginTop: 15,
    backgroundColor: 'white',
  },
  input: {
    height: 50,
    width: '100%',
    borderBottomColor: '#CBD5E1',
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: 'black',
    fontSize: 16,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  buttoncontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageicon: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  imagecon: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#334155',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
    marginTop: 15,
  },
  text: {
    alignItems: 'center',
    color: '#475569',
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
  text1: {
    color: '#828282',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
  },
  text2: {
    fontWeight: '400',
    fontSize: 14,

    lineHeight: 16,
  },
  containertext: {
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  text3con: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#000113',
    padding: 10,
    borderRadius: 5,
    width: 360,
  },
  textcontainer: {
    padding: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  textcontinue: {
    marginTop: 24,
    alignItems: 'center',
  },
  text4: {
    alignItems: 'center',
  },
  password: {
    flexDirection: 'row',
  },
  forget: {
    position: 'absolute',
    right: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 16,
  },
  text5: {
    fontSize: 14,
    fontWeight: '500',
    height: 20,
  },
  text6: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
});
export default App;
