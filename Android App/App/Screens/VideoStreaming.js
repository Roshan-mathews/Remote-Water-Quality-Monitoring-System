// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
// import Home from './Screens/Home';

// import navigation from './Config/Navigation'
// import Navigation from './Config/Navigation';
export default function App() {
  return (
    <View style={styles.container} >
        <View style={{marginBottom:20}} >
          <Text style={{ marginTop:20, fontSize:20 , fontWeight:'bold', color:'#468e79' }} >Plant Monitoring Screen</Text>
        </View>

        <StreamCard/>
    </View>
  );
}



function StreamCard(){
  return(
    <View>

      <View style={{ backgroundColor:"#3e3e3e" , width:400,height:280 , borderRadius:20 , alignSelf:'auto' }} >
        <Image source={require('../Assets/Images/images.jpeg'  )} style={{ width:400,height:280 , borderRadius:20  }} />
        
        <View style={{ marginTop:10, alignSelf:'center', alignItems:'center', position:'absolute' , backgroundColor:"#FF0000" , borderRadius:15 , width:70,height:30 , flexDirection:'row' }} >
          <View style={{ width:15,height:15 , borderRadius:10 ,backgroundColor:'#0b6623' , marginRight:10 , marginLeft:5 ,marginTop:5 }} />
          <Text style={{ alignSelf:'center' , marginTop:5 }} >LIVE</Text>
        </View>
      </View>

      <View>
        <Text>la</Text>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop:60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

