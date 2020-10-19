import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import App from '../../App/App';

import { fullScreen, lay, bg, mg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput, Message } from '../../components/Components';


export function MessageScreen({ navigation })
{
  const [keyboardHeight, setKeyboardHeight] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener( 'keyboardDidShow', e => setKeyboardHeight(e.endCoordinates.height) );
    const keyboardDidHideListener = Keyboard.addListener( 'keyboardDidHide', () => setKeyboardHeight(false) );
    return () => { keyboardDidHideListener.remove(); keyboardDidShowListener.remove(); };
   }, []);

  const [message, setMessage] = useState('');

  const handleLogin = () => App.login()
                            .then( error => {
                              if (error) setError(error);
                              else navigation.navigate("Home");
                            })
                            .catch(e => console.log(e));

  return (
    <FullScreen>
      <View style={[lay.relH(15), lay.jc.center, lay.ai.center, border.r(40), bg.primary]}>
        <WrappedButton
          title="<-"
          style={[lay.abs, lay.as.start, lay.left(20), lay.relH(50), lay.ratio(1), lay.jc.center, border.r(50), bg.white]}
          textStyle={[text.size(50), text.gray]}
          onPress={navigation.goBack}
        />
        <WrappedButton style={[lay.relH(80), lay.jc.center, lay.ai.center]} onPress={() => console.log('test')}>
          <Image source={App.corresponder.avatar} style={[lay.relH(60), lay.ratio(1), lay.as.center, border.r(100)]} />
          <Text style={[text.secondary, text.center, text.size(30)]}>{App.corresponder.username}</Text>
        </WrappedButton>
      </View>

      <ScrollView style={[lay.grw(1)]}>
        {App.messages.map( message => ( <Message key={message.id} message={message} myId={App.user ? App.user.id : 1} /> ) )}
      </ScrollView>

      <View style={[lay.relH(15), lay.jc.center, keyboardHeight ? mg.b(keyboardHeight) : null ]}>
        <WrappedTextInput
          style={[inlineFormWrapper, bg.primary]}
          textStyle={[inlineFormText]}
          value={message} placeholder="Envoyer un message"
          onChangeText={setMessage}
          onSubmitEditing={() => { App.messages.push({ posterId: 1, text: message, id: App.messages.length + 1 }); setMessage(''); }}
        />
      </View>
    </FullScreen>
  );
}

export default MessageScreen;
