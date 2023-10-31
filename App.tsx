/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Profilescreen from './Screens/Profilescreen';
import Searchscreen from './Screens/Searchscreen';
import Postscreen from './Screens/Postscreen';
import Settingscreen from './Screens/Settingscreen';
import Chatscreen from './Screens/Chatscreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profilescreen} />
        <Tab.Screen name="Search" component={Searchscreen} />
        <Tab.Screen name="Post" component={Postscreen} />
        <Tab.Screen name="Chat" component={Chatscreen} />
        <Tab.Screen name="Settings" component={Settingscreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
