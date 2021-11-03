import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable, Image, Platform, ToastAndroid, Alert } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-root-toast';
import IoT from '../config/IoT';
import axios from 'axios';

const ButtonComponent = (props) => {
    let [fontsLoaded] = useFonts({
        'Revalia-Regular': require('../assets/fonts/Revalia-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return (
            <Pressable style={[styles.buttonStyle, styles.shadowProp]} onPress={() => onPressLearnMore(props.text, props.navigation, props.toGame, props.randomText, props.isOwner, props.roomID, props.userID, props.topicId)}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text2}>{props.text}</Text>
                    {renderCopyLogo(props.copyButton)}
                </View>
            </Pressable>
        )
    }
    else {
        return (
            <Pressable style={[styles.buttonStyle, styles.shadowProp]} onPress={() => onPressLearnMore(props.text, props.navigation, props.toGame, props.randomText, props.isOwner, props.roomID, props.userID, props.topicId)}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>{props.text}</Text>
                    {renderCopyLogo(props.copyButton)}
                </View>
            </Pressable>
        )
    }
}
renderCopyLogo = (copyButton) => {
    if (copyButton) {
        //return <Text style = {[styles.text,{paddingLeft:10}]}>2</Text>
        return (<Image style={styles.logoStyle}
            source={require('../assets/copyLogo.png')}
        />)
    }
}
onPressLearnMore = (text, navigation, toGame, randomText, isOwner, roomID, userID, topicId) => {
    switch (text) {
        case "Create Room":
            // code for Room creation handler here
            navigation.navigate("Code")
            break;
        case "Join Room":
            if (toGame) {
                if (isOwner) {
                    axios.post("https://7xlajwnbpa.execute-api.eu-west-1.amazonaws.com/prod/api/start/room/", {
                        room_id: roomID,
                    })
                        .then((response) => {
                            navigation.navigate("Game", { topicId, roomID, userID })
                        })
                }
                else {
                    axios.get("https://7xlajwnbpa.execute-api.eu-west-1.amazonaws.com/prod/api/info/room/", {
                        params: { room_id: randomText }
                    })
                        .then((response) => {
                            if (response.data.data.status !== 'STARTED') {
                                Alert.alert('Game has not Started. Please Wait!')
                            }
                            else {
                                console.log(userID)
                                axios.post("https://7xlajwnbpa.execute-api.eu-west-1.amazonaws.com/prod/api/join/room/",
                                    {
                                        user_id: userID,
                                        room_id: randomText
                                    })
                                    .then((response) => {
                                        axios.get("https://7xlajwnbpa.execute-api.eu-west-1.amazonaws.com/prod/api/room/",
                                            {
                                                params: {
                                                    user_id: userID
                                                }
                                            }).then(response => {
                                                console.log(response.data)
                                                IoT.subscribe(response.data.Topic)
                                                IoT.on('message', (topic, load) => {
                                                    console.log(topic)
                                                })
                                                navigation.navigate("Game", { topicId: response.data.Topic, roomID: parseInt(randomText), userID })
                                            })
                                    })
                                    .catch(err => {
                                        console.log(err)
                                    })
                            }
                        })
                }
            } else {
                navigation.navigate("Join", { roomID, isOwner, topicId })
            }
            break;
        case "Copy Code":
            Clipboard.setString(randomText)
            if (Platform.OS === 'ios') {
                Toast.show(randomText + ' has been copyied!', {
                    duration: Toast.durations.LONG
                })
            } else {
                ToastAndroid.show(randomText + ' has been copyied!', ToastAndroid.LONG)
            }

            break;
        default:
            break;
    }
}
const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: '#2C6EAC',
        width: '80%',
        height: 50,
        margin: 10
    },
    text: {
        fontSize: 18,
        lineHeight: 25.8,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'Revalia-Regular',
    },
    text2: {
        fontSize: 18,
        lineHeight: 25.8,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'Arial',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
    },
    logoStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    }

});

export default ButtonComponent;