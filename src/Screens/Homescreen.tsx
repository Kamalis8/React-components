import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {IMAGECLOUD} from '../assets/image';
import Strings from '../utils.js/String';
import Appconstantcolor from '../assets/Appconstantcolor';
import LinearGradient from 'react-native-linear-gradient';
import {useEffect, useState} from 'react';

const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // try {
    //   const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/posts/',
    //   );
    //   console.log('data-->', JSON.stringify(response));
    //   if (response.status != 200) {
    //     throw new Error('Network request failed');
    //   }

    //   const jsonData = await response.json();

    //   setData(jsonData);
    // } catch (error) {
    //   console.error('Error:', error);
    // } finally {
    //   setLoading(false);
    // }
    // const response = await fetch(
    //   'https://615fcf10f7254d001706821b.mockapi.io/api/v1/users',
    // );
    // const json = await response.json();
    // console.log('data', json);

    fetch('https://615fcf10f7254d001706821b.mockapi.io/api/v1/users', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     // id: 30,
      //     name: 'name 30',
      //     phone: '25',
      //   }),
      // })
      //   .then(response => response.json())
      //   .then(responseData => {
      //     console.log(JSON.stringify(responseData));
      //   })
      //   .done();

      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        name: 'name 37',
        phone: '66',
      }),
    })
      .then(response => response.json())
      
      .then(responseData => {
        console.log(JSON.stringify(responseData));
      })
      .done();

    //  .then(response => console.log(JSON.stringify(response)))
    //     .then(responseJson => {
    //       console.log('data----', JSON.stringify(responseJson));
    //       console.log(responseJson);
    //     })
    //     .catch(error => {
    //       console.log(JSON.stringify(error));
    //       console.error(error);
    //     });
    // .then(data => console.log(data))
    // .catch((error: any) => console.log(error));
  };

  return (
    <View style={{flex: 1, backgroundColor: Appconstantcolor.blue}}>
      <View style={styles.imageview}>
        <Image style={styles.imageicon} source={IMAGECLOUD} />
      </View>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}> </LinearGradient>
      <View style={styles.imageview}>
        <Text style={styles.degree}>{Strings.Text10}</Text>
      </View>

      <View style={styles.imageview}>
        <Text style={styles.precipitations}>{Strings.Text11}</Text>
        <Text style={styles.precipitations}>{Strings.Text12}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageicon: {
    width: 284,
    height: 207,
    resizeMode: 'cover',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  imageview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  degree: {
    fontSize: 64,
    fontWeight: '600',
    lineHeight: 76.38,
    color: Appconstantcolor.White,
  },
  precipitations: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21.48,
    color: Appconstantcolor.White,
  },
});
export default HomeScreen;
function then(arg0: (data: any) => void) {
  throw new Error('Function not implemented.');
}
