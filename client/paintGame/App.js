import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable,ImageBackground } from 'react-native';
import GameScreen from './screens/gameScreen'
import MainScreen from './screens/MainScreen';
import JoinScreen from './screens/JoinScreen';
import CodeScreen from './screens/CodeScreen'

export default function App() {
  img = require('./assets/ScreenBG.png')
  return (
    <View style={styles.container}>
      {/*<GameScreen /> */}
      <MainScreen />
      {/* <JoinScreen /> */}
      {/* <CodeScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
