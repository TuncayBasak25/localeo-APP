import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import { fullScreen, lay, bg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput } from '../../components/Components';


export function LoginScreen({ route, navigation })
{
  const { App } = route.params;console.log(App.categories);
  const [frame, nextFrame] = useState(0);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(App.keyBoardIsVisible(setKeyboardVisible), []);
  useEffect(App.nextFrameOnFocus(nextFrame, navigation), []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => App.login(username, password).then( res => { if (res.error) setError(res.error); else navigation.navigate("Home"); }).catch(e => console.log(e));

  return (
    <FullScreen style={[lay.jc.evenly]}>
      { !isKeyboardVisible && <Text style={[text.center, text.orange, text.size(40)]}>Connexion</Text> }

      <View>
        <WrappedTextInput
          style={inlineFormWrapper}
          textStyle={inlineFormText}
          value={username} placeholder="Username"
          blurOnSubmit={true} autoCompleteType="username"
          onChangeText={setUsername}
          onSubmitEditing={handleLogin}
        />
        <WrappedTextInput
          style={inlineFormWrapper}
          textStyle={inlineFormText}
          value={password} placeholder="Password" secureTextEntry={true}
          blurOnSubmit={true} autoCompleteType="password"
          onChangeText={setPassword}
          onSubmitEditing={handleLogin}
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
          title="-> SE CONNECTER"
          onPress={handleLogin}
        />
        <WrappedButton
          style={[primaryButtonWrapper, bg.primary, lay.w('auto')]}
          textStyle={[primaryButtonText, text.white]}
          title="Créez un compte"
          onPress={ () => navigation.navigate("Register") }
        />
      </View>

    </FullScreen>
  );
}

export default LoginScreen;
