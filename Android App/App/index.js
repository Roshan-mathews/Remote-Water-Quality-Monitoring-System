// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Home from './Screens/Home';

// import navigation from './Config/Navigation'
import Navigation from './Config/Navigation';
export default function App() {
  return (
    // <Home/>
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
