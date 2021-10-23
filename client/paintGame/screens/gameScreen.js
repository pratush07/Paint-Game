import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ScoreBoardList from '../components/scoreBoardList'
import ControlPanel from '../components/controlPanel'
import FirePanel from '../components/firePanel'
import config from '../tools/dimensons'

const GameScreen = () => {
    return (
        <View style={{backgroundColor: '#9FC9FB'}}>
            <ScoreBoardList />
            <View style={styles.panels}>
                <ControlPanel direction={"up"} />
                <ControlPanel direction={"down"} />
                <FirePanel />
                <ControlPanel direction={"left"} />
                <ControlPanel direction={"right"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    panels: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: config.deviceHeight - config.deviceWidth * 0.18 - config.deviceHeight * 0.25
    }
})

export default GameScreen
