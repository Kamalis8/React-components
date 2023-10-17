/* eslint-disable @typescript-eslint/no-shadow */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {View, Switch, Text, StyleSheet, StatusBar} from 'react-native';

const App = () => {
  StatusBar.setHidden(true);

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <Text style={styles.text}>Airplane Mode:</Text>
      <Switch
        trackColor={{false: 'grey', true: 'green'}}
        thumbColor={isEnabled ? 'white' : 'grey'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontsize: 30,
    fontweight: 'bold',
  },
  statusbar: {
    backgroundColor: 'yellow',
  },
});
export default App;
