import React, { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';
import IoT from '../config/IoT'

export default function MainScreen({navigation}) {
  const [roomId, setRoomId] = useState("28")
  useEffect(() => {
    // code for creating room
    // code for getting room info
    console.log("here!!!!")
    IoT.subscribe("roomtest-28")
    IoT.on('message', (topic, load) => {
      console.log(topic)
    })
  }, [])
  return (
    <>
        <ImageBackground style = {styles.backGroundStyle} source = {require('../assets/ScreenBG.png')}>
            <TextInputComponent editable = {false} value = {roomId} />
            <ButtonComponent text = 'Copy Code' copyButton = {true} randomText={roomId}/>
            <ButtonComponent text = 'Join Room' copyButton = {false} navigation={navigation} />
        </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
    backGroundStyle:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        paddingBottom: 40
    }
})