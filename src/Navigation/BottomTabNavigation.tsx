import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import AboutScreen from '../Screens/AboutScreen';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon
              name="home"
              // type="ionicon"
              color="red"
              size={34}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
