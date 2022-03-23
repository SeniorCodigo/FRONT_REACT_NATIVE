import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from '../src/screens/auth';
import HomeScreen from './screens/home/HomeScreen';

const RootStack = createNativeStackNavigator();

function App() {

    return (
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false}}>
          <RootStack.Screen name='Auth' component={AuthStack}/>
          <RootStack.Screen name='Home' component={HomeScreen}/>
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;