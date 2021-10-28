import React, {Component} from 'react'
import { View, Text, StyleSheet, Image, Animated } from 'react-native'
import config from '../tools/dimensons'
import { FontAwesome } from '@expo/vector-icons'; 

class BoardComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            topVal: new Animated.Value(0),
            leftVal: new Animated.Value(50),
            boardHeight: '',
            boardWidth: ''
          }
    }
    componentDidMount()
    {
        this.animateComponent();
    }
    animateComponent = () => 
    {
        var newq = this.makeNewPosition();
        Animated.timing(this.state.topVal, {
            toValue: newq[0],
            duration: 1000,
            useNativeDriver: false
        }).start()
        Animated.timing(this.state.leftVal, {
            toValue: newq[1],
            duration: 1000,
            useNativeDriver: false
        }).start(({ finished }) => {
            this.props.getBoardCordinates(newq,[this.state.boardWidth, this.state.boardHeight])
            this.animateComponent()
          })
    } 
    makeNewPosition = () =>
    {
        var x = Math.random()
        var y = Math.random()
        var nh = Math.floor(y * 380);
        var nw = Math.floor(x * 170);
        return [nh,nw];       
    }

    render() {
        return (
            <Animated.View style={{position:'absolute', top: this.state.topVal,left: this.state.leftVal}}>

                <View style={{ backgroundColor: '#486B83',borderWidth: 2, borderRadius: 10, borderColor: '#204056', height:config.boardHeight,width:config.boardWidth}}>
                {   
                    
                    this.props.boardPoints.map((item,i) => {
                        return (<FontAwesome name="circle" size= {10} color='red' key = {i} style = {{position:'relative', top: item.y, left: item.x}}/>);
                    })
                }
                </View>
            </Animated.View>
        )
    }
}

export default BoardComponent
