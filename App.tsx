/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';

const details = [
  {
    id: 1,
    name: 'John Doe',
    image:
      'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    place: 'New York City',
  },
  {
    id: 2,
    name: 'Jane Doe',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    place: 'Los Angeles',
  },
  {
    id: 3,
    name: 'Michael Smith',
    image:
      'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    place: 'Toronto',
  },
  {
    id: 4,
    name: 'Emily Johnson',
    image:
      'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    place: 'Chicago',
  },
  {
    id: 5,
    name: 'David Brown',
    image:
      'https://images.pexels.com/photos/2190377/pexels-photo-2190377.jpeg?auto=compress&cs=tinysrgb&w=400',
    place: 'San Francisco',
  },
  {
    id: 6,
    name: 'Sarah Davis',
    image:
      'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=400',
    place: 'Miami',
  },
  {
    id: 7,
    name: 'Robert Wilson',
    image:
      'https://images.pexels.com/photos/4067753/pexels-photo-4067753.jpeg?auto=compress&cs=tinysrgb&w=400',
    place: 'London',
  },
  {
    id: 8,
    name: 'Jessica Lee',
    image:
      'https://images.pexels.com/photos/3779853/pexels-photo-3779853.png?auto=compress&cs=tinysrgb&w=400',
    place: 'Paris',
  },
  {
    id: 9,
    name: 'James Taylor',
    image:
      'https://images.pexels.com/photos/9558566/pexels-photo-9558566.jpeg?auto=compress&cs=tinysrgb&w=400',
    place: 'Tokyo',
  },
  {
    id: 10,
    name: 'Olivia Martinez',
    image:
      'https://images.pexels.com/photos/3772519/pexels-photo-3772519.jpeg?auto=compress&cs=tinysrgb&w=400',
    place: 'Sydney',
  },
  {
    id: 11,
    name: 'Daniel Anderson',
    image:
      'https://images.pexels.com/photos/5083205/pexels-photo-5083205.jpeg?auto=compress&cs=tinysrgb&w=400',
    place: 'Berlin',
  },
  {
    id: 12,
    name: 'Sophia Jones',
    image:
      'https://images.pexels.com/photos/6965750/pexels-photo-6965750.jpeg?auto=compress&cs=tinysrgb&w=400',
    place: 'Mumbai',
  },
  {
    id: 13,
    name: 'Maria Garcia',
    image:
      'https://media.istockphoto.com/id/1334084943/photo/excited-asian-young-woman.jpg?s=612x612&w=0&k=20&c=qokGWWdviOu5uPGLvD7fMNi3bjvNedSJWdtTcknBPnI=',
    place: 'Cairo',
  },
  {
    id: 14,
    name: 'Elena Russo',
    image:
      'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=',
    place: 'Dubai',
  },
  {
    id: 15,
    name: 'Abdul Rahman',
    image:
      'https://images.pexels.com/photos/12600067/pexels-photo-12600067.jpeg?auto=compress&cs=tinysrgb&w=400',
    place: 'New Delhi',
  },
];
const renderItem = ({item}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textcontainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.place}> {item.place}</Text>
        </View>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
    </>
  );
};
const App = () => {
  return (
    <>
      <View style={styles.titlestyle}>
        <Text style={styles.title}>Location List </Text>
      </View>

      <View>
        <FlatList data={details} renderItem={renderItem} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 12,
    borderColor: '#a9a9a9',
    borderWidth: 1,
  },
  textcontainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 26,
    color: '#ffffff',
    padding: 20,
  },
  titlestyle: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 10,
  },
  place: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a9a9a9',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderColor: 'red',
    borderWidth: 2,
    marginTop: 10,
    justifyContent: 'flex-start',
  },
});

export default App;
