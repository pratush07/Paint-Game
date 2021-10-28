import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';
import axios from 'axios'

// import IoT from '../config/IoT'
import { BASE_URL } from '../config/network'

export default function MainScreen({ navigation }) {
  const [roomId, setRoomId] = useState("1")
  useEffect(() => {
    user_id = 1
    // create room 
    fetch_room_id(1)
    // subscribe the room
    // IoT.on("connect", () => {
    //   console.log(user_id + "connected")
    //   IoT.subscribe(roomId)
    // })
  }, [])

  const fetch_room_id = async (user_id) => {
    const data = await axios.post(BASE_URL + '/create/room/', {
      user_id: 10,
      name: 'room'
    })
    console.log(data)
  }
  return (
    <>
      <ImageBackground style={styles.backGroundStyle} source={require('../assets/ScreenBG.png')}>
        <TextInputComponent editable={false} value={roomId} />
        <ButtonComponent text='Copy Code' copyButton={true} roomId={roomId} />
        <ButtonComponent text='Join Room' copyButton={false} navigation={navigation} />
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