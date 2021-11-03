import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function MaskComponent() {
  return (
        <>
          <ImageBackground style={styles.backGroundStyle} source={require('../assets/looser.gif')} />
        </>
  );
}

const styles = StyleSheet.create({
    backGroundStyle: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 40
      }
})