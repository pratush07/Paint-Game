import './shim';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, ImageBackground } from 'react-native';
import GameScreen from './screens/gameScreen'
import MainScreen from './screens/MainScreen';
import JoinScreen from './screens/JoinScreen';
import CodeScreen from './screens/CodeScreen';
import IoT from './config/IoT';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  img = require('./assets/ScreenBG.png')
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Join" component={JoinScreen} />
        <Stack.Screen name="Code" component={CodeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
