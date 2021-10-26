import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import config from '../tools/dimensons'

const ScoreBoard = ({color, score}) => {
    return (
        <>
            <FontAwesome name="user" size={config.deviceWidth * 0.06} color={color} />
            <Text style={{fontSize: config.deviceWidth * 0.03}}>{score}</Text>
        </>
    )
}

export default ScoreBoard
