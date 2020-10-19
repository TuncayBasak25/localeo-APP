import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StatusBar, TouchableOpacity } from 'react-native';

import App from '../../App/App';

import { fullScreen, lay, bg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput } from '../../components/Components';


export function LoginScreen({ navigation })
{
  useEffect(() => {} , [])

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  App.loginCreds.username = username;
  App.loginCreds.password = password;

  const handleLogin = () => App.login()
                            .then( error => {
                              if (error) setError(error);
                              else navigation.navigate("Home");
                            })
                            .catch(e => console.log(e));

  return (
    <FullScreen style={[lay.jc.evenly]}>
      <WrappedButton
        wrapperStyle={[closeButtonWrapper]}
        textStyle={[primaryButtonText, text.white]}
        title="X"
        onPress={navigation.goBack}
      />
      <Text style={[text.center, text.orange, text.size(40)]}>Connexion</Text>

      <View>
        <WrappedTextInput
          wrapperStyle={inlineFormWrapper}
          textStyle={inlineFormText}
          value={username} placeholder="Username"
          blurOnSubmit={true} autoCompleteType="username"
          onChangeText={setUsername}
          onSubmitEditing={handleLogin}
        />
        <WrappedTextInput
          wrapperStyle={inlineFormWrapper}
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
          wrapperStyle={[primaryButtonWrapper]}
          textStyle={primaryButtonText}
          title="-> SE CONNECTER"
          onPress={handleLogin}
        />
        <WrappedButton
          wrapperStyle={[primaryButtonWrapper, bg.primary, lay.w('auto')]}
          textStyle={[primaryButtonText, text.white]}
          title="Créez un compte"
          onPress={ () => navigation.navigate("Register") }
        />
      </View>

    </FullScreen>
  );
}

export default LoginScreen;
