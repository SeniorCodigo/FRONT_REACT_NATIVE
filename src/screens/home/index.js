import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

const Home = createNativeStackNavigator();

const HomeStack =()=> (
  <Home.Navigator  initialRouteName="Home" screenOptions={{ headerShown: false }} headerMode='none'>
    <Home.Screen name="Home" component={HomeScreen } /> 
  </Home.Navigator>
)

export default HomeStack;