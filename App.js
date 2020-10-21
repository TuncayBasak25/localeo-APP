import React, { Component } from 'react';
import { Text, View, Keyboard } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from './integrity/screens/Screens';

const Stack = createStackNavigator();

import App from './integrity/App/App';

export default class AppStarter extends React.Component
{
  constructor()
  {
    super();
    this.App = new App;
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          { Object.entries(Screens)
            .map( ([name, comp]) => (
              <Stack.Screen
                initialParams={{ App: this.App }}
                options={{headerShown: false}}
                name={name.slice(0, -6)}
                key={name}
                component={comp}
              />)
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
