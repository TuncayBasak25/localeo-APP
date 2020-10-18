import React, { useState } from 'react';
import { Text, Image, SafeAreaView, View, StatusBar, TouchableOpacity } from 'react-native';

import { safeArea, container, position, windowHeight, text, flex, jc, ai, as, minVh, width, widthP, heightP, height, right, left, top, m, p, bg, color, fontSize, borderRadius, border } from '../../styleSheets/styles';

import Api from 'localeo-api';
import App from '../../App/App';


export default function RegisterScreen({ navigation })
{
  const [username, setUsername] = useState(App.register.username);
  const [email, setEmail] = useState(App.register.email);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <View style={[safeArea, height(windowHeight), bg.dark, jc.evenly, ai.center]} >
      <App.Button title="X" div={[position.absolute, width(50), height(50), as.end, top(20)]} text={[color.gray, fontSize(40)]}
      onPress={navigation.goBack} />

      <Text style={[text.center, color.orange, fontSize(40)]}>Créer un compte</Text>

      <View style={[widthP(80), jc.center, ai.center]} >
        <App.TextInput div={formControl} text={formText}
          placeholder="Username" placeholderTextColor={color.white.color} value={username}
          blurOnSubmit={true} autoCompleteType="username"
          onChangeText={val => { App.login.username = val; setUsername(val) }}  />
        <App.TextInput div={formControl} text={formText}
          placeholder="Email" placeholderTextColor={color.white.color} value={email}
          blurOnSubmit={true} autoCompleteType="email"
          onChangeText={val => { App.register.email = val; setUsername(val) }}  />
        <App.TextInput div={formControl} text={formText}
          placeholder="Password" placeholderTextColor={color.white.color}
          blurOnSubmit={true} autoCompleteType="password" secureTextEntry={true}
          onChangeText={val => { App.register.password = val; setPassword(val) }}  />
        <App.TextInput div={formControl} text={formText}
          placeholder="Confirmation" placeholderTextColor={color.white.color}
          blurOnSubmit={true} autoCompleteType="password" secureTextEntry={true}
          onChangeText={val => { App.register.confirmPassword = val; setConfirmPassword(val) }}  />
      </View>
      <View style={[widthP(80), jc.center, ai.center]} >
        <App.Button
          title="-> CREATION DU COMPTE"
          div={[widthP(100), height(60), jc.center, ai.center, borderRadius(30), m.v(50), bg.orange]}
          text={[text.center, color.gray, fontSize(20)]}
          onPress={navigation.goBack} />
        <App.Button
          title="-> SE CONNECTER"
          div={[widthP(80), height(40), jc.center, ai.center, borderRadius(30), bg.gray]}
          text={[text.center, color.white, fontSize(20)]}
          onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
}

const formControl = [jc.center, widthP(100), height(60), borderRadius(10), bg.gray, m.b(15)];
const formText = [color.white, fontSize(30), left(20)];
