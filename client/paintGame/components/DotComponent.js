import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import config from '../tools/dimensons'

export default class DotComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            x:0,
            y:0,
            color:''
        }
        if(this.props.userInfo.length)
        {
            color = this.props.userInfo.filter(word => Object.keys(word)[0] == this.props.user_id)
            console.log(color)
            this.setState({color: Object.values(color[0])[0].toLowerCase()})
        }
    }
    // _onLayoutEvent = (event) =>
    // {
    //     this.setState({x:event.nativeEvent.layout.x,y:event.nativeEvent.layout.y})
    // }
    componentWillReceiveProps(nextProps) 
    {  
        if(nextProps.dotX != this.state.x) {
         // here you know the changed ocurred to X
          this.setState({ x: nextProps.dotX });
        }
        if(nextProps.dotY != this.state.y) {
        // here you know the changed ocurred to Y
            this.setState({ y: nextProps.dotY });
        }
    }
    render() 
    {
        return (
            <View /* onLayout={this._onLayoutEvent} */ style = {{position:'absolute',top:this.state.y,left:this.state.x}}>
                <FontAwesome name="crosshairs" size={config.deviceWidth * 0.06} color= {this.state.color} />
            </View>
        )
    }
}
