/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Alert, Button, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, Linking} from 'react-native';

const App = () => {
 
  const contacts =[
    {
      name:'Anita',
      image:'https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg?auto=compress&cs=tinysrgb&w=400',

  },
{
  name:'David',
  image:'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=400',

},
{
  name:'Nivin',
  image:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',

},
{
  name:'Andrew',
  image:'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY=',

},{
  name:'Alex',
  image:'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',

},]
  return (

     

      <ScrollView style={styles.contacts}>
        <Text style = {styles.conhead}>Contacts</Text>

        
        {contacts.map (( {name,image})=> (
          <View style={styles.conview}>
           <Image source={{uri:image}} style = {styles.imgcon}/>


           <View style={styles.textcon}>
            <Text style = {styles.namecon}>{name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>



    
      


  )
};



const styles = StyleSheet.create({
 
  Image:{ width:400,
    height:400,
    borderRadius:15,

  },


  contacts:{
  
  },
  conhead:{
    color:'black',
    fontSize:24,
    fontWeight:'bold',

  },
  imgcon:{
    width:60,
    height:60,
    borderRadius:60/2,
    
    margin:8,

  },
  namecon:{
    color:'black',
    fontSize:16,
    fontWeight:'bold',
    alignItems:'center',
   flexDirection:'row',
  justifyContent:'center',
  },
  conview:{
    flex:1,
    flexDirection:'row',
    marginBottom:5,
    backgroundColor:'#9acd32',
    borderRadius:15,

    
  },
  textcon:{
    justifyContent:'center',
    alignItems:'center',
    
    
  }




  },
);

export default App;