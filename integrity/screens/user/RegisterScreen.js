import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import { fullScreen, lay, bg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput } from '../../components/Components';


export function RegisterScreen({ route, navigation })
{
  const { App } = route.params;
  const [frame, nextFrame] = useState(0);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(App.keyBoardIsVisible(setKeyboardVisible), []);
  useEffect(App.nextFrameOnFocus(nextFrame, navigation), []);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = () => App.register(username, email, password, confirmPassword).then( res => { if (res.error) setError(res.error); else navigation.navigate("Login"); } ).catch(e => console.log(e));

  return (
    <FullScreen style={[isKeyboardVisible ? lay.jc.around : lay.jc.evenly]}>
      { !isKeyboardVisible && <Text style={[text.center, text.orange, text.size(40)]}>Créer un compte</Text> }

      <View>
        <WrappedTextInput
          style={inlineFormWrapper}
          textStyle={inlineFormText}
          value={username} placeholder="Entrez votre username"
          blurOnSubmit={true} autoCompleteType="password"
          onChangeText={setUsername}
          onSubmitEditing={handleRegister}
        />
        <WrappedTextInput
          style={inlineFormWrapper}
          textStyle={inlineFormText}
          value={email} placeholder="Enrez votre email"
          blurOnSubmit={true} autoCompleteType="email"
          onChangeText={setEmail}
          onSubmitEditing={handleRegister}
        />
        <WrappedTextInput
          style={inlineFormWrapper}
          textStyle={inlineFormText}
          value={password} placeholder="Mot de passe"  secureTextEntry={true}
          blurOnSubmit={true} autoCompleteType="password"
          onChangeText={setPassword}
          onSubmitEditing={handleRegister}
        />
        <WrappedTextInput
          style={inlineFormWrapper}
          textStyle={inlineFormText}
          value={confirmPassword} placeholder="Confirmer votre mot de passe" secureTextEntry={true}
          blurOnSubmit={true} autoCompleteType="password"
          onChangeText={setConfirmPassword}
          onSubmitEditing={handleRegister}
        />
        { error &&
          <View>
            <Text style={[text.center, text.secondary, text.size(15), lay.relW(60), lay.as.center]} >{error}</Text>
          </View> }
      </View>

      <View>
        <WrappedButton
          style={[primaryButtonWrapper]}
          textStyle={primaryButtonText}
          title="-> CREATION DU COMPTE"
          onPress={handleRegister}
        />
        <WrappedButton
          style={[primaryButtonWrapper, bg.primary, lay.w('auto')]}
          textStyle={[primaryButtonText, text.white]}
          title="CONNEXION"
          onPress={ () => navigation.navigate("Login") }
        />
      </View>

    </FullScreen>
  );
}

export default RegisterScreen;
