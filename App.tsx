/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Alert, Button, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';

const LotsOfStyles = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
      <Text style= {styles.text}>Text styles</Text>
      </View>

      <TouchableOpacity style={styles.touch} onPress ={ () => Alert.alert('saved')}><Text style ={styles.touchtext}>click to save </Text></TouchableOpacity>

      <TouchableHighlight style = {styles.touchhigh} onLongPress={ () => Alert.alert ('entered')}><Text style={styles.touchtext}>Click to enter </Text></TouchableHighlight>
      <View style={styles.imgview}>

      <Image style ={styles.img} source ={{ uri:'https://reactnative.dev/img/tiny_logo.png'}}/>
      </View>

      <KeyboardAvoidingView
      behavior="padding"
      style={styles.safe}>
      
        <View>
      <TextInput placeholder="Username" style={styles.textinput} />
      <Button title="Submit" onPress={() => null} />
      </View>
     </KeyboardAvoidingView>
    
    

     <Text style = {styles.textpara} >Architecture Overview is intended to share conceptual overview of how React Native's internals work. The intended audience includes library authors and core contributors. If you are an app developer,it is not a requirement to be familiar with this material to be effective with React Native.You can still benefit from the overview as it will give you insights into how React Native works under the hood.Feel free to share your feedback on the discussion inside the working group for this section.</Text>
     
     
     </ScrollView>
      
    </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'grey',
  },
   
  con:{

  },
  text:{
    textAlign:'center',
    color:'black',
    fontWeight:'bold',
    backgroundColor:'yellow',
    borderWidth:2,
    borderColor:'red',
    padding:20,
    margin:10,
    fontSize:20,
},
touch:{
  alignItems:'center',
  backgroundColor:'pink',
  padding:10,
},
  touchtext:{
    textAlign:'center',
    color:'black',
    fontWeight:'bold',
    padding:20,
    margin:10,
    fontSize:20,
  },
  touchhigh:{
    alignItems:'flex-end',
   backgroundColor:'#ff7f50',
   padding:10,
  },
   textinput:{
    height:40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  safe:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  img:{
    width:100,
    height:100,
    resizeMode: 'contain',
  },

  imgview:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textpara:{
    fontSize:40,
    color:'#8b0000',
  },
   
  },
  
  
  

);

export default LotsOfStyles;