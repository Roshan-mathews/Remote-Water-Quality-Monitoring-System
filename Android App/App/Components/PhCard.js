import React, { useState } from "react";
import { StyleSheet, Text, View , Image } from 'react-native';


import ToggleSwitch from 'toggle-switch-react-native'


import {Fbsend_phBase , Fbsend_phAcidic} from '../FireBaseSection/FirebaseDataTransfer'

export default function ({Label , phStatus , lat, lon})
{
    var phStatusColor="#54a48c";
    if(phStatus==="basic")
    {
        phStatusColor="#f9c20d";
    }
    if(phStatus==="normal")
    {
        phStatusColor="#54a48c";
    }
    if(phStatus==="acidic")
    {
        phStatusColor="#CD6858";
    }

    const [phBasicSwitch , setPhBasicSwitch ]= useState(false);
    const [phAcidicSwitch , setPhAcidicSwitch ]= useState(false);

  
    return(
      <View style={{ width:340,height:160 , backgroundColor:'#eef3ec' , borderRadius:20 , marginRight:20 , marginBottom:20 , flexDirection:'column',}} >
          
          <View style={{flexDirection:'row'}} >
            <Image
                              source={require('../Assets/Images/icons/ph-meter.png')}
                              style={{
                                width:40,
                                height:40,
                                marginLeft:18,
                                marginTop:5
                              }}
                            />
            <Text style={{color:'#468e79' , marginTop:5, fontSize:18 , fontWeight:'bold' ,
            //  margin:20 ,
            alignSelf:'center',
            marginLeft:20,
            marginTop:25,
             }} >Location Data</Text>
          </View>
  
          <View style={{ flexDirection:'row' , alignSelf:'center' , marginTop:30 }} >
            <View style={{ flexDirection:'column' }} >
                <Text style={{alignSelf:'center' , fontWeight:'bold' , color:'#54a48c'  }} >Latitude</Text>

                <Text style={{alignSelf:'center' , fontWeight:'bold' , color:'#000000'  }} >{lat}</Text>

                {/* <ToggleSwitch
                isOn={phBasicSwitch}
                onColor="#106f4d"
                offColor="#9fb28e"
                size="small"
                onToggle={(isOn) => {
                                      console.log("changed to : ", isOn) ;
                                      setPhBasicSwitch(!phBasicSwitch);
                                      Fbsend_phBase(!phBasicSwitch);
                                    }}
                /> */}
            </View>
  
            <View style={{ flexDirection:'column' , marginLeft:40 }} >
                <Text  style={{alignSelf:'center' , fontWeight:'bold' , color:'#54a48c' }}>Longitude</Text>
                <Text style={{alignSelf:'center' , fontWeight:'bold' , color:'#000000'  }} >{lon}</Text>

                {/* <ToggleSwitch
                isOn={phAcidicSwitch}
                onColor="#106f4d"
                offColor="#9fb28e"
                size="small"
                onToggle={(isOn) => {
                                      console.log("changed to : ", isOn) ;
                                      setPhAcidicSwitch(!phAcidicSwitch);
                                      Fbsend_phAcidic(!phAcidicSwitch);
                                    }}
                /> */}
            </View>
  
            {/* <View style={{ flexDirection:'column' , marginLeft:50 , }} >
                <Text  style={{alignSelf:'center' , fontWeight:'bold' , color:phStatusColor , marginTop:-20 }}>pH seems {phStatus} </Text>
                <View style={{ backgroundColor:phStatusColor , width:20,height:20,borderRadius:10 , alignSelf:'center' }} ></View>
            </View> */}
  
          </View>
          
          
        
      </View>
    )
  }