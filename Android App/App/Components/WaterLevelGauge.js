import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function map( x,  in_min,  in_max,  out_min,  out_max) 
{
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export default function WaterLevelGauge({value})
{

    console.log("value : " , value );
    if(!value)
    {
      value=0;
    }
    var or_val = value;
    value = map( value , 0 , 100 , 150 ,10);
    
    return(
    <View style={{ alignSelf:'center' , marginTop:20 ,  backgroundColor:'#3e3e3e' , width:80 , height:160 , borderRadius:20 }} >
        <View style={{ backgroundColor:'#72a490' ,  position:'relative' , height:value ,  borderTopEndRadius:10 , borderTopStartRadius:10 }} />
        
        <View style={{ flex:1 , backgroundColor:'#A0E7E5' , borderBottomEndRadius:10 , borderBottomStartRadius:10 }} > 
          <Text style={{alignSelf:'center' , fontWeight:'bold' , color:'#106f4d' ,  }}>{or_val}%</Text>
        </View>  

    </View>
  )
}
