import React from 'react'
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const MainStack = createStackNavigator();

import {AppContextProvider} from '../utils/AppContext'
import Home from '../Screens/Home'
import VideoScreen from '../Screens/VideoStreaming'
const MainStackScreen =() =>(
    <MainStack.Navigator initialRouteName="Home" >
        <MainStack.Screen name="Home" component={Home} options={{ headerShown:false }}  />
        <MainStack.Screen name="VideoScreen" component={VideoScreen} options={{ headerShown:false }}  />
    </MainStack.Navigator>
);

export default ()=>(
    <NavigationContainer>
        <AppContextProvider>
            <MainStackScreen/>
        </AppContextProvider>
    </NavigationContainer>
) ;