
import React,{useState , useContext} from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';

import ToggleSwitch from 'toggle-switch-react-native'

import { Fbsend_WaterPump ,Fbsend_Light } from '../FireBaseSection/FirebaseDataTransfer'

import {AppContext} from '../utils/AppContext' 

export default function ({Label , image  })
{
  
  const ContextValue = useContext(AppContext);


  var isLightFirst = false;
  var temp = false;
  if(Label==="Light")
  {
    image = require('../Assets/Images/icons/light-off.png') ;
    isLightFirst=true;
    temp = ContextValue.WaterPumpSwitchState;
  }
  else{
    
  }
  const [SwitchState , setSwitchState ]= useState();
  const [Islight , setIsLight ] = useState(isLightFirst);
  

  return(
    <View style={{  width:162,height:160 , backgroundColor:'#eef3ec' , borderRadius:20 , marginRight:20 , marginBottom:20 , flexDirection:'column' }} >
      <View style={{flexDirection:'row' , marginTop:8 }} >
              {
                (Islight&&SwitchState)&&
                  <Image
                                source={require('../Assets/Images/icons/light-on.png')}
                                style={{
                                  width:38,
                                  height:38,
                                  marginLeft:10,
                                  marginTop:5
                                }}
                              />
              }

              {
                (Islight&& !SwitchState)&&
                  <Image
                                source={require('../Assets/Images/icons/light-off.png')}
                                style={{
                                  width:38,
                                  height:38,
                                  marginLeft:10,
                                  marginTop:5
                                }}
                              />
              }

              {
                !Islight&&
                  <Image
                                source={image}
                                style={{
                                  width:38,
                                  height:38,
                                  marginLeft:10,
                                  marginTop:5
                                }}
                              />
              }
            <Text style={{color:'#468e79' , marginTop:5, fontSize:16 , fontWeight:'bold' ,alignSelf:'center', marginLeft:10, marginTop:15,}}>{Label}</Text>
      </View>
      
      <View style={{ marginTop:20 , alignSelf:"center" }} >
        <ToggleSwitch
                  isOn={SwitchState}
                  onColor="#106f4d"
                  offColor="#9fb28e"
                  size="small"
                  onToggle={(isOn) => {
                                        console.log("changed to : ", isOn) ;
                                        
                                        setSwitchState(!SwitchState);

                                        if(Islight){
                                          Fbsend_Light(!SwitchState);
                                        }
                                        else{
                                          Fbsend_WaterPump(!SwitchState)
                                        }

                                      }}
                  />

      </View>
      
    </View>
  )
}