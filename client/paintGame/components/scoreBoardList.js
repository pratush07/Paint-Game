import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ColorPropType } from 'react-native'
import ScoreBoard from './scoreBoard'
import config from '../tools/dimensons'
import { EvilIcons } from '@expo/vector-icons';

const ScoreBoardList = (props) => {
    const [userColors, setuserColors] = useState([])
    const [userScore, setuserScore] = useState([])
    useEffect(() => {
        setuserColors(props.userInfo)
        setuserScore(props.userScore)
        console.log(userColors)
        console.log(userScore)
    }, [props.userInfo, props.userScore])
    return (
        <View style={styles.container}>
            <View style={styles.scoreBoardList}>
                {
                    userColors.map(user => (
                        <ScoreBoard key={Object.keys(user)[0]} color={Object.values(user)[0].toLowerCase()} score={userScore[Object.keys(user)[0]] ? userScore[Object.keys(user)[0]].length : 0} />
                    )
                    )
                    // userColors.map((color, index) => {
                    //     return (
                    //         <ScoreBoard key={index} color={color} score={userScore[index]} />
                    //     )                       
                    // })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "28%",
        height: "5%",
        marginLeft: config.deviceWidth * 0.72,
        marginTop: config.deviceHeight * 0.05
    },
    scoreBoardList: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: 'wrap'
    },
})

export default ScoreBoardList