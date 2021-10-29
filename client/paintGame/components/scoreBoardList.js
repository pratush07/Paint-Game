import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ScoreBoard from './scoreBoard'
import config from '../tools/dimensons'
import { EvilIcons } from '@expo/vector-icons';

const ScoreBoardList = (props) => {
    const [userColors, setuserColors] = useState([])
    useEffect(() => {
        var abc = [];
        props.userInfo.map(usr => {
            abc.push(Object.values(usr)[0].toLowerCase())})
        setuserColors(abc)
        //setuserColors(Object.values(props.userInfo))
    },[props.userInfo])


    // const colors = [
    //     "#1C2787",
    //     "#0AD106",
    //     "#FF0000",
    //     "#2ADCDC",
    //     "#D7942F",
    //     "#CFE547"
    // ]
    // const mockScores = [
    //     "5",
    //     "6",
    //     "5",
    //     "7",
    //     "1",
    //     "2"
    // ]
    return (
        <View style={styles.container}>
            <View style={styles.scoreBoardList}>
                {
                    userColors.map((color, index) => {
                        return (
                            <ScoreBoard key={index} color={color} score='1' />
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