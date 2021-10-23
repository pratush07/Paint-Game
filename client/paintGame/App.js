import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './screens/gameScreen'

export default function App() {
  return (
    <View>
      <GameScreen />
    </View>
  );
}