import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable,ImageBackground } from 'react-native';
import MainScreen from './src/js/Screens/MainScreen';
import JoinScreen from './src/js/Screens/JoinScreen';
import CodeScreen from './src/js/Screens/CodeScreen'
//import AppLoading from 'expo-app-loading';


export default function App() {
  img = require('./assets/ScreenBG.png')
  return (
    <View style={styles.container}>
      {/* <MainScreen /> */}
      {/* <JoinScreen /> */}
      <CodeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
