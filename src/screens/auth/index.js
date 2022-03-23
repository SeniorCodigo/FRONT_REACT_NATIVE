import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../auth/SplashScreen';
import LoginScreen from '../auth/LoginScreen';

const Auth = createNativeStackNavigator();

const AuthStack =()=> (
  <Auth.Navigator  initialRouteName="Splash" screenOptions={{ headerShown: false }} headerMode='none'>
    <Auth.Screen name="Login" component={LoginScreen} /> 
    <Auth.Screen name="Splash" component={SplashScreen} />
  </Auth.Navigator>
)

export default AuthStack;