/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Homescreen from './Screens/Homescreen';
import Profilescreen from './Screens/Profilescreen';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Profile" component={Profilescreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
