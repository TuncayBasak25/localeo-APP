import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View } from 'react-native';

import { fullScreen, lay, bg, mg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput, Message } from '../../components/Components';


export function MessageScreen({ route, navigation })
{
  const { App } = route.params;
  const [frame, nextFrame] = useState(0);


  const [keyboardHeight, setKeyboardHeight] = useState(false);

  useEffect(App.keyBoardIsVisible(setKeyboardHeight), []);
  useEffect(App.nextFrameOnFocus(nextFrame, navigation), []);


  const [lastMessage, setlastMessage] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (App.isUpdatingMessage) return;
    const messageUpdater = setInterval( () => App.updateMessages().then(res => { if (res && navigation.isFocused()) nextFrame(frame => frame+1) } ).catch(e => console.log(e)) , 1000)
    return () => { clearInterval(messageUpdater) };
   }, []);


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
          { App.corresponder.Avatar &&
            <Image
              source={{ uri: "data:images/jpeg;base64," + App.corresponder.Avatar.data }}
              style={[lay.relH(60), lay.ratio(1), lay.as.center, border.r(100)]}
            />
          }
          <Text style={[text.secondary, text.center, text.size(30)]}>{App.corresponder.username}</Text>
        </WrappedButton>
      </View>

      <ScrollView style={[lay.grw(1), lay.scaleY(-1)]}>
        { ([...App.messages].reverse()).map( message => ( <Message key={App.uuid()} style={[lay.scaleY(-1)]} message={message} myId={App.user.id} cpdId={App.corresponder.id} /> ) )}
      </ScrollView>

      <View style={[lay.relH(15), lay.jc.center, keyboardHeight ? mg.b(keyboardHeight) : null ]}>
        <WrappedTextInput
          style={[inlineFormWrapper, bg.primary]}
          textStyle={[inlineFormText]}
          value={message} placeholder="Envoyer un message"
          onChangeText={setMessage}
          onSubmitEditing={() => { App.sendMessage(message).then(({ error }) => { if (error) setError(error); else setMessage(''); }) } }
        />
        { error &&
          <View>
            <Text style={[text.center, text.secondary, text.size(15), lay.relW(60), lay.as.center]} >{error}</Text>
          </View> }
      </View>
    </FullScreen>
  );
}

export default MessageScreen;
