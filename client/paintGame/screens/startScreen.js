import React, { useState } from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback, Button, StyleSheet, ImageBackground } from 'react-native'
import axios from 'axios'
import { BASE_URL } from '../config/network'

const StartScreen = ({ setUserId, navigation }) => {
    const [mobile, setMobile] = useState("")
    const [name, setName] = useState("")
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/ScreenBG.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder={"Enter your mobile number"} value={mobile} onChangeText={(text) => {
                        setMobile(text)
                    }} />
                    <TextInput style={styles.input} placeholder={"Enter your username"} value={name} onChangeText={(text) => {
                        setName(text)
                    }} />
                    <TouchableWithoutFeedback style={styles.button} onPress={
                        async () => {
                            if (mobile != "" && name != "") {
                                // create a user
                                console.log(mobile)
                                console.log(name)
                                const data = await axios.post(BASE_URL + "/create/user/", {
                                    mobile_num: mobile,
                                    name: name
                                })
                                // setUserId(data.data.id)
                            }
                        }
                    }>
                        <View style={styles.button}>
                            <Text>
                                Register
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 40,
        margin: 12,
        borderRadius: 10,
        padding: 10,
        width: '60%',
        height: 50,
        margin: 10,
        backgroundColor: '#D6DDE3',
        fontFamily: 'Revalia-Regular',
        fontSize: 20,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    form: {
        marginTop: '115%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: "#D6DDE3",
        width: '20%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
})

export default StartScreen