import React from 'react';
import {View, StyleSheet, Button,} from 'react-native';
const Homescreen = navigation => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
export default Homescreen;
