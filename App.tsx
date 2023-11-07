/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Homescreen from './Screens/Homescreen';
import Calendarscreen from './Screens/Calendarscreen';
import Postscreen from './Screens/Postscreen';
import Notificationscreen from './Screens/Notificationscreen';
import Settingsscreen from './Screens/Settingsscreen';
import {Image, StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();
const HomeTabIcon = () => (
  <Image
    style={styles.image}
    source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKwlE0UqKBdzgFaLuJ0Uj23GKOADQSf6pduJ9qzIpTfJgVEQdOvT4KbiVwNbHNzUY6sg&usqp=CAU',
    }}
  />
);
const CalendarTabIcon = () => (
  <Image
    style={styles.image}
    source={{
      uri: 'data:image/png;base64,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',
    }}
  />
);
const PostTabIcon = () => (
  <View style={styles.container}>
    <Image
      style={styles.post}
      source={{
        uri: 'https://th.bing.com/th/id/OIP.1xFa9juu3hfcf83DkMpQswAAAA?pid=ImgDet&w=161&h=161&c=7',
      }}
    />
  </View>
);
const NotificationTabIcon = () => (
  <Image
    style={styles.image}
    source={{
      uri: 'https://icones.pro/wp-content/uploads/2021/04/icone-cloche-notification-orange.png',
    }}
  />
);
const SettingsTabIcon = () => (
  <Image
    style={styles.image}
    source={{
      uri: 'data:image/png;base64,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',
    }}
  />
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Homescreen}
          options={{
            title: 'Home',
            tabBarIcon: ({focused}) => {
              return focused ? <HomeTabIcon /> : <></>;
            },
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendarscreen}
          options={{
            title: 'Calendar',
            tabBarIcon: ({focused}) => {
              return focused ? <CalendarTabIcon /> : <></>;
            },
          }}
        />
        <Tab.Screen
          name="Post"
          component={Postscreen}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? <PostTabIcon /> : <></>;
            },
          }}
        />
        <Tab.Screen
          name="Notifi"
          component={Notificationscreen}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? <NotificationTabIcon /> : <></>;
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settingsscreen}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? <SettingsTabIcon /> : <></>;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
  post: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  container: {
    paddingBottom: 30,
  },
});

export default App;
function useState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}
