import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View } from 'react-native';

import { fullScreen, lay, bg, mg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput, ArticleImage, ArticleUser } from '../../components/Components';


export function ArticleSearchScreen({ route, navigation })
{
  const { App } = route.params;
  const [frame, setFrame] = useState(0);
  const nextFrame = () => setFrame(frame => frame+1);


  const [keyboardHeight, setKeyboardHeight] = useState(false);

  useEffect(App.keyBoardIsVisible(setKeyboardHeight), []);
  useEffect(App.nextFrameOnFocus(setFrame, navigation), []);


  const [lastMessage, setlastMessage] = useState(null);
  const [image, setImage] = useState({ uri: null });
  const [error, setError] = useState(false);

  const [words, setWords] = useState('');

  return (
    <FullScreen>
      <WrappedTextInput
        style={[inlineFormWrapper, bg.primary]}
        textStyle={[inlineFormText]}
        value={words} placeholder="Recherche"
        onChangeText={setWords}
        onSubmitEditing={() => { if (!App.searching) App.searchArticle(words).then(nextFrame).catch(e => console.log(e)); } }
      />
      <ScrollView style={[lay.grw(1)]} >
        <View style={[lay.row, lay.wrap, lay.jc.center]} >
          { App.articles.map( article => (
            <View key={App.uuid()} style={[lay.relW(40), bg.dark, mg.m(10)]} >
              <ArticleImage image={"image" + article.id} App={App} />
              <ArticleUser userId={article.UserId} style={[lay.relW(100)]} App={App} />
            </View>
          )) }
        </View>
      </ScrollView>
    </FullScreen>
  );
}

export default ArticleSearchScreen;
