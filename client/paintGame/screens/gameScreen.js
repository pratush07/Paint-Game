import { View, Text, StyleSheet } from 'react-native'
import ScoreBoardList from '../components/scoreBoardList'
import ControlPanel from '../components/controlPanel'
import FirePanel from '../components/firePanel'
import config from '../tools/dimensons'
import BoardComponent from '../components/BoardComponent'
import DotComponent from '../components/DotComponent'
import React, { Component } from 'react'
//import SafeArea from 'react-native-safe-area'

export default class GameScreen extends Component {

    constructor(props){
        super(props);
        // SafeArea.getSafeAreaInsetsForRootView()
        // .then((result) => {
        // console.log('SafeArea:'+result)
        // // { safeAreaInsets: { top: 44, left: 0, bottom: 34, right: 0 } }
        // })
        this.state ={
            dotX:0,
            dotY:0
        };
    }
    imageClicked = (direction) =>
    {
        dotX = this.state.dotX;
        dotY = this.state.dotY;
        switch (direction) 
        {
            case "left":
                if(dotX-10>0)
                    dotX-=10;
                break;
            case "up":
                if(dotY-10>0)
                    dotY-=10;
                break;
            case "right":
                console.log('config.deviceWidth'+config.deviceWidth+',DotX:'+dotX)
                if(dotX+10<config.deviceWidth)
                    dotX+=10;
                break;
            case "down":
                if(dotY+10<config.deviceHeight)
                    dotY+=10;
                break;
            default:
                break
        }
        this.setState({
            dotX:dotX,
            dotY:dotY
        })
    }
    render() {
    return (
        <View style={styles.screenContainer}>
            <ScoreBoardList />
            <View style = {styles.boardContainer}>
                <BoardComponent />
            </View>
            <DotComponent dotX = {this.state.dotX} dotY = {this.state.dotY} topic="room1" room_id="1" eventType="TRY" user_id={1} />
            <View style={styles.panels}>
                <ControlPanel direction={"up"} clicked={this.imageClicked}/>
                <ControlPanel direction={"down"} clicked={this.imageClicked}/>
                <FirePanel />
                <ControlPanel direction={"left"} clicked={this.imageClicked}/>
                <ControlPanel direction={"right"} clicked={this.imageClicked}/>
            </View>
        </View>
    )
  }
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

