import React, { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';

export default function MainScreen({navigation}) {
  const [randomText, setRandomText] = useState("")
  useEffect(() => {
    setRandomText("" + (Math.floor(Math.random() * (9999 - 1000)) + 1000))
    console.log(randomText)
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