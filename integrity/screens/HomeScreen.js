import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, ScrollView, View, Button, TextInput } from 'react-native';

import Api from 'localeo-api';
import App from '../App/App';

import { fullScreen, lay, bg, inlineFormWrapper, inlineFormText, primaryButtonWrapper, primaryButtonText } from '../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput } from '../components/Components';

export function HomeScreen({ navigation }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const focus = navigation.addListener('focus', () => {
      if (App.user && user !== App.user) setUser(App.user);
      if (!App.user && user !== null) setUser(null);
    });
    return focus;
  }, [navigation]);

  return (
    <FullScreen>
      { App.logging && <Text>Logging</Text> }
      { App.user ? <>
        <Text>Hi {App.user.username}</Text>
        </>:
        <Text>You are not connected</Text>
      }
      <WrappedButton wrapperStyle={inlineFormWrapper} title="Login" onPress={ () => navigation.navigate("Login") } />
      <WrappedButton wrapperStyle={inlineFormWrapper} title="Register" onPress={ () => navigation.navigate("Register") } />
      <WrappedButton wrapperStyle={inlineFormWrapper} title="Message" onPress={ () => navigation.navigate("Message") } />

      <WrappedTextInput
        wrapperStyle={inlineFormWrapper}
        textStyle={inlineFormText}
        placeholder="Test"
      />

      <WrappedButton
        wrapperStyle={[primaryButtonWrapper]}
        textStyle={primaryButtonText}
        title="Messag"
        onPress={ () => navigation.navigate("Message") }
      />

    </FullScreen>
  );
}

export default HomeScreen;
