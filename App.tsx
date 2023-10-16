/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Alert, Button, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, Linking} from 'react-native';

const App = () => {
 
  function openwebsite (websitelink:string)
  {
    Linking.openURL(websitelink)
  }
  return (

     

    <ScrollView>
    <View style = {styles.reactview}>
    <Text style = {styles.heading}> React Native </Text>

  <Text style = {styles.headview}>
    What is React Native?
  </Text>
  <Text style={styles.ans} numberOfLines={2}>
  Many different kinds of people use React Native: from advanced iOS developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background.
  </Text>

  <View style = {styles.imgview} >
    <Image  style = {styles.Image}source={{uri:'https://images.pexels.com/photos/5077039/pexels-photo-5077039.jpeg?auto=compress&cs=tinysrgb&w=600'}}></Image>
  </View>

  

  <View style={styles.touch} >
  <TouchableOpacity  onPress={()=> openwebsite('https://reactnative.dev/docs/getting-started')}>
    <Text style= {styles.linktext}> Read more </Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={()=> openwebsite('https://reactnative.dev/docs/getting-started')}>
    <Text style= {styles.linktext}> Visit </Text>
    </TouchableOpacity>
    </View>
    
    </View>
  </ScrollView>
    
      


  )
};



const styles = StyleSheet.create({
  Image:{
    width:400,
    height:400,
    borderRadius:10,

  },
 
  
 reactview:{
  backgroundColor:'#e9967a'
    },
    touch:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
    },
    
  
    heading:{
      fontSize:20,
      fontWeight:'bold',
      paddingLeft:20,
      paddingBottom:20,
      
    },
    headview:{
      paddingLeft:25,
  color:'black',
  fontSize:16,
    },
    ans:{
      paddingLeft:25,
      paddingBottom:20,
      color:'black',
    },
    imgview:{
      
      
      alignItems:'center',
      paddingBottom:20,
      paddingtop:20,
      margin:8,
    },
    linktext:{
      color:'black',
      fontSize:16,
     
  
  
    },

}
);

export default App;