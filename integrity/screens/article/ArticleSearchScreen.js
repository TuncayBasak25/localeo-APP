import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View } from 'react-native';

import { fullScreen, lay, bg, mg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput, ArticleImage, ArticleInfo } from '../../components/Components';


export function ArticleSearchScreen({ route, navigation })
{
  const { App } = route.params;
  const [frame, setFrame] = useState(0);
  const nextFrame = () => setFrame(frame => frame+1);

  const handleSearch = () => { if (!App.searching) App.searchArticle(words).then(nextFrame).catch(e => console.log(e)); }

  const [keyboardHeight, setKeyboardHeight] = useState(false);

  useEffect(App.keyBoardIsVisible(setKeyboardHeight), []);
  useEffect(App.nextFrameOnFocus(setFrame, navigation), []);


  const [lastMessage, setlastMessage] = useState(null);
  const [image, setImage] = useState({ uri: null });
  const [error, setError] = useState(false);

  const [words, setWords] = useState('');

  if (frame === 0) handleSearch();

  if (!App.categories) App.getCategories().then( () => nextFrame() ).catch(e => console.log(e));

  return (
    <FullScreen>
      <View style={[bg.primary, border.br(20)]} >
        <WrappedTextInput
          style={[inlineFormWrapper, bg.secondary]}
          textStyle={[inlineFormText]}
          value={words} placeholder="Recherche"
          onChangeText={setWords}
          onSubmitEditing={handleSearch}
        />
        <View style={[lay.relW(100), mg.b(10)]}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <WrappedButton
              title="Tout"
              style={[lay.h(50), mg.l(20), border.r(50), (App.category === 'tout') ? bg.orange : bg.primary]}
              textStyle={[text.size(30), text.bold, mg.h(20), (App.category === 'tout') ? text.dark : text.white]}
              onPress={(App.category === 'tout') ? () => {} : () => { App.category = 'tout'; nextFrame() } }
            />
            { App.categories &&
              App.categories.map( category => (
                <WrappedButton
                  title={category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                  style={[lay.h(50), border.r(50), (App.category === category.name) ? bg.orange : bg.primary]}
                  textStyle={[text.size(30), text.bold, mg.h(20), (App.category === category.name) ? text.dark : text.white]}
                  onPress={(App.category === category.name) ? () => {} : () => { App.category = category.name; nextFrame() } }
                  key={App.uuid()}
                />
              ))
            }
          </ScrollView>
        </View>
      </View>

      <ScrollView style={[lay.grw(1)]} >
        <View style={[lay.row, lay.wrap, lay.jc.center]} >
          { App.articles.map( article => (
            <View key={App.uuid()} style={[lay.relW(90), bg.dark, mg.m(10), border.r(20)]} >
              <ArticleImage image={"image" + article.id} App={App} />
              <ArticleInfo article={article} App={App} />
            </View>
          )) }
        </View>
      </ScrollView>
    </FullScreen>
  );
}

export default ArticleSearchScreen;
