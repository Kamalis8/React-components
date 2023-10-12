/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Alert, Button, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';

const App = () => {
  return (

      <SafeAreaView>
      <View>
      <Text style= {styles.heading}>Cards</Text>
      </View>

      <ScrollView horizontal= {true}>
        <Text style= {[styles.cards,styles.cardone]}>blue</Text>
        <Text style= {[styles.cards,styles.cardtwo]}>yellow</Text>
        <Text style= {[styles.cards,styles.cardthree]}>green</Text>
        <Text style= {[styles.cards,styles.cardfour]}>sandle</Text>
        <Text style= {[styles.cards,styles.cardfive]}>violet </Text>
        </ScrollView>

        <Text style = {styles.heading}>Pictures</Text>

        <ScrollView  horizontal={true}>
          <Image style= {styles.picture} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivPMPcek0RAaIbjP6bcRCJXq2pIu4tdjS0Q&usqp=CAU'}}/>
          
          <Image style= {styles.picture} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjGFiGndwGxSPKXSY9Pj8xG7fE950kXyJOA&usqp=CAU'}}/>
          <Image style= {styles.picture} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7LMbw4GQH1bLXqB9etxrgDcfaA7BwZKLsg&usqp=CAU'}}/>
          <Image style= {styles.picture} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfiSjIN7odlEvQ8579yPbU-hRWaV2-_lIMRuCJAfilUfGuP6i0Sf3uJ0XzP4oSu6pf4U&usqp=CAU'}}/>
          <Image style= {styles.picture} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUTfwMlwd21mdK2tMhS4O8r_C_PTxH5mPYA&usqp=CAU'}}/>
        </ScrollView>
     </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  
  heading:{
    fontSize:20,
    fontWeight:'bold',
    
  },
  cards:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    padding:20,
    margin:8,
  },
 picture:{
  width:100,
  height:100,
  padding:20,
  margin:8,
  borderRadius:20,
 },
  cardone:{
    backgroundColor:'#87ceeb',
  },
  cardtwo:{
    backgroundColor:'#ffff00',
  },
  cardthree:{
    backgroundColor:'green',
  },
  cardfour:{
    backgroundColor:'#f5deb3',
  },
  cardfive:{
    backgroundColor:'#ee82ee',
  },
  },
);

export default App;