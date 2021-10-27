import React, { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';
import * as Clipboard from 'expo-clipboard'

export default function MainScreen({navigation}) {
  const [copiedText, setCopiedText] = useState("")
  useEffect(() => {
    getCopiedText()
  })

  const getCopiedText = async () => {
    const text = await Clipboard.getStringAsync()
    setCopiedText(text)
  }
  return (
    <>
        <ImageBackground style = {styles.backGroundStyle} source = {require('../assets/ScreenBG.png')}>
            <TextInputComponent editable = {true} value={copiedText} />
            <ButtonComponent text = 'Join Room' copyButton = {false} navigation={navigation} toGame={true} />
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