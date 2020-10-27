import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, ScrollView, View, Button, TextInput, Keyboard, Image } from 'react-native';

import Api from 'localeo-api';

import { fullScreen, text, lay, bg, mg, inlineFormWrapper, inlineFormText, primaryButtonWrapper, primaryButtonText } from '../styles/styles';

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
        { App.logging && <Text>Connexion</Text> }
        { App.user ? <>
          <Text style={[mg.t(20), text.center, text.size(18), text.orange]}>Bonjour {App.user.username} !</Text>
          <WrappedButton style={inlineFormWrapper} title="Votre profil" onPress={ () => navigation.navigate("Profile") } />
          <WrappedButton style={inlineFormWrapper} title="Poster une annonce" onPress={ () => navigation.navigate("ArticlePost") } />
          </>:
          <Text style={[text.center, text.orange, text.size(14), mg.t(20), mg.b(20)]}>Vous n'êtes pas connecté(e)</Text>
        }

        <View>
        <Text style={[text.center, text.orange, text.size(18), mg.t(20), mg.b(20)]}>
          Bienvenue sur
        </Text>
        <Image
          style={[lay.maxW(250), lay.relW(80), lay.h(140), lay.as.center, mg.b(80),]}
          source={require('../../assets/splash.png')}
        />
        </View>

        { !App.user && <>
          <WrappedButton style={inlineFormWrapper} title="Connexion" onPress={ () => navigation.navigate("Login") } />
          <WrappedButton style={inlineFormWrapper} title="Enregistrement" onPress={ () => navigation.navigate("Register") } />
        </>}
        { (App.user && App.corresponder) && <WrappedButton style={inlineFormWrapper} title="Message" onPress={ () => navigation.navigate("Message") } /> }

        { App.user && <>
          <WrappedButton style={inlineFormWrapper} title="Déconnexion" onPress={ () => App.logout().then(() => nextFrame(frame => frame+1) ).catch(e => console.log(e)) } />
        </>}

        <WrappedButton style={inlineFormWrapper} title="Article search" onPress={ () => navigation.navigate("ArticleSearch") } />

        { App.user && <WrappedTextInput
          style={inlineFormWrapper}
          textStyle={inlineFormText}
          placeholder="Changer d'interlocuteur"
          onChangeText={setUserId}
          onSubmitEditing={ () => App.getCorresponder(userId).then( ({ error }) => { if (error) setError(error); nextFrame(frame => frame+1) } ).catch(e => console.log(e)) }
        /> }
        
        { error && <Text style={[text.center, text.secondary, text.size(15), lay.relW(60), lay.as.center]} >{error}</Text>}

      </ScrollView></FullScreen>
  );
}

export default HomeScreen;
