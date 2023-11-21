import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Appearance,
  TouchableOpacity,
} from 'react-native';
import Appconstantcolor from '../assets/Appconstantcolor';

const Customtext2 = () => {
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
    <View style={styles.containertext}>
      <Text
        style={[
          styles.text1,
          {
            color:
              colorScheme === 'dark'
                ? Appconstantcolor.gray5
                : Appconstantcolor.gray2,
          },
        ]}>
        Don’t have account?
      </Text>
      <TouchableOpacity>
        <Text
          style={[
            styles.text2,
            {
              color:
                colorScheme === 'dark'
                  ? Appconstantcolor.White
                  : Appconstantcolor.black1,
            },
          ]}>
          Create now
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  containertext: {
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 34,
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
});
export default Customtext2;
