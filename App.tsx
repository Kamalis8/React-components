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
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const ProfileTabIcon = () => (
  <Image
    style={{width: 20, height: 20}}
    source={{
      uri: 'data:image/png;base64,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',
    }}
  />
);
const SearchTabIcon = () => (
  <Image
    style={{width: 20, height: 20}}
    source={{
      uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB9CAMAAABTaScUAAAAY1BMVEX///8AAADx8fH8/Pz19fWjo6Pu7u6oqKjb29uHh4fX19d2dnbBwcGzs7O7u7vp6ekODg4UFBQgICCbm5sZGRlpaWlSUlLIyMhMTEw5OTmQkJAlJSVdXV0zMzNFRUXR0dF+fn4hovx0AAAE9UlEQVRogcVb24LiIAztXVrbYqtVe/f/v3J1Zt1xTQLhUuc8g6cEOElIDAIuMlGnQ7eMTRiGh7af8mNVSPZsF8SyvPWnEKKZ97WItyWXu2lEqJ9oz4Pc7AviulNQPzFVyRbk0fHAIP9C7v0cyJzL/YW98EkeHVU7jqHxaIGyNyR/4FT5OYTR3oL8gcnHDtSNJfsdqSt5fLMnv6OLnNizsxN7GC4uG1DMjuz3E1has1/YQqPCzpK99kEe2h7A0hO7Hf+F9cu87TG3f6G57n031OVaFMV6KY/7RcNfG7JnqjPf3OrsfXw5KN1CYcQeK+57dyHEfL3RW9EY6Q+pdYdcpSPy2JIfbeCAyEOv9eMypyxwZLNnWCh5x3xhTBbUvq1ceiKky5nTU3z6wowBcbU78MVb4JeAZ/4IjW1GE9cl0Q1oWPHXEZvam4Vu0YT9SMeYiZ67+V1mdMCFg2FBLKI2Zr/jivzOpJ2VWX41QIKdP+3lw3beLmBZEae118yJkZ2/WbHj919zgpE731uyo/I1KCfEyAy2WAJIqP+9UvqkP9M/gJhf6TZ2YPjBJVVETtJNNR6KFdfP4IDLaRV+X8K76pYlBdD6iqMEwwzdRdVhAL+o8HtQcDkBhgoCaM+ZHgxdrSN7EEDXQw6Fzu7mTA/vHhlzF2CofXr6hAC/SaYcQHFb9/ehBCRApO4CQ12d2YMAvAyRlwncEtdr9wDw4BMlPMDfOD8NBYiWjJTXAdtk7+x+AL0YJaRAcs3yUhwRmx64Zx/vgnz693EHH/QJWBSXnpeW6OiBlFJR+y+v/pf3HjxNfPbkA3/72XsPIr1NVK+lVA8EO5to/pnSfODxFIERG+CRjFxT9T5ytEis35CARJsM3WG04xppYtFORQ2VICxVZ4QcAIsqrhO4ea0zPcyb6DQHlsxchUcCKVPk6zC7d0vxsDhbsZ/wW0PHcjTM8BWnGXkOcxM+aM6TKmeFD0ujU4oLszbl2xq8pU53D3kpUpZVsMdIe6cfwecCzQMlVAkH4UdqIpqblMAZ1qcPe5jXmRJ70rUzP/JSQydY/yYh9K2V48Nqe/qEHetVuFqID1aRYWTMAitFaY0GgHa6cPw3WsPrzNYfo+ys5wJE+O84m6hfgneb8AJnvBA2889/hlUyeKWcgC7gcsvgJVGF5P4Aovzfn88xQKbodSHDvP9B1CHDU6o9gZWyw4nJj5bhHuh3yitY6hptePwR3T1wGqisP0sZvV28/S9UTRnntAA2EBWnl5DNr+lbWbq0XGX2gCzKqlv4nV08+yOe/x3tPPfzPJo2F/H40VKyF/w2Py+AgYUgX+CdP19dWxA8+69eetbs+WE1wBeY/mezA8gMoAtbA+haHZnrj8lOJCX2UndzmP4vEEw9f8HyiKx88QcF6YJx8r8BvU65+X2ERcfeguknm9Ct36CPUeScXu15v756Y2/2vyMp92RD3heaqXpPyHT8Zn2U8WWgAqprXmKhoM/1f3+C2A3dtX8a4jQvU56uZBDocf9fviHJpBCFEFImsToF3ITfAN7t75nftI/XFDr92Xr9/vTPDr9tfw3/uDG9jn9revX+L5vTK9fvo2Zoz9+4F81c+D+xeJqf+ezkDvT8kYVV/0DWb/No64//o+yAf3HsiDTGf/vP/dvANvznz7O/2N/wqdwXvh9OTx9SG4h6DK+7V6X9A/E7O57v+iWCAAAAAElFTkSuQmCC',
    }}
  />
);
const PostTabIcon = () => (
  <Image
    style={{width: 20, height: 20}}
    source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY37-xyAJKpSwdz_qJVu1ofQ2mcuS1u1cF2Q&usqp=CAU',
    }}
  />
);
const ChatTabIcon = () => (
  <Image
    style={{width: 20, height: 20}}
    source={{
      uri: 'data:image/png;base64,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',
    }}
  />
);
const SettingTabIcon = () => (
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
      <>
        <Tab.Navigator>
          <Tab.Screen
            name="Profile"
            component={Profilescreen}
            options={{
              title: 'My profile',
              tabBarIcon: ProfileTabIcon,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Searchscreen}
            options={{
              title: 'Search',
              tabBarIcon: SearchTabIcon,
            }}
          />
          <Tab.Screen
            name="Post"
            component={Postscreen}
            options={{
              title: 'Post',
              tabBarIcon: PostTabIcon,
            }}
          />
          <Tab.Screen
            name="Chat"
            component={Chatscreen}
            options={{
              title: 'Chat',
              tabBarIcon: ChatTabIcon,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settingscreen}
            options={{
              title: 'Settings',
              tabBarIcon: SettingTabIcon,
            }}
          />
        </Tab.Navigator>
      </>
    </NavigationContainer>
  );
};

export default App;
