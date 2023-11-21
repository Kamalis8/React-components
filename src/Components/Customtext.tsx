import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Appearance} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Strings from '../utils.js/String';
import Appconstantcolor from '../assets/Appconstantcolor';

const Customtext = () => {
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
    <View
      style={[
        {
          backgroundColor:
            colorScheme === 'dark'
              ? Appconstantcolor.black1
              : Appconstantcolor.White,
        },
      ]}>
      <View style={styles.textcontinue}>
        <Text
          style={[
            styles.text6,
            {
              color:
                colorScheme === 'dark'
                  ? Appconstantcolor.gray5
                  : Appconstantcolor.gray2,
            },
          ]}>
          {Strings.Text5}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textcontinue: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },

  text6: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
});
export default Customtext;
