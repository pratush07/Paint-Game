import { View, Text, StyleSheet } from 'react-native'
import ScoreBoardList from '../components/scoreBoardList'
import ControlPanel from '../components/controlPanel'
import FirePanel from '../components/firePanel'
import config from '../tools/dimensons'
import BoardComponent from '../components/BoardComponent'
import DotComponent from '../components/DotComponent'
import React, { Component } from 'react'
import IoT from '../config/IoT'
import axios from 'axios'

export default class GameScreen extends Component {

    constructor(props) {
        super(props);
        this.imageClicked = this.imageClicked.bind(this)
        this.fireClicked = this.fireClicked.bind(this)
        this.state = {
            dotX: 0,
            dotY: 0,
            boardX: 50,
            boardY: 0,
            boardPoints: [],
            userInfo: [],
            userScore: {}
        };
    }
    componentDidMount() {
        console.log("TopicID in GameScreen:"+this.props.route.params.topicId)
        console.log("roomid in GameScreen:" + this.props.route.params.roomID)
        axios.get("https://7xlajwnbpa.execute-api.eu-west-1.amazonaws.com/prod/api/info/room",{
            params:{room_id: this.props.route.params.roomID}
        })
        .then(response =>{
            this.setState({userInfo:response.data.data.user_info})
            Object.assign(this.state.userScore, response.data.data.coordinates)
        })
    }
    fireClicked = () => {
        cursorPoint = [this.state.dotX, this.state.dotY]
        boardCord = [this.state.boardX, this.state.boardY]
        boardWidth = config.boardWidth
        boardHeight = config.boardHeight
        
        if (cursorPoint[0] > boardCord[0] && cursorPoint[0] < (boardCord[0] + Math.floor(boardWidth))
            && cursorPoint[1] > boardCord[1] && cursorPoint[1] < (boardCord[1] + boardHeight)) {
            markonBoardX = cursorPoint[0] - boardCord[0];
            markonBoardY = cursorPoint[1] - boardCord[1];
            // add publish
            IoT.publish(
                this.props.route.params.topicId,
                JSON.stringify({
                    topic: this.props.route.params.topicId,
                    room_id: this.props.route.params.roomID,
                    eventType: "TRY",
                    user_id: this.props.route.params.userID,
                    x: markonBoardX,
                    y: markonBoardY,
                    timestamp: Date.now()
                })
            )
            IoT.on('message', (topic, payload) => {
                const json_payload = JSON.parse(payload.toString())
                console.log(json_payload)
                if (json_payload.eventType === 'HIT') {
                    this.setState({ boardPoints: this.state.boardPoints.concat([{ x: json_payload.x, y: json_payload.y }]) })
                } 
                if (json_payload.eventType === 'MISS') {

                }
            })
        }
    }
    getBoardCordinates = (Cord, boardDim) => {
        this.setState({
            boardX: Cord[1],
            boardY: Cord[0],
            boardWidth: boardDim[0],
            boardHeight: boardDim[1]
        })
    }
    imageClicked = (direction) => {
        dotX = this.state.dotX;
        dotY = this.state.dotY;
        switch (direction) {
            case "left":
                if (dotX - 10 > 0)
                    dotX -= 10;
                break;
            case "up":
                if (dotY - 10 > 0)
                    dotY -= 10;
                break;
            case "right":
                if (dotX + 10 < config.deviceWidth)
                    dotX += 10;
                break;
            case "down":
                if (dotY + 10 < config.deviceHeight)
                    dotY += 10;
                break;
            default:
                break
        }
        this.setState({
            dotX: dotX,
            dotY: dotY
        })
    }
    render() {
        return (
            <View style={styles.screenContainer}>
                <ScoreBoardList userInfo = {this.state.userInfo} userScore={this.state.userScore}/>
                <View style={styles.boardContainer}>
                    <BoardComponent getBoardCordinates={this.getBoardCordinates} userInfo = {this.state.userInfo} user_id = {this.props.route.params.userID} boardPoints={this.state.boardPoints.length > 0 ? this.state.boardPoints : []} />
                    <DotComponent dotX={this.state.dotX} dotY={this.state.dotY} userInfo = {this.state.userInfo} user_id = {this.props.route.params.userID} />
                </View>
                <View style={styles.panels}>
                    <ControlPanel direction={"up"} clicked={this.imageClicked} />
                    <ControlPanel direction={"down"} clicked={this.imageClicked} />
                    <FirePanel clicked={this.fireClicked} />
                    <ControlPanel direction={"left"} clicked={this.imageClicked} />
                    <ControlPanel direction={"right"} clicked={this.imageClicked} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    panels: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        top: config.deviceHeight - config.deviceHeight * 0.1
    },
    boardContainer: {
        backgroundColor: '#8fb4e1',
        height: '78%',
        marginTop: '3%',
        marginLeft: '2%',
        marginRight: '2%'
    },
    screenContainer: {
        backgroundColor: '#9FC9FB',
        height: '100%'
    }
})

