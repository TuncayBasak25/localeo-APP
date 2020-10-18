import React, { useState } from 'react';
import { Text, SafeAreaView, View, StatusBar, TouchableOpacity } from 'react-native';

import { safeArea, container, position, text, flex, jc, ai, as, width, widthP, heightP, height, right, left, top, m, p, bg, color, fontSize, borderRadius, border } from '../../styleSheets/styles';

import Api from 'localeo-api';
import App from '../../App/App';


export default function LoginScreen({ navigation })
{
  const [username, setUsername] = useState(App.login.username);
  const [password, setPassword] = useState(App.login.password);

  return (
    <SafeAreaView style={[safeArea, bg.dark, jc.evenly, ai.center]}>
      <App.Button title="X" div={[position.absolute, width(50), height(50), as.end, top(20)]} text={[color.gray, fontSize(40)]} onPress={navigation.goBack} />

      <Text style={[text.center, color.orange, fontSize(40)]}>Connexion</Text>

      <View style={[widthP(80), jc.center, ai.center]} >
        <App.TextInput div={formControl} text={formText}
          placeholder="Username" placeholderTextColor={color.white.color} value={username}
          autoFocus={true} blurOnSubmit={true} autoCompleteType="username"
          onChangeText={val => { App.login.username = val; setUsername(val) }}  />
        <App.TextInput div={formControl} text={formText}
          placeholder="Password" placeholderTextColor={color.white.color}
          blurOnSubmit={true} autoCompleteType="password" secureTextEntry={true}
          onChangeText={val => { App.login.password = val; setPassword(val) }}  />
        <Text style={[text.center, color.white, fontSize(18), m.t(1)]}>Mot de passe oublié ?</Text>
      </View>

      <App.Button
      title="-> SE CONNECTER"
      div={[widthP(80), height(60), jc.center, ai.center, borderRadius(30), m.b(50), bg.orange]}
      text={[text.center, color.white,fontSize(20)]}
      onPress={navigation.goBack} />
      <App.BottomBar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const formControl = [jc.center, widthP(100), height(60), borderRadius(10), bg.gray, m.b(15)];
const formText = [color.white, fontSize(30), left(20)];
