import React from 'react'
import {Image, Pressable } from 'react-native'

const FirePanel = (props) => {
    return (
        <Pressable onPress = {props.clicked}>
            <Image
                source={require('../assets/ButtonFire.png')}
            />
        </Pressable>
    )
}

export default FirePanel
