import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, ColorPropType } from 'react-native'
import ScoreBoard from './scoreBoard'
import config from '../tools/dimensons'
import { EvilIcons } from '@expo/vector-icons';

const ScoreBoardList = (props) => {
    const [userColors, setuserColors] = useState([])
    const [userScore, setuserScore] = useState([])
    useEffect(() => {
        var abc = [];
        props.userInfo.map(usr => {
            abc.push(Object.values(usr)[0].toLowerCase())})
        setuserColors(abc)
        if (Object.keys(props.userScore).length > 0) {
            const coordinates = Object.values(props.userScore)
            console.log(coordinates)
            const scores = coordinates.map(arr => {
                return arr.length
            })
            console.log(scores)
            setuserScore(scores)
        }
        //setuserColors(Object.values(props.userInfo))
    },[props.userInfo, props.userScore])
    return (
        <View style={styles.container}>
            <View style={styles.scoreBoardList}>
                {
                    userColors.map((color, index) => {
                        return (
                            <ScoreBoard key={index} color={color} score={userScore[index]} />
                        )                       
                    })
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