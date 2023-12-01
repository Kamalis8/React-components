/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * https://github.com/facebook/react-native
 *
 * @format
 */

// App.js

// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import MainNavigation from './src/Navigation/MainNavigation';

// const App = () => {
//   return (
//     <>
//       <MainNavigation />
//     </>
//   );
// };
// export default App;

// App.js
import {Provider} from 'react-redux';
import Home from './src/redux/Home';
import React from 'react';
import store from './src/redux/Store';
const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
