/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import {Text, View, Image, StyleSheet, FlatList} from 'react-native';
const info = [
  {
    name: 'March soulLabcoma',
    detail:
      'loral ispum dolor sit amet, consectetuer adpiscing elit.Aenean commodo ligula eged dolor',
    hour: '2 hours ago',
    image:
      'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
    sqimage:
      'https://img.freepik.com/free-photo/bunch-flowers-that-are-pink-orange_1340-31751.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
  },
  {
    name: 'John DeoLink',
    detail:
      'loral ispum dolor sit amet, consectetuer adpiscing elit.Aenean commodo ligula eged dolor',
    hour: '2 hours ago',
    image:
      'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
    sqimage:
      'https://img.freepik.com/free-photo/beautiful-sunset-mountain-around-beach-sea-ocean-rock_74190-13333.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
  },
  {
    name: 'Finn DoRemiFaso',
    detail:
      'loral ispum dolor sit amet, consectetuer adpiscing elit.Aenean commodo ligula eged dolor',
    hour: '2 hours ago',
    image:
      'https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
  },
  {
    name: 'Maria More More',
    detail:
      'loral ispum dolor sit amet, consectetuer adpiscing elit.Aenean commodo ligula eged dolor',
    hour: '2 hours ago',
    image:
      'https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
  },
  {
    name: 'Frank Odalthh',
    detail:
      'loral ispum dolor sit amet, consectetuer adpiscing elit.Aenean commodo ligula eged dolor',
    hour: '2 hours ago',
    image:
      'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
    sqimage:
      'https://img.freepik.com/free-photo/beautiful-old-tree-grown-edge-rock-with-amazing-clouds-side-sunlight_181624-2512.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
  },
  {
    name: 'Clark June Boom!',
    detail:
      'loral ispum dolor sit amet, consectetuer adpiscing elit.Aenean commodo ligula eged dolor',
    hour: '2 hours ago',
    image:
      'https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
  },
  {
    name: 'The googler',
    detail:
      'loral ispum dolor sit amet, consectetuer adpiscing elit.Aenean commodo ligula eged dolor',
    hour: '2 hours ago',
    image:
      'https://img.freepik.com/premium-vector/man-avatar-icon-flat-illustration-man-avatar-vector-icon-any-web-design_98396-3374.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
  },
];
const renderItem = ({item}) => {
  console.log('item', item);
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.detail} numberOfLines={4}>
            {item.detail}
          </Text>
          <Text style={styles.hour}>{item.hour}</Text>
        </View>
        <Image source={{uri: item.sqimage}} style={styles.sideimg} />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <FlatList data={info} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderColor: '#a9a9a9',
    padding: 20,
  },
  textContainer: {
    flexDirection: 'column',
  },

  name: {
    fontSize: 16,
    color: '#1e90ff',
    paddingLeft: 30,
  },
  detail: {
    fontSize: 14,
    color: '#000000',
    paddingLeft: 30,
    paddingRight: 32,
    fontWeight: '500',
  },
  hour: {
    fontSize: 12,
    color: '#696969',
    paddingLeft: 30,
    paddingTop: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: '#696969',
    borderWidth: 1,
    paddingRight: 40,
  },
  sideimg: {
    width: 50,
    height: 50,
    padding: 20,
  },
});
export default App;
