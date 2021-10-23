import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ScoreBoardList from '../components/scoreBoardList'

const GameScreen = () => {
    return (
        <View style={{backgroundColor: '#9FC9FB'}}>
            <ScoreBoardList />
        </View>
    )
}

export default GameScreen