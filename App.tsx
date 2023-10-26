/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, Image} from 'react-native';

const info = [
  {
    name: 'Tomato',
    Grotyp: 'Vegetable',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
  },
  {
    name: 'Beef',
    Grotyp: 'Meat',
    price: '$40.00',
    grams: '1kg',
    image:
      'https://img.freepik.com/free-photo/meat_144627-27534.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Apple',
    Grotyp: 'Fruit',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/premium-photo/red-apple-with-water-droplets-it_777078-11997.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Banana',
    Grotyp: 'Fruit',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/free-photo/freshness-vibrancy-nature-captured-healthy-banana-snack-generated-by-artificial-intellingence_25030-63044.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Spinach',
    Grotyp: 'Vegetable',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/free-photo/spinach-table_144627-20715.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Carrot',
    Grotyp: 'Vegetable',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/free-photo/fresh-carrots-white-background_1127-244.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Chicken',
    Grotyp: 'Meat',
    price: '$40.00',
    grams: '1kg',
    image:
      'https://img.freepik.com/free-photo/pepper-closeup-fresh-raw-food_1203-5518.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
  },
  {
    name: 'Mango',
    Grotyp: 'Fruit',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/premium-photo/mango-isolated-white-background_627142-290.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Grapes',
    Grotyp: 'Fruit',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/free-photo/green-grape_1203-6913.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'orange',
    Grotyp: 'Fruit',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/free-photo/orange-white-white_144627-16571.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
];

const paginationdata = [
  {
    name: 'Test 1',
    Grotyp: 'Vegetable',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
  },
  {
    name: 'Test 2',
    Grotyp: 'Meat',
    price: '$40.00',
    grams: '1kg',
    image:
      'https://img.freepik.com/free-photo/meat_144627-27534.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Test 3',
    Grotyp: 'Fruit',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/premium-photo/red-apple-with-water-droplets-it_777078-11997.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Test 4',
    Grotyp: 'Fruit',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/free-photo/freshness-vibrancy-nature-captured-healthy-banana-snack-generated-by-artificial-intellingence_25030-63044.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Test 5',
    Grotyp: 'Vegetable',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/free-photo/spinach-table_144627-20715.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Test 6',
    Grotyp: 'Vegetable',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/free-photo/fresh-carrots-white-background_1127-244.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Test 7',
    Grotyp: 'Meat',
    price: '$40.00',
    grams: '1kg',
    image:
      'https://img.freepik.com/free-photo/pepper-closeup-fresh-raw-food_1203-5518.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=ais',
  },
  {
    name: 'Test 8',
    Grotyp: 'Fruit',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/premium-photo/mango-isolated-white-background_627142-290.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Test 9',
    Grotyp: 'Fruit',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/free-photo/green-grape_1203-6913.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
  {
    name: 'Test 10',
    Grotyp: 'Fruit',
    price: '$2.00',
    grams: '100gr',
    image:
      'https://img.freepik.com/free-photo/orange-white-white_144627-16571.jpg?size=626&ext=jpg&ga=GA1.1.13402438.1698050074&semt=sph',
  },
];

const App = () => {
  const colorListProps = ({item}) => {
    let grotypColor = '';
    if (item.Grotyp === 'Vegetable') {
      grotypColor = '#7fff00';
    } else if (item.Grotyp === 'Meat') {
      grotypColor = '#FF0000';
    } else if (item.Grotyp === 'Fruit') {
      grotypColor = '#FFA500';
    }
    return grotypColor;
  };
  const [page, setPage] = useState(1);
  const [CanLoadMore, setCanLoadMore] = useState(true);
  const [data, setdata] = useState([info]);
  const loadMoreData = () => {
    const nextPage = page + 1;
    console.log('loadMoreData', 'nextpage', 'newdata', 'data');
   // const newdata = info.slice(nextPage * 5, nextPage * 5 + 10);
    if (nextPage > 1) {
      setdata([...data, ...paginationdata]);
    } else {
      setCanLoadMore(false);
    }
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.topcon1}>
        <View style={styles.outercontiner}>
          <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.image}} />

            <View style={styles.con1}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={{color: colorListProps({item})}}>{item.Grotyp}</Text>
            </View>
            <View style={styles.con2}>
              <Text style={styles.price}>{item.price}</Text>
              <Text>{item.grams}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.topcon}>
      <View style={styles.headtext}>
        <Text style={styles.heading}>Groceries</Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={item => renderItem(item)}
          onEndReached={() => loadMoreData()}
          onEndReachedThreshold={0.5}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topcon1: {
    flex: 1,
    lexGrow: 1,
  },
  topcon: {
    flex: 1,
  },
  headtext: {
    backgroundColor: '#a9a9a9',
    marginBottom: 10,
    elevation: 10,
  },
  heading: {
    fontSize: 30,
    color: '#000000',
    padding: 20,
  },
  outercontiner: {
    margin: 8,
    borderRadius: 14,
    borderColor: 'transparent',
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 16,
    shadowRadius: 4,
    elevation: 4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
    borderRadius: 14,
    backgroundColor: 'white',
  },
  con1: {
    flex: 1,
    marginLeft: 10,
  },
  con2: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },

  image: {
    width: 50,
    height: 50,
    paddingRight: 60,
  },
  name: {
    fontSize: 24,
    color: '#a9a9a9',
    fontWeight: '400',
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#000000',
  },
  grams: {
    fontSize: 16,
    color: '#d3d3d3',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadMoreText: {
    color: 'white',
  },
});

export default App;
