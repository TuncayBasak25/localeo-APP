import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Keyboard } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from './integrity/screens/Screens';

import {fullScreen} from './integrity/styles/styles';

const Stack = createStackNavigator();

import App from './integrity/App/App';




export default function Starter()
{

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { Object.entries(Screens)
          .map( ([name, comp]) => (<Stack.Screen options={{headerShown: false}} name={name} key={name} component={comp}
        />) ) }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
