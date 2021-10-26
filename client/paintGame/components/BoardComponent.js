import React, {Component} from 'react'
import { View, Text, StyleSheet, Image, Animated } from 'react-native'
import config from '../tools/dimensons'

class BoardComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            topVal: new Animated.Value(0),
            leftVal: new Animated.Value(0),
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
    _onLayoutEvent = (event) =>
    {
        this.setState({boardHeight: event.nativeEvent.layout.height,
            boardWidth: event.nativeEvent.layout.width});
    }

    render() {
        return (
            <Animated.View onLayout={this._onLayoutEvent} style={{top: this.state.topVal,left: this.state.leftVal}}>
                <Image
                    source={require('../assets/PaintBoard.png')}
                />   
            </Animated.View>
        )
    }
}

export default BoardComponent
