import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/Routes';
import React, { useCallback } from 'react';
import { Poppins_400Regular, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black } from '@expo-google-fonts/poppins'
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  const [hasLoadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black
  })

  const onLayoutRootView = useCallback(async () => {
    if (hasLoadedFonts) {
      await SplashScreen.hideAsync();
    }

  }, [hasLoadedFonts]);
  if (!hasLoadedFonts) {
    return null
  }

  return (
    <NavigationContainer>
        <StatusBar barStyle="light-content"/>
        <Routes />
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


