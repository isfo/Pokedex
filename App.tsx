import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/Background';
import { Home } from './src/screens/Home';

export default function App() {
  return (

    <Background>
      <StatusBar
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </Background>
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
