/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Homescreen from './Screens/Homescreen';
import Profilescreen from './Screens/Profilescreen';
import {NavigationContainer} from '@react-navigation/native';
import {Image} from 'react-native';

const Tab = createMaterialBottomTabNavigator();
const HomeTabIcon = () => (
  <Image
    style={{width: 20, height: 20}}
    source={{
      uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAYFBMVEX///8AAADGxsbZ2dkKCgq2trZYWFjg4OAXFxexsbH5+fns7Oz8/Pzx8fEqKioxMTHQ0NB+fn6SkpJdXV2ampo4ODiGhoZqamolJSVOTk6mpqZjY2NAQEAcHBxwcHC8vLwkspY1AAADhElEQVRoge2a63aqMBBGuVhRIILXitf3f8u2dkaBfLmA4Zy1uub7p5FsmmwmgRJFEolEIpG8UtRJUhemxqwbFRSd3qr4O9UtRa2b1aKb6hQOXW7iZzalfmaxniwUO5+3u93m/fYPAE8CsYtZt99Zf+YnhCfOnqeDn0DPcdenyeAHxI7jwz+Ad1VrZ96Sfhp4cTWx43j10m4SOFAN9j8FHKrWDms3AXztYj+1Cw43q9bOeRJ4sdL7q2v9u6oIDweq7b+XSbWHlLDwnd7Z52/Lp95yCgsHqm24bQPaAsLzrd7V8tW81FvBZIyEZ5XeU93+AdAuFByoVtGOrKCCqsDpBYED1c60hNTXK41AeZ4CXlpUe1j1QR+Adu/CFfiLWDUakh19BNq9B8+AtTTQ+XNI1rR9dGk3EA5U4zVbXV7fXVg/UIBHw1FVY9XgaJSg2o2D21TT5pc9sGk3AF6YVStRQS0NpzUGnl30o2lwFRzcT5p4s3becFTVSLUC1e3v7LndVO184WCvxqpZtpDUu0k7T7hFNesWkrePWDsvOFKNimhpuFvhHGh40HLuBQeqLei4Aqzr3Wxp4pOF3nZ3s9GWkG7rM3sFe2TFv9W1W9Rm6m/AdeqhWjsW7ZZm7k8sqoFii8PLHNBubUEX4LaAVMtvvuw4vtEyB7TbGh9KpXr5OLJqjT87jhvW7qg1XQyPhYBq/NPUcmOMcqXHY+DKmUHtgGr8lOk+DP0Tuq4cm26ORTX39gzEcnBfOwVUozPMPTamKOfcOKLzjnagJKxobtA2zi97EqbWa1PV0g6UD1atnultvmG3kHbPQg9Wqq15zIaEZw5odzKqxs/UPJ6D2MNugdXwpykH5YNOWA2qLDiNMg5hk0d62TzyVOn1aUSOLI/e2zrSvmLVkjdUa4fdAtpF/QucS7/zkZt/yC3V124eZd0v2JABi5g7N+xv1ivcrNroyoKzR9o9yv9rl8C3+inYgb2XBS1z9Wt53HVHg1WDe89389HTjueXLnWuaqMWMXc2nWrXPP8npNqn4rlPHB4u54+Bbq1r6rB+VvrJ4dH9djBt5aaHWyJwgQtc4P8b3sy1eOw1w8Bn4BWN1L3jE7jABS5wgQtc4AIXuMAF/jfg6B3pIHD4Nng/zrcNx8HnPuz+o+BQcM83zDPXXR+COw5p/N9uTxNrwCM8ZT/Ca74lEolE8gfyBRpiN3EM6jiDAAAAAElFTkSuQmCC',
    }}
  />
);
const ProfileTabIcon = () => (
  <Image
    style={{width: 20, height: 20}}
    source={{
      uri: 'data:image/png;base64,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',
    }}
  />
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="yellow"
        inactiveColor="#c0c0c0"
        barStyle={{backgroundColor: '#7b68ee'}}>
        <Tab.Screen
          name="Home"
          component={Homescreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: HomeTabIcon,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profilescreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ProfileTabIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
