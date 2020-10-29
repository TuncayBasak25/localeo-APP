import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View } from 'react-native';

import { fullScreen, lay, bg, mg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput, ArticleImage, ArticleCard } from '../../components/Components';


export function MyArticleScreen({ route, navigation })
{
  const { App } = route.params;
  const [frame, setFrame] = useState(0);
  const nextFrame = () => setFrame(frame => frame+1);
  const [keyboardHeight, setKeyboardHeight] = useState(false);
  const [error, setError] = useState(false);

  useEffect(App.keyBoardIsVisible(setKeyboardHeight), []);
  useEffect(App.nextFrameOnFocus(setFrame, navigation), []);

  const [words, setWords] = useState('');

  const handleSearch = () => {
    if (!App.searching)
    {
      App.searchArticle(words, true)
      .then(res => { if (res) nextFrame() })
      .catch(e => console.log(e));
    }
  }

  if (frame === 0) handleSearch();

  function handleScroll(e)
  {
    const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
    const diff = contentOffset.y - (contentSize.height - 2 * layoutMeasurement.height);

    if (diff > 0 && !App.searching && !App.noMoreArticles)
    {
      App.searchArticle(null, true)
      .then(res => { if (res) nextFrame() })
      .catch(e => console.log(e));
    }
  }

  if (App.articles.length === 0 && !App.noMoreArticles) handleSearch();

  if (!App.categories) App.getCategories().then( () => nextFrame() ).catch(e => console.log(e));

  return (
    <FullScreen>
      <View style={[bg.primary, border.br(20)]} >
        <Text style={[lay.relW(100), text.center, text.size(30), text.secondary, text.bold, mg.t(20)]}>
        Mes Annonces
        </Text>
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
              onPress={(App.category === 'tout') ? () => {} : () => { App.category = 'tout'; App.articles = []; App.noMoreArticles = false; nextFrame() } }
            />
            { App.categories &&
              App.categories.map( category => (
                <WrappedButton
                  title={category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                  style={[lay.h(50), border.r(50), (App.category === category.name) ? bg.orange : bg.primary]}
                  textStyle={[text.size(30), text.bold, mg.h(20), (App.category === category.name) ? text.dark : text.white]}
                  onPress={(App.category === category.name) ? () => {} : () => { App.category = category.name; App.articles = []; App.noMoreArticles = false; nextFrame() } }
                  key={App.uuid()}
                />
              ))
            }
          </ScrollView>
        </View>
      </View>

      <ScrollView style={[lay.grw(1)]} onScroll={handleScroll} >
        <View style={[lay.row, lay.wrap, lay.jc.center]} >
          { App.articles.map( article => ( <ArticleCard ignoreUser={true} key={App.uuid()} navigation={navigation} article={article} App={App} /> )) }
        </View>
        { App.noMoreArticles && <Text style={[lay.relW(100), text.center, text.size(20), text.orange]} >Pas de nouveau résultat</Text> }
        { App.searching && <Text style={[lay.relW(100), text.center, text.size(20), text.orange]} >Chargement en cours...</Text> }
      </ScrollView>
    </FullScreen>
  );
}

export default MyArticleScreen;
