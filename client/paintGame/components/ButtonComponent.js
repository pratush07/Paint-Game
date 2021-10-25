import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';

export default  ButtonComponent = (props) =>{
    let [fontsLoaded] = useFonts({
        'Revalia-Regular':require('../assets/fonts/Revalia-Regular.ttf'),
      });
    if(!fontsLoaded)
    {   return(
            <Pressable style={[styles.buttonStyle, styles.shadowProp]} onPress={onPressLearnMore}>
                <View style = {styles.buttonContainer}>
                    <Text style={styles.text2}>{props.text}</Text>
                    {renderCopyLogo(props.copyButton)}
                </View>
            </Pressable>
        )
    } 
    else
    {
        return(
            <Pressable style={[styles.buttonStyle, styles.shadowProp]} onPress={onPressLearnMore}>
                <View style = {styles.buttonContainer}>
                    <Text style={styles.text}>{props.text}</Text>
                    {renderCopyLogo(props.copyButton)}
                </View>
            </Pressable>
        )
    }
}
renderCopyLogo = (copyButton) => 
{
    if(copyButton)
    {
        //return <Text style = {[styles.text,{paddingLeft:10}]}>2</Text>
        return (<Image style = {styles.logoStyle}
        source={require('../assets/copyLogo.png')}
       />)
    }
}
onPressLearnMore = () => {
    console.log('Clicked from ButtonComponent..')
}
const styles = StyleSheet.create({
    buttonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: '#2C6EAC',
        width: '80%',
        height: 50 ,
        margin:10
    },
    text: {
        fontSize: 18,
        lineHeight: 25.8,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily:'Revalia-Regular',
    },
    text2: {
        fontSize: 18,
        lineHeight: 25.8,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily:'Arial',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
    },
    logoStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 4, height: 6},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    }

});