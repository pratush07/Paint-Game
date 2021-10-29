import React, { useEffect } from 'react';
import { TextInput,StyleSheet } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';

export default function TextInputComponent(props) {
  const [name, setName] = React.useState(props.value);
  useEffect(() => {
    setName(props.value)
  }, [props.value])
  let [fontsLoaded] = useFonts({
    'Revalia-Regular':require('../assets/fonts/Revalia-Regular.ttf'),
  });

  return (
    <TextInput
      style={styles.input}
      placeholder="Enter Room Code"
      keyboardType="numeric"
      editable = {props.editable}
      value = {name}
      onChangeText={value => {
          setName(value); 
          console.log(name)
        }
      }
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderRadius:10,
    padding: 10,
    width: '80%',
    height: 50,
    margin:10,
    backgroundColor:'#D6DDE3',
    fontFamily:'Revalia-Regular',
    fontSize:20,
  },
});