/* eslint-disable @typescript-eslint/no-shadow */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

const data = [
  {
    id: 1,
    title: 'Great Wall of China',
    about:
      'The Great Wall of China is an ancient defensive fortification that spans over 13,000 miles, constructed to protect China from invasions by nomadic tribes. It stands as an enduring symbol of China rich history and cultural heritage.',
    image:
      'https://images.pexels.com/photos/10952316/pexels-photo-10952316.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    title: 'Chichen Itza',
    about:
      'Chichen Itza is a renowned archaeological site located in Mexico Yucatan Peninsula, known for its well-preserved Mayan ruins including the iconic El Castillo pyramid. It served as a significant ancient city and ceremonial center showcasing advanced architectural and astronomical knowledge of the Mayan civilization.',
    image:
      'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    title: 'Petra',
    about:
      'Petra, also known as the "Rose City," is an archaeological marvel in Jordan, renowned for its intricate rock-cut architecture, including the iconic Treasury. This ancient Nabatean city, nestled within rugged desert terrain, stands as a UNESCO World Heritage site and a testament to ancient engineering prowess.',
    image:
      'https://images.pexels.com/photos/720254/pexels-photo-720254.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 4,
    title: 'Machu Picchu',
    about:
      'Machu Picchu is an ancient Incan citadel perched high in the Andes Mountains of Peru, known for its extraordinary stone architecture and breathtaking panoramic views. This UNESCO World Heritage site is a testament to Incan engineering and a symbol of their advanced civilization.',
    image:
      'https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 5,
    title: 'Christ the Redeemer',
    about:
      'Christ the Redeemer is an iconic statue of Jesus Christ, standing atop the Corcovado mountain in Rio de Janeiro, Brazil. It is a globally recognized symbol of Christianity and a remarkable feat of engineering and artistry.',
    image:
      'https://images.pexels.com/photos/13911606/pexels-photo-13911606.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 6,
    title: 'Colosseum',
    about:
      'The Colosseum, also known as the Flavian Amphitheatre, is an ancient Roman arena located in the heart of Rome, Italy. Built in the 1st century AD, it once held up to 80,000 spectators for gladiatorial contests, animal hunts, and other public spectacles.',
    image:
      'https://images.pexels.com/photos/2225439/pexels-photo-2225439.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 7,
    title: 'Taj Mahal',
    about:
      'The Taj Mahal is an exquisite white marble mausoleum in Agra, India, built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. Renowned for its architectural beauty and symmetry, it stands as an enduring symbol of love and is a UNESCO World Heritage site.',
    image:
      'https://images.pexels.com/photos/6827267/pexels-photo-6827267.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const renderItem = ({item}) => {
  //console.log('item', item);
  return (
    <>
      <View style={styles.itemContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.about}</Text>
      </View>
    </>
  );
};

const App = () => {
  return (
    <>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Wonders of World</Text>
      </View>
      <View>
        <FlatList data={data} renderItem={renderItem} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  itemContainer: {
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 400,
    height: 400,
    marginRight: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  heading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
