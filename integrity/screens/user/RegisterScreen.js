import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import App from '../../App/App';

import { fullScreen, lay, bg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput } from '../../components/Components';


export function RegisterScreen({ navigation })
{
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  App.registerCreds.username = username;
  App.registerCreds.email = password;
  App.registerCreds.password = password;
  App.registerCreds.confirmPassword = confirmPassword;

  const handleRegister = () => App.register().then( () => navigation.navigate("Login") ).catch(e => console.log(e));

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener( 'keyboardDidShow', () => setKeyboardVisible(true) );
    const keyboardDidHideListener = Keyboard.addListener( 'keyboardDidHide', () => setKeyboardVisible(false) );
    return () => { keyboardDidHideListener.remove(); keyboardDidShowListener.remove(); };
   }, []);

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
