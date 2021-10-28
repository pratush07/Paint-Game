import React, { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';
import IoT from '../config/IoT'

export default function MainScreen({navigation}) {
  const [roomId, setRoomId] = useState("")
  useEffect(() => {
    // code for creating room
    // code for getting room info

    IoT.on('connect', () => {
      console.log('userid' + 'has connected...')
      IoT.subscribe('topic_id')
    })
  }, [])
  return (
    <>
        <ImageBackground style = {styles.backGroundStyle} source = {require('../assets/ScreenBG.png')}>
            <TextInputComponent editable = {false} value = {randomText} />
            <ButtonComponent text = 'Copy Code' copyButton = {true} randomText={randomText}/>
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