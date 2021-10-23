import React from 'react'
import { StyleSheet, Image } from 'react-native'
import config from '../tools/dimensons'

const ControlPanel = ({ direction }) => {
    switch (direction) {
        case "left":
            return (
                <Image
                source={require('../assets/ArrrowButtonLeft.png')}
              />
            )  
        case "up":
            return (
                <Image
                source={require('../assets/ArrrowButtonUp.png')}
              />
            )
        case "right":
            return (
                <Image
                source={require('../assets/ArrrowButtonRight.png')}
              />
            )
        case "down":
            return (
                <Image
                source={require('../assets/ArrrowButtonDown.png')}
              />
            )
        default:
            break
    }
}

const styles = StyleSheet.create({
    panel: {
        backgroundColor: "#2C6EAC",
        width: '15%',
        height: config.deviceWidth * 0.15
    }
})

export default ControlPanel
