import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import { fullScreen, lay, bg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,  
  closeButtonWrapper,
  mg
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput } from '../../components/Components';

import { AntDesign } from '@expo/vector-icons';


export function LoginScreen({ route, navigation })
{
  const { App } = route.params;
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
      <Image
          style={[lay.maxW(200), lay.relW(80), lay.h(140), lay.as.center]}
          source={require('../../../assets/splash.png')}
        />
      </View>

      <View>
        <WrappedTextInput
          style={inlineFormWrapper}
          textStyle={inlineFormText}
          value={username} placeholder="Pseudo"
          blurOnSubmit={true} autoCompleteType="username"
          onChangeText={setUsername}
          onSubmitEditing={handleLogin}
        />
        <WrappedTextInput
          style={inlineFormWrapper}
          textStyle={inlineFormText}
          value={password} placeholder="Mot de passe" secureTextEntry={true}
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
          subStyle={[lay.row, lay.jc.center, lay.ai.center]}
          onPress={handleLogin}
        >
        <AntDesign style={mg.h(30)} name="login" size={30} color="black" />
        <Text style={[lay.grw(1), text.size(20)]}>
          SE CONNECTER
        </Text>
        </WrappedButton>

        <WrappedButton
          style={[primaryButtonWrapper, bg.primary]} 
          subStyle={[lay.row, lay.jc.center, lay.ai.center]}
          onPress={ () => navigation.navigate("Register") }
        >
        <AntDesign style={mg.h(30)} name="pluscircleo" size={30} color="#A6BCD0" />
        <Text style={[lay.grw(1), text.size(20), text.white]}>
          CREER UN COMPTE
        </Text>
        </WrappedButton>

      </View>

    </FullScreen>
  );
}

export default LoginScreen;
