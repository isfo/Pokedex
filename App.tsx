import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { Background } from './src/components/Background';
import { PokemonContextProvider } from './src/contexts/PokemonContext';
import { Home } from './src/screens/Home';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from "expo-app-loading";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { DetailPage } from './src/screens/DetailPage';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });


  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }



  return (
    <PokemonContextProvider>
      <Routes />
    </PokemonContextProvider>
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

