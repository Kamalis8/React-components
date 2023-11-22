import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  StyleSheet,
  Appearance,
} from 'react-native';
import Strings from '../utils.js/String';
import Appconstantcolor from '../assets/Appconstantcolor';

const CustomTextinput = ({nav}) => {
  console.log('asd', nav);
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setColorScheme(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const handleEmailChange = text => {
    setEmail(text);
    console.log('set===>', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text));

    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text));
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleValidation = () => { 
    nav.navigate('Home');
    console.log(isValidEmail)
    //arunkumar@gmail.com
    if (!isValidEmail) {
      setValidationMessage('Please enter a valid email address');
      setModalVisible(true)
    } else if (password.length < 6) {
      setModalVisible(true)
      setValidationMessage('Password must be at least 6 characters');
    } else {
      nav.navigate('Home');
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setValidationMessage('');
  };

  return (
    <>
      <View
        style={[
          styles.textcontainer,
          {
            backgroundColor:
              colorScheme === 'dark'
                ? Appconstantcolor.black1
                : Appconstantcolor.White,
          },
        ]}>
        <TextInput
          style={[
            styles.input,
            {
              borderBottomColor:
                colorScheme === 'dark'
                  ? Appconstantcolor.gray2
                  : Appconstantcolor.gray6,
              color:
                colorScheme === 'dark'
                  ? Appconstantcolor.gray7
                  : Appconstantcolor.black1,
            },
            email.length > 0 &&
              !isValidEmail && {
                color:
                  colorScheme === 'dark'
                    ? Appconstantcolor.White
                    : Appconstantcolor.black1,
              },
          ]}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={
            colorScheme === 'dark'
              ? Appconstantcolor.gray5
              : Appconstantcolor.gray1
          }
          onChangeText={handleEmailChange}
          value={email}
        />
        {/* <View style={styles.passwordContainer}> */}
        <TextInput
          style={[
            styles.input,
            {
              color:
                colorScheme === 'dark'
                  ? Appconstantcolor.gray7
                  : Appconstantcolor.black1,
            },
            password.length > 0 &&
              password.length < 6 && {
                color:
                  colorScheme === 'dark'
                    ? Appconstantcolor.White
                    : Appconstantcolor.black1,
              },
          ]}
          placeholder="Password"
          placeholderTextColor={
            colorScheme === 'dark'
              ? Appconstantcolor.gray5
              : Appconstantcolor.gray1
          }
          onChangeText={handlePasswordChange}
          value={password}
        />
        {/* <TouchableOpacity>
            <Text style={styles.forgetPasswordText}>Forget?</Text>
          </TouchableOpacity> */}
      </View>
      {/* </View> */}
      <View
        style={{
          flex: 1,
          backgroundColor:
            colorScheme === 'dark'
              ? Appconstantcolor.black1
              : Appconstantcolor.White,
        }}>
        <View
          style={[
            styles.buttoncontainer,
            {
              backgroundColor:
                colorScheme === 'dark'
                  ? Appconstantcolor.black1
                  : Appconstantcolor.White,
            },
          ]}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  colorScheme === 'dark'
                    ? Appconstantcolor.gray8
                    : Appconstantcolor.black1,
              },
            ]}
            onPress={handleValidation}>
            <Text style={styles.buttonText}>{Strings.Text4}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{validationMessage}</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  textcontainer: {
    padding: 16,
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
  button: {
    backgroundColor: '#000113',
    padding: 10,
    borderRadius: 5,
    width: 360,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 300,
  },
  modalText: {
    fontSize: 14,
    marginBottom: 20,
    color: Appconstantcolor.black1,
  },
  forgetPasswordText: {
    color: '#007BFF',
    fontSize: 16,
    marginTop: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    borderWidth: 1,
    borderBottomColor: Appconstantcolor.gray6,
  },
});

export default CustomTextinput;
