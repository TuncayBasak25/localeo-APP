import React, { useState } from 'react';
import { Text, SafeAreaView, ScrollView, View, Button, TextInput } from 'react-native';

import Api from 'localeo-api';
import App from '../App/App';

import { fullScreen, bg } from '../styles/styles';

import { FullScreen } from '../App/components/components';

export function HomeScreen({ navigation })
{
  return (
    <FullScreen>
      { App.logging && <Text>Logging</Text> }
      { App.user ? <>
        <Text>Hi {App.user.username}</Text>
        </>:
        <Text>You are not connected</Text>
      }
      <Button title="Login" onPress={ () => navigation.navigate("Login") } />
      <Button title="Register" onPress={ () => navigation.navigate("Register") } />
      <Button title="Message" onPress={ () => navigation.navigate("Message") } />
    </FullScreen>
  );
}

export default HomeScreen;
