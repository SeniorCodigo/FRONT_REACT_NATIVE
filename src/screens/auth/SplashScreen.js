import React, { useEffect } from 'react';
import {ImageBackground, StatusBar, useColorScheme, Image, StyleSheet} from 'react-native';

const  SplashScreen = ({ navigation })=> {

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    _goto()
  }, [])

  const _goto = () => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 3000)
  }

  return (
    <ImageBackground 
      source={require('../../utils/images/login/background.png')}
      style={[styles.container]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Image
        style={{ height:'70%', width:'70%' }}
        source={require('../../utils/images/login/github.png')}
        resizeMode={'contain'}
      />
    </ImageBackground>        
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default SplashScreen