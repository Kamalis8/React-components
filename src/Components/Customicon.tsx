import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Appearance,
  TouchableOpacity,
  Image,
} from 'react-native';
import {IMAGEFACEBOOK, IMAGEGOOGLE} from '../assets/image';
import Appconstantcolor from '../assets/Appconstantcolor';

const Customicon = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setColorScheme(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.icon}>
      <View
        style={[
          styles.imagecon,
          {
            backgroundColor:
              colorScheme === 'dark'
                ? Appconstantcolor.black1
                : Appconstantcolor.gray9,
            borderColor:
              colorScheme === 'dark'
                ? Appconstantcolor.gray8
                : Appconstantcolor.gray9,
          },
        ]}>
        <Image
          style={[
            styles.imageicon,
            {
              backgroundColor:
                colorScheme === 'dark'
                  ? Appconstantcolor.black1
                  : Appconstantcolor.White,
            },
          ]}
          source={IMAGEGOOGLE}
        />
        <TouchableOpacity>
          <Text
            style={[
              styles.text,
              {
                color:
                  colorScheme === 'dark'
                    ? Appconstantcolor.gray5
                    : Appconstantcolor.gray2,
              },
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
              colorScheme === 'dark'
                ? Appconstantcolor.black1
                : Appconstantcolor.gray9,
            borderColor:
              colorScheme === 'dark'
                ? Appconstantcolor.gray8
                : Appconstantcolor.gray9,
          },
        ]}>
        <Image style={styles.imageicon} source={IMAGEFACEBOOK} />
        <TouchableOpacity>
          <Text
            style={[
              styles.text,
              {
                color:
                  colorScheme === 'dark'
                    ? Appconstantcolor.gray5
                    : Appconstantcolor.gray2,
              },
            ]}>
            Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
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
    borderRadius: 2,
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
});

export default Customicon;
