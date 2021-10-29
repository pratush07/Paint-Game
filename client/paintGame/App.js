import './shim';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, ImageBackground } from 'react-native';
import GameScreen from './screens/gameScreen'
import MainScreen from './screens/MainScreen';
import JoinScreen from './screens/JoinScreen';
import CodeScreen from './screens/CodeScreen';
import axios from 'axios';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  const [userID, setUserID] = useState("")
  useEffect(() => {
    UniqueID = Math.ceil(Math.random() * 100000);
    axios.post("https://7xlajwnbpa.execute-api.eu-west-1.amazonaws.com/prod/api/create/user/",
      {
        "mobile_num": UniqueID,
        "name": "DummyName"
      })
      .then((response) => {
        setUserID(response.data.id)
      })
      .catch(error => {
        console.log(error)
      })
  }, [userID])

  img = require('./assets/ScreenBG.png')
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Join">
          {props => <JoinScreen {...props} userID={userID} />}
        </Stack.Screen>
        <Stack.Screen name="Code" component={CodeScreen} initialParams={{ userID: userID }} />
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
