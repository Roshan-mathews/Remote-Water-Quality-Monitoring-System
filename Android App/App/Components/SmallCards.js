import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';

export default function MonitorCard({Label , image , tempVal })
{
  return(
    <View style={{ alignItems:'center' , width:140,height:100 , backgroundColor:'#106e4e' , borderRadius:8 , marginRight:20 , marginBottom:20 , flexDirection:'row' }} >
      <Image source={image} style={{ marginLeft:10 ,alignSelf:'center', width:30, height:30, }}/>
      <View style={{ alignSelf:'center' , marginLeft:20 }} >
        <Text style={{color:'#bed5cd' ,  fontSize:22 }} >{tempVal}</Text>
        <Text style={{color:'#bed5cd' , marginTop:5, fontSize:14 }} >{Label}</Text>
      </View>
      
    </View>
  )
}


