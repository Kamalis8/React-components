import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Appearance} from 'react-native';
import Strings from '../utils.js/String';
import {IMAGEDARKFRAME, IMAGENAME} from '../assets/image';
import CustomTextinput from '../Components/CustomTextinput';
import Customtext from '../Components/Customtext';
import Customicon from '../Components/Customicon';
import Customtext2 from '../Components/Customtext2';
import Appconstantcolor from '../assets/Appconstantcolor';

const LoginScreen = ({navigation}) => {
    console.log("Login",navigation)
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setColorScheme(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);
  const imageSource = colorScheme === 'dark' ? IMAGEDARKFRAME : IMAGENAME;

  return (
    <>
      <View
        style={[
          {flex: 1},
          {
            backgroundColor:
              colorScheme === 'dark'
                ? Appconstantcolor.black1
                : Appconstantcolor.White,
          },
        ]}>
        <View
          style={{
            flex: 1,
            backgroundColor:
              colorScheme === 'dark'
                ? Appconstantcolor.black1
                : Appconstantcolor.White,
          }}>
          <Image style={styles.image} source={imageSource} />
          <View style={styles.overlay}>
            <Text
              style={[
                styles.text3,
                {
                  color:
                    colorScheme === 'dark'
                      ? Appconstantcolor.White
                      : Appconstantcolor.black2,
                },
              ]}>
              {Strings.Text1}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor:
              colorScheme === 'dark'
                ? Appconstantcolor.black1
                : Appconstantcolor.White,
          }}>
          <CustomTextinput nav={navigation} />

          <Customtext />

          <Customicon />
          <Customtext2 />
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
export default LoginScreen;
