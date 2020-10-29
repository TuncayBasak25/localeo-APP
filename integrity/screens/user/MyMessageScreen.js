import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View } from 'react-native';

import { fullScreen, lay, bg, mg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput, CorresponderList } from '../../components/Components';


export function MyMessageScreen({ route, navigation })
{
  const { App } = route.params;
  const [frame, setFrame] = useState(0);
  const nextFrame = () => setFrame(frame => frame+1);
  const [keyboardHeight, setKeyboardHeight] = useState(false);
  const [error, setError] = useState(false);

  useEffect(App.keyBoardIsVisible(setKeyboardHeight), []);
  useEffect(App.nextFrameOnFocus(setFrame, navigation), []);

  useEffect(() => {
    if (App.isUpdatingMessage) return;
    const messageUpdater = setInterval( () => App.updateMessages().then(res => { if (res && navigation.isFocused()) nextFrame(frame => frame+1) } ).catch(e => console.log(e)) , 1000)
    return () => { clearInterval(messageUpdater) };
  }, []);

  return (
    <FullScreen>
      <View style={[bg.primary, border.br(20)]} >
        <Text style={[lay.relW(100), text.center, text.size(30), text.secondary, text.bold, mg.t(20)]}>
        Mes Messages
        </Text>
      </View>

      <ScrollView style={[lay.grw(1)]} >
        <View style={[lay.ai.center]} >
          { App.corresponderList.map( corresponder => ( <CorresponderList key={App.uuid()} navigation={navigation} corresponder={corresponder} App={App} /> )) }
        </View>
      </ScrollView>
    </FullScreen>
  );
}

export default MyMessageScreen;
