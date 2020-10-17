import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from './integrity/screens/Screens';

const Stack = createStackNavigator();


export default function Starter()
{
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { Object.entries(Screens).map( screen => (<Stack.Screen user name={screen[0]} key={screen[0]} component={screen[1]} />) ) }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
