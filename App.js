import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Keyboard } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Screens from './integrity/screens/Screens';

import {navbarHeight} from './integrity/styles/styles';
console.log(navbarHeight);

const Stack = createStackNavigator();

import App from './integrity/App/App';




export default function Starter()
{

  return (
    <></>
  );
}

// <NavigationContainer>
//   <Stack.Navigator>
//     { Object.entries(Screens)
//       .map( screen => (<Stack.Screen options={{headerShown: false}} name={screen[0]} key={screen[0]} component={screen[1]}
//     />) ) }
//   </Stack.Navigator>
// </NavigationContainer>
