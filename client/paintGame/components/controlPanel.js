import React, { Component } from 'react'
import { StyleSheet, Image, Pressable } from 'react-native'
import config from '../tools/dimensons'


export default class gameScreen extends Component {
    constructor(props)
    {
        super(props);
        this.imageClicked = this.imageClicked.bind(this);
    }
    imageClicked = (direction) => 
    {   
        this.props.clicked(direction)
    }
  render() {
    switch (this.props.direction) {
        case "left":
            return (
                <Pressable onPress = {() => {this.imageClicked('left')}}>
                    <Image
                        source={require('../assets/ArrrowButtonLeft.png')}
                    />
                </Pressable>
            )  
        case "up":
            return (
                <Pressable onPress = {() =>this.imageClicked('up')}>
                    <Image
                        source={require('../assets/ArrrowButtonUp.png')}
                    />
                </Pressable>
            )
        case "right":
            return (
                <Pressable onPress = {() => this.imageClicked('right')}>
                    <Image
                         source={require('../assets/ArrrowButtonRight.png')}
                    />
                </Pressable>
            )
        case "down":
            return (
                <Pressable onPress = {() => this.imageClicked('down')}>
                    <Image
                         source={require('../assets/ArrrowButtonDown.png')}
                    />
                </Pressable>
            )
        default:
            break
    }
  }
}

const styles = StyleSheet.create({
    panel: {
        backgroundColor: "#2C6EAC",
        width: '15%',
        height: config.deviceWidth * 0.15
    }
})

