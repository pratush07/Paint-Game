import React from 'react';
import { StyleSheet} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import ButtonComponent from '../components/ButtonComponent';

export default function MainScreen() {
  return (
    <>
        <ImageBackground style = {styles.backGroundStyle} source = {require('../assets/ScreenBG.png')}>
            <ButtonComponent text = 'Create Room' copyButton = {false}/>
            <ButtonComponent text = 'Join Room' copyButton = {false}/>
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