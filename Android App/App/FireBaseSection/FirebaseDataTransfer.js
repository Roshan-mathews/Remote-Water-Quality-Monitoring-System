// import React from 'react';

// import firebase from '../FireBaseSection/FirebaseCon';
// var database = firebase.database();


// // export function writeUserData( SwitchName , SwitchValue) 
// // {
// //     database.ref('SwitchData/' ).set({
// //       SwitchName: SwitchValue,
// //     });
// // }

// // update will replace the data 



// // read data from db when app started 
// export function readOnce()
// {
//   const dbRef = firebase.database().ref();
//   dbRef.child("SwitchData").get().then((snapshot) => 
//   {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => 
//   {
//     console.error(error);
//   });
// }
// // read data from db when app started 






// // SEND DATA TO FIREBASE
// export function Fbsend_phBase( SwitchValue) 
// {
//     console.log("phBase : ", SwitchValue) ;
//     database.ref('SwitchData/' ).update({
//       phBase: SwitchValue,
//     });
// }
// export function Fbsend_phAcidic( SwitchValue) 
// {
//   console.log("phAcidic : ", SwitchValue) ;
//     database.ref('SwitchData/' ).update({
//       phAcidic: SwitchValue,
//     });
// }



// export function Fbsend_NutrientA( SwitchValue) 
// {
//   console.log("NutrientA : ", SwitchValue) ;
//     database.ref('SwitchData/' ).update({
//       NutrientA: SwitchValue,
//     });
// }
// export function Fbsend_NutrientB( SwitchValue) 
// {
//   console.log("NutrientB : ", SwitchValue) ;
//     database.ref('SwitchData/' ).update({
//       NutrientB: SwitchValue,
//     });
// }
// export function Fbsend_NutrientC( SwitchValue) 
// {
//   console.log("NutrientC : ", SwitchValue) ;
//     database.ref('SwitchData/' ).update({
//       NutrientC: SwitchValue,
//     });
// }
// export function Fbsend_WaterPump( SwitchValue) 
// {r
//   console.log("WaterPump : ", SwitchValue) ;
//     database.ref('SwitchData/' ).update({
//       WaterPump: SwitchValue,
//     });
// }
// export function Fbsend_Light( SwitchValue) 
// {
//   console.log("Light : ", SwitchValue) ;
//     database.ref('SwitchData/' ).update({
//       Light: SwitchValue,
//     });
// }
// // SEND DATA TO FIREBASE