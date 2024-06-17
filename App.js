import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/Routes';
import React, { useCallback } from 'react';
import { Poppins_400Regular, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  const [hasLoadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black
  })


  return (
    <NavigationContainer>
        <StatusBar barStyle="light-content"/>
        <Routes />
      </NavigationContainer>
  );
}
