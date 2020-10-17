import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, SafeAreaView, ScrollView, View, Button, TextInput } from 'react-native';

import Styles from '../styleSheets/styles';

import Api from 'localeo-api';
import App from '../App/App';


export default function HomeScreen({ navigation })
{
  const [__refresher, __setRefresh] = useState(false);
  const refresh = () => __setRefresh(!__refresher);

  let testVar = App.testVar ? App.testVar : null;
  const setTestVar = newTestVar => testVar = newTestVar;

  if (!App.user && !App.logging) App.autoLogin().then( () => { refresh() } ).catch(e => console.log(e));

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        { App.logging && <Text>Logging</Text> }
        { App.user ? <>
          <Text>Hi {App.user.username}</Text>
          <TextInput style={Styles.textInput} placeHolder="Let's test!" onChangeText={setTestVar} />
          <Button title="Save this!" onPress={ () => { App.testVar = testVar; refresh(); } } />
          </>:
          <Text>You are not connected</Text>
        }
        <Button title="Login" onPress={ () => navigation.navigate("Login") } />
        <Button title="Register" onPress={ () => navigation.navigate("Register") } />
      </ScrollView>

      <App.BottomBar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
