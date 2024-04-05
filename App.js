import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/Routes';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/pages/Welcome';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content"/>
      <Routes />
    </NavigationContainer>
  );
}


