import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';
import * as Clipboard from 'expo-clipboard'

export default function JoinScreen({ navigation, route, userID }) {
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
      <ImageBackground style={styles.backGroundStyle} source={require('../assets/ScreenBG.png')}>
        <TextInputComponent editable={true} value={copiedText} />
        <ButtonComponent text='Join Room' copyButton={false} randomText={copiedText} navigation={navigation} toGame={true} isOwner={route.params.isOwner} userID={userID} roomID={route.params.roomID}/>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backGroundStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40
  }
})