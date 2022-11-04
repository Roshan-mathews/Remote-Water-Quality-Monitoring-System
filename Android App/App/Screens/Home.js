import React, { useEffect, useState , useContext, Dimensions  } from "react";

import {ScrollView, StyleSheet, Text, View , Image  } from 'react-native';


import MonitorCard  from '../Components/SmallCards'
import PhCard from '../Components/PhCard';

import firebase from '../FireBaseSection/FirebaseCon';
import {AppContext} from '../utils/AppContext' 

import { getDatabase, ref, onValue } from "firebase/database";



const database = getDatabase(firebase);




import {
  LineChart,
} from "react-native-chart-kit";



export default function App({navigation}) 
{  

  const [tepmperatureArray, setTepmperatureArray] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]);
  const [phArray, setphArray] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]);
  const [salinityArray, setsalinityArray] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]);
  const [tdsArray, settdsArray] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]);
  const [turbidityArray, setturbidityArray] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]);

  const [currentDate, setCurrentDate] = useState();

  const [wqiVal , setWqiVal ] = useState(0);
  useEffect(() => {
    var dayNumber = new Date().getDay(); //Current date

    var dayar = ['Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'];


    var monthar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var day = dayar[dayNumber];
    
    
    var monthNumber = new Date().getMonth() + 1; //Current Month
    var month = monthar[monthNumber];

    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      day + ' ' + month + ' ' + year + ' '
    );
  }, []);



  const ContextValue = useContext(AppContext);

  
  useEffect( ()=>{ 
                  let isMounted=true;
                  
                  // var starCountRef = database.ref("SensorData");

                  const starCountRef = ref(database, 'SensorData');

                  onValue(starCountRef, (snapshot) => 
                  {
                    const data = snapshot.val();
                    console.log(data);

                    if(isMounted)
                    {
                      // if(data.waterLevel)
                      // { 
                      //   ContextValue.setWaterLevel( data.waterLevel );
                        
                      // }
                      
                      if(data.temperature){
                         ContextValue.setTemperature( data.temperature );
                        //  setTepmperatureArray(data.temperature );
                        tepmperatureArray.splice(0, 1);
                        tepmperatureArray.push( data.temperature );

                        // try{
                        //   setTepmperatureArray(tepmperatureArray => [...tepmperatureArray, data.temperature]);
                        // }
                        // catch{remove an element frm array reactjs
                        // }
                        
                        //  console.log("array is :", tepmperatureArray );


                      }
                      if(data.salinity) {
                        ContextValue.setsalinity( data.salinity );


                        salinityArray.splice(0, 1);
                        salinityArray.push( data.salinity );
                      }

                      if(data.tds){ 
                        ContextValue.setTds( data.tds );


                        tdsArray.splice(0, 1);
                        tdsArray.push( data.tds );
                      }
                      if(data.ph){
                         ContextValue.setPh( data.ph );


                        phArray.splice(0, 1);
                        phArray.push( data.ph );
                      }

                      if(data.turbidity){ 
                        ContextValue.setTurbidity( data.turbidity );


                        turbidityArray.splice(0, 1);
                        turbidityArray.push( data.turbidity );
                      
                      }


                      if(data.latitude){ 
                        ContextValue.setLatitude( data.latitude );

                      }
                      if(data.longitude) ContextValue.setLongitude( data.longitude );

                      const tdsnum = parseInt(ContextValue.Tds);
                      const qiTds = (tdsnum/300)*100;
                      

                      const Turbiditynum = parseInt(ContextValue.Turbidity);
                      const qiTur = Turbiditynum*100;

                      const phnum = parseInt(ContextValue.Ph);
                      const qiph = ((phnum-7)/1.5)*100;

                      // console.log("phnum : ", phnum , " ; qiph : ", qiph );

                      // console.log("tdsnum : ", tdsnum , " ; qitds : ", qiTds );
                      
                      // console.log("Turbiditynum : ", Turbiditynum , " ; qiTur : ", qiTur );

                      const wqi = ( (36.41*qiph) + (309.5*qiTur) + (1.3017*qiTds) )/346.9417;
                      // console.log( "wqi : ",wqi );

                      setWqiVal(wqi);

                    }
                    
                    
                  });
                  return()=>{ isMounted=false }
             })

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderElements/>
        <HeaderElement2 Time={currentDate} wqiVal={wqiVal} />
        <Body navigation={navigation} 
                            tepmperatureArray={tepmperatureArray} 
                            salinityArray={salinityArray} 
                            phArray={phArray}
                            tdsArray={tdsArray}
                            turbidityArray={turbidityArray}/>
        </ScrollView>
      </View>
  );
}




const styles = StyleSheet.create
({
  container: {
    flex: 1,
    backgroundColor: '#06674b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



function HeaderElements()
{
    return(
        <View style={{
                        backgroundColor:'#06674b',
                        marginTop:50,
                        marginLeft:20,
                        flexDirection:'row',
                    }} >  
        </View>
    )
}



function MonitorRow({wqiVal})
{
  const ContextValue = useContext(AppContext);
  return(
      <View style={{ flexDirection:'row' , alignSelf:'center' , marginBottom:20 }} >
          <MonitorCard Label={"pH"} image={require('../Assets/Images/icons/meters.png')} tempVal={ContextValue.Ph} />
          <MonitorCard Label={"wqi"} image={require('../Assets/Images/icons/water.png')} tempVal={wqiVal} />
      </View>
  )
}

function MonitorContainer({wqiVal})
{
  const ContextValue = useContext(AppContext);
  return(
    <View style={{marginTop:20}} >
      <View style={{ flexDirection:'row' }} >

        <View style={{ flexDirection:'column' }} >
          <MonitorCard Label={"Temp"} image={require('../Assets/Images/icons/thermometer.png')} tempVal={ContextValue.Temperature+'°C'} />
          <MonitorCard Label={"Salinity"} image={require('../Assets/Images/icons/nutrients.png')} tempVal={ContextValue.salinity} />
        </View>



        <View style={{ flexDirection:'column' }} >
          <MonitorCard Label={"Turbidity"} image={require('../Assets/Images/icons/thermometer.png')} tempVal={ContextValue.Turbidity} />
          <MonitorCard Label={"TDS"} image={require('../Assets/Images/icons/npk.png')} tempVal={ContextValue.Tds} />
        </View>
        
      </View>
      
      <MonitorRow wqiVal={wqiVal}/>
      
    </View>
  )
}

function HeaderElement2({Time,wqiVal})
{

  

    return(
        <View
            style={{
                    flex:1,
                    marginTop:30,
                    backgroundColor:"#06674b",
                    alignItems:'center'
            }}
        >
            <View style={{ marginLeft:30 }} >
              <View style={{flexDirection:'row'}} >
                    
                      <View style={{ flexDirection:'column' , marginLeft:15 , }} >
                        <Text style={{ color:'#bed7d0' , fontSize:24 , fontWeight:'bold' }} >Water Monitor </Text>
                        <Text style={{ color:'#bed7d0' , fontSize:20 }} >{Time}</Text>
                      </View>
                      
              </View>
              
              <MonitorContainer wqiVal={wqiVal} />

            </View>
            
        </View>
    )
}

function Body({navigation , tepmperatureArray, salinityArray , phArray , tdsArray, turbidityArray })
{
  const ContextValue = useContext(AppContext);
    return(
        
        <View style={{backgroundColor:"#06674b"  }} >
          

            <View style={{backgroundColor:"#FFFFFF" , height:80 , borderTopEndRadius:50 , borderTopStartRadius:50  }} >
                <View style={{width:50 , height:8 , backgroundColor:'#83bba9' , alignSelf:'center' , marginTop:5 , borderRadius:5}} />
            </View>

            <View style={{padding:10 , backgroundColor:'#FFFFFF' }} >

                <View style={{padding:20 , flexDirection:'row' }} >
                    <PhCard Label="phLabel" lat={ContextValue.Latitude} lon={ContextValue.Longitude} />
                </View>


                <ChartComponent heading={"Temperature"} dataArray={tepmperatureArray} />

                <ChartComponent heading={"Turbidity"} dataArray={turbidityArray} />

                <ChartComponent heading={"Salinity"} dataArray={salinityArray} />

                <ChartComponent heading={"TDS"} dataArray={tdsArray} />

                <ChartComponent heading={"ph"} dataArray={phArray} />


            </View>
            
        </View>
    )
}


function ChartComponent({heading, dataArray})
{
  
  var dataToview=[];
  var a=0;
  for(var i=0; i<dataArray.length ; i++ )
  {
    if(i%2==0)
    {
      dataToview[a] = parseInt(dataArray[i]);
      a++;
    }
    
  }

  console.log("dataToview : " , dataToview )
  // console.log("dataToview length : " , dataToview.length ," data in length :",dataArray.length )

  return(
    <View style={{ alignItems:'center' }} >

      <Text style={{ color:'#bed7d0' , fontSize:24 , fontWeight:'bold' }} >{heading} </Text>

      <LineChart
          data={{
            // labels: ["1", "2", "3", "4", "5", "6", "7" , "8" , "9", "10"],
            datasets: [
              {
                data: dataToview
              }
            ]
          }}
          width={300} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#06674b",
            backgroundGradientFrom: "#06674b",
            backgroundGradientTo: "#06674b",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />


    </View>
  )
}