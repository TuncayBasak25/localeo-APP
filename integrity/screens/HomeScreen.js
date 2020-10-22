import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, ScrollView, View, Button, TextInput, Keyboard } from 'react-native';

import Api from 'localeo-api';

import { fullScreen, text, lay, bg, inlineFormWrapper, inlineFormText, primaryButtonWrapper, primaryButtonText } from '../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput } from '../components/Components';

export function HomeScreen({ route, navigation })
{
  const { App } = route.params;
  const [frame, nextFrame] = useState(0);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [error, setError] = useState(false);

  const [userId, setUserId] = useState('');

  useEffect(App.keyBoardIsVisible(setKeyboardVisible), []);
  useEffect(App.nextFrameOnFocus(nextFrame, navigation), []);
  console.log(App.user ? App.user.id : '');
  console.log(App.corresponder ? App.corresponder.id : '');

  return (
      <FullScreen><ScrollView>
        { App.logging && <Text>Logging</Text> }
        { App.user ? <>
          <Text>Hi {App.user.username}</Text>
          <WrappedButton style={inlineFormWrapper} title="Profil" onPress={ () => navigation.navigate("Profile") } />
          </>:
          <Text>You are not connected</Text>
        }
        { !App.user && <>
          <WrappedButton style={inlineFormWrapper} title="Login" onPress={ () => navigation.navigate("Login") } />
          <WrappedButton style={inlineFormWrapper} title="Register" onPress={ () => navigation.navigate("Register") } />
        </>}
        <WrappedButton style={inlineFormWrapper} title="Search" onPress={ () => navigation.navigate("ArticleSearch") } />
        { (App.user && App.corresponder) && <WrappedButton style={inlineFormWrapper} title="Message" onPress={ () => navigation.navigate("Message") } /> }
        <WrappedButton style={inlineFormWrapper} title="Logout" onPress={ () => App.logout().then(() => nextFrame(frame => frame+1) ).catch(e => console.log(e)) } />

        { App.user && <WrappedTextInput
          style={inlineFormWrapper}
          textStyle={inlineFormText}
          placeholder="Change corresponder"
          onChangeText={setUserId}
          onSubmitEditing={ () => App.getCorresponder(userId).then( ({ error }) => { if (error) setError(error); nextFrame(frame => frame+1) } ).catch(e => console.log(e)) }
        /> }
        { error &&
          <View>
            <Text style={[text.center, text.secondary, text.size(15), lay.relW(60), lay.as.center]} >{error}</Text>
          </View> }

      </ScrollView></FullScreen>
  );
}

export default HomeScreen;
