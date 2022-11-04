import React, { useState } from "react";
import { StyleSheet, Text, View , Image } from 'react-native';


import ToggleSwitch from 'toggle-switch-react-native'

import {Fbsend_NutrientA , Fbsend_NutrientB , Fbsend_NutrientC} from '../FireBaseSection/FirebaseDataTransfer'

export default function ()
{
    const [NutrientASwitch , setNutrientASwitch ]= useState(false);
    const [NutrientBSwitch , setNutrientBSwitch ]= useState(false);
    const [NutrientCSwitch , setNutrientCSwitch ]= useState(false);
  
    return(
      <View style={{ width:340,height:160 , backgroundColor:'#eef3ec' , borderRadius:20 , marginRight:20 , marginBottom:20 , flexDirection:'column',
                     
      }} >
          
          <View style={{flexDirection:'row'}} >
            <Image
                              source={require('../Assets/Images/icons/fertilizer.png')}
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
             }} >Nutrient Switch</Text>
          </View>
  
          <View style={{ flexDirection:'row' , alignSelf:'center' , marginTop:30 }} >
            <View style={{ flexDirection:'column' }} >
                <Text style={{alignSelf:'center' , fontWeight:'bold' , color:'#54a48c'  }} >A-Type</Text>
                <ToggleSwitch
                    isOn={NutrientASwitch}
                    onColor="#106f4d"
                    offColor="#9fb28e"
                    size="small"
                    onToggle={(isOn) => {
                                          console.log("changed to : ", isOn) ;
                                          setNutrientASwitch(!NutrientASwitch);
                                          Fbsend_NutrientA(!NutrientASwitch);
                                        }}
                />
            </View>
  
            <View style={{ flexDirection:'column' , marginLeft:40 }} >
                <Text  style={{alignSelf:'center' , fontWeight:'bold' , color:'#54a48c' }}>B-Type</Text>
                <ToggleSwitch
                    isOn={NutrientBSwitch}
                    onColor="#106f4d"
                    offColor="#9fb28e"
                    size="small"
                    onToggle={(isOn) => {
                                          console.log("changed to : ", isOn) ;
                                          setNutrientBSwitch(!NutrientBSwitch);
                                          Fbsend_NutrientB(!NutrientBSwitch);
                                        }}
                />
            </View>


            <View style={{ flexDirection:'column' , marginLeft:40 }} >
                <Text  style={{alignSelf:'center' , fontWeight:'bold' , color:'#54a48c' }}>C-Type</Text>
                <ToggleSwitch
                    isOn={NutrientCSwitch}
                    onColor="#106f4d"
                    offColor="#9fb28e"
                    size="small"
                    onToggle={(isOn) => {
                                          console.log("changed to : ", isOn) ;
                                          setNutrientCSwitch(!NutrientCSwitch);
                                          Fbsend_NutrientC(!NutrientCSwitch);
                                        }}
                />
            </View>
  
            
  
          </View>
          
          
        
      </View>
    )
  }