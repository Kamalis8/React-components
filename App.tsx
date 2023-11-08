/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * https://github.com/facebook/react-native
 *
 * @format
 */

// App.js

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DashboardScreen from './Home_screens/DashboardScreen';
import MessageScreen from './Home_screens/MessageScreen';
import ChatScreen from './Home_screens/ChatScreen';
import ChallengesScreen from './Home_screens/ChallengesScreen';
import ClassesScreen from './Home_screens/ClassesScreen';
import TimetableScreen from './Home_screens/TimetableScreen';
import NotificationsScreen from './Home_screens/NotificationsScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Message" component={MessageScreen} />
        <Drawer.Screen name="Chat" component={ChatScreen} />
        <Drawer.Screen name="Challenges" component={ChallengesScreen} />
        <Drawer.Screen name="Classes" component={ClassesScreen} />
        <Drawer.Screen name="Timetable" component={TimetableScreen} />
        <Drawer.Screen name="Notification" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
