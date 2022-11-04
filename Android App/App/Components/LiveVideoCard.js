
import React from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native';
export default function ({Label , image , navigation })
{


  return(
    <View style={{  width:162,height:160 , backgroundColor:'#eef3ec' , borderRadius:20 , marginRight:20 , marginBottom:20 , flexDirection:'column' , alignSelf:'center' }} >
        <TouchableOpacity onPress={()=>{navigation.push("VideoScreen")}} >
            <View style={{flexDirection:'row' , marginTop:8 , alignSelf:'center' }} >
                        <Image
                                        source={image}
                                        style={{
                                        width:90,
                                        height:90,
                                        marginLeft:10,
                                        marginTop:5
                                        }}
                            />
                    
            </View>
            <Text style={{color:'#468e79' , marginTop:5, fontSize:16 , fontWeight:'bold' ,alignSelf:'center', marginLeft:10, marginTop:15,}}>{Label}</Text>
        </TouchableOpacity>
    </View>
  )
}