import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Homescreen = ({ route, navigation }) => {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome {name}</Text>
      <Button
        title="Go to Detail Screen"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
});
