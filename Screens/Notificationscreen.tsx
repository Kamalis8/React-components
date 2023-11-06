import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const Notificationscreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Notificationscreen;
