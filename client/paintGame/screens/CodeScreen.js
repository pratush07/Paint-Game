import React, { Component} from 'react';
import { StyleSheet} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';
import IoT from '../config/IoT';
import axios from 'axios';

export default class CodeScreen extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      roomID:0,
      userID:props.route.params.userID,
      topicId:''
    }
  }
  componentDidMount()
  {
    axios.post("https://7xlajwnbpa.execute-api.eu-west-1.amazonaws.com/prod/api/create/room/",
    { 
    user_id: this.state.userID,
    name: "New Room" + this.state.userID
    })
    .then((response)=>{
      this.setState({roomID:response.data.id})
      axios.get("https://7xlajwnbpa.execute-api.eu-west-1.amazonaws.com/prod/api/room/",
      { params: { user_id: this.state.userID } })
      .then((response)=>{
        this.setState({topicId:response.data.Topic})
        IoT.subscribe(this.state.topicId)
        IoT.on('message', (topic, load) => {
          console.log(topic)
        })
      })
      .catch(error =>
        {
        console.log(error)
      })
    })
    .catch(error =>{
      console.log(error)
    }) 
  }
  render() {
    return (
      <>
        <ImageBackground style = {styles.backGroundStyle} source = {require('../assets/ScreenBG.png')}>
            <TextInputComponent editable = {false} value = {this.state.roomID+''} />
            <ButtonComponent text = 'Copy Code' copyButton = {true} randomText={this.state.roomID+''}/>
            <ButtonComponent text = 'Join Room' copyButton = {false} navigation={this.props.navigation} roomID={this.state.roomID} isOwner={true}/>
        </ImageBackground>
    </>
    )
  }
}

const styles = StyleSheet.create({
    backGroundStyle:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        paddingBottom: 40
    }
})