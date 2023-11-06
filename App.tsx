/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Homescreen from './Screens/Homescreen';
import Notificationscreen from './Screens/Notificationscreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Homescreen} />
        <Drawer.Screen name="Notifications" component={Notificationscreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
