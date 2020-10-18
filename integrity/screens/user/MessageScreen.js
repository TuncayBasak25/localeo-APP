import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Keyboard, Image, View, ScrollView, Button, Dimensions } from 'react-native';

import Styles, { safeArea, windowHeight, text, flex, flexRow, m, position, bottom, right, top, jc, ai, as, minVh, widthP, heightP, width, height, bg, fontSize, color, left, borderRadius } from '../../styleSheets/styles';

import Api from 'localeo-api';
import App from '../../App/App';

export default function MessageScreen({ navigation })
{
  const [myMessage, setMyMessage] = useState(App.myMessage ? App.myMessage : '');
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  Keyboard.addListener("keyboardDidShow", e => setKeyboardHeight(e.endCoordinates.height) );
  Keyboard.addListener("keyboardDidHide", e => setKeyboardHeight(0) );

  return (
    <View style={[safeArea, height(windowHeight - keyboardHeight), bg.dark]} >
      <View style={[widthP(100), height(150), flexRow, bg.gray, jc.center, ai.center, borderRadius(25)]} >
        <View style={[position.absolute, widthP(100)]} >
          <App.Button div={[as.start, width(50), height(50), left(15)]}
            title="<-" text={[text.center, fontSize(40), color.white]} onPress={navigation.goBack} />
        </View>
        <App.Button div={[heightP(90), jc.center, ai.center]} sub={[jc.center, ai.center]}>
          <Image style={[heightP(60), borderRadius(50), { aspectRatio: 1 }]} source={ App.corresponder.avatar } />
          <Text style={[fontSize(30), color.white]}>{ App.corresponder.username }</Text>
        </App.Button>
      </View>
      <ScrollView style={[widthP(90), as.center]}>
        { App.messages.map( message => {
          return (
            <View key={message.id} style={[
              widthP(86), jc.center, { minHeight: 80 },
              (message.posterId === 1) ? bg.gray : bg.orange,
              (message.posterId === 1) && as.end,
              (message.posterId === 1) ? right(10) : left(10),
              borderRadius(10),
              {marginVertical: 10}
            ]} >
              <Text style={[left(10), fontSize(20), (message.posterId === 1) ? color.white : color.dark]}>{ message.text }</Text>
            </View>
          );
        } ) }
      </ScrollView>
      <View style={[height(120), jc.center, ai.center]}>
        <View style={formControl} >
          <TextInput style={[color.white, fontSize(20), m.l(30) ]}
            placeholder="Envoyez un message..." placeholderTextColor={color.white.color} value={myMessage}
            blurOnSubmit={true} onChangeText={val => { App.myMessage = val; setMyMessage(val) }}
            onSubmitEditing={() => { App.messages.push({ text: myMessage, posterId: 1 }); setMyMessage(''); }}
          />
          <View style={[heightP(100), {aspectRatio: 1}, jc.center]} >
            <App.Button title="->" div={[widthP(50), heightP(50), jc.center, ai.center, as.center, borderRadius(50), bg.orange]}
              text={[color.gray, fontSize(20), text.center]}
              onPress={() => { App.messages.push({ text: myMessage, posterId: 1, id: App.messages.length+1 }); setMyMessage(''); }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const formControl = [jc.between, {flexDirection: "row"}, widthP(86), height(60), borderRadius(10), bg.gray];
