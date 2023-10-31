/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from './Screens/Homescreen';
import Detailscreen from './Screens/Detailscreen';
import Loginscreen from './Screens/Loginscreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Loginscreen}
          options={{
            title: 'login',
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 20,
            },
            headerTitleAlign: 'left',
          }}
        />

        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 20,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detailscreen}
          options={{
            title: 'Detail',
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 20,
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
