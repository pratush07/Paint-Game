import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ScoreBoardList from '../components/scoreBoardList'
import ControlPanel from '../components/controlPanel'
import FirePanel from '../components/firePanel'
import config from '../tools/dimensons'
import BoardComponent from '../components/BoardComponent'
const GameScreen = () => {
    return (
        <View style={styles.screenContainer}>
            <ScoreBoardList />
            <View style = {styles.boardContainer}>
                <BoardComponent />
            </View>
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
        position:'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        top: config.deviceHeight - config.deviceHeight * 0.1
    },
    boardContainer: {
        backgroundColor:'#8fb4e1', 
        height:'78%', 
        marginTop:'3%', 
        marginLeft:'2%',
        marginRight:'2%'
    },
    screenContainer: {
        backgroundColor: '#9FC9FB', 
        height:'100%'
    }
})

export default GameScreen
