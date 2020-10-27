import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, TextInput, Picker, ScrollView, Image, View } from 'react-native';

import { fullScreen, lay, bg, mg, pd, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput, ArticleImage, ArticleInfo, LoadingAnimIcon } from '../../components/Components';

import { SimpleLineIcons, Octicons, Ionicons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';


export function ArticlePostScreen({ route, navigation })
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

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescrription] = useState('');

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);


  function handlePostArticle()
  {
    App.postArticle(title, description, price, category)
    .then( ({error}) => { if (error) setError(error); console.log("Article uploaded") } )
    .catch( e => console.log(e) );
  }

  return (
    <FullScreen>
      <ScrollView style={[lay.grw(1)]} >
        <View style={[bg.primary, border.br(20)]} >
          <Text style={[text.size(30), text.center, text.secondary, mg.v(20)]} >Ajouter une annonce</Text>
          <Text>{error}</Text>
        </View>
          <View style={[lay.grw(1), lay.jc.between, lay.ai.center]} >
            <View style={[lay.relW(100), mg.t(40)]}>
              <WrappedTextInput
                style={[inlineFormWrapper]} textStyle={[inlineFormText]}
                placeholder="Titre de l'annonce" value={title} onChangeText={setTitle}
              />
              <WrappedTextInput
              style={[inlineFormWrapper]} textStyle={[inlineFormText]}
              placeholder="Prix €" value={price} onChangeText={setPrice}
              />
              <View style={[lay.relW(80), mg.v(20), border.r(10), lay.as.center, bg.primary]} >
                <Text style={[text.size(30), lay.as.center, mg.b(5), text.secondary]} >Category</Text>
                <Picker style={[text.dark]} selectedValue={category} onValueChange={ (itemValue, itemIndex) => setCategory(itemValue) } >
                  { App.categories.map( category => (
                    <Picker.Item key={App.uuid()} label={category.name.toUpperCase()} value={category.name} />
                  ) ) }
                </Picker>
              </View>
            </View>
            <View style={[lay.relW(80), lay.ai.center]}>
              <View style={[lay.relW(100), bg.primary, border.r(20)]} >
              <Text style={[text.size(30), lay.as.center, mg.b(5), text.secondary]} >Description</Text>
                <TextInput
                style={[lay.relW(100), mg.h(20), mg.v(5), text.size(20), text.secondary]}
                placeholder="Description" value={description} multiline={true} numberOfLines={5}
                onChangeText={setDescrription}
                />
              </View>
            </View>
            <View style={[lay.relW(100)]}>
              <WrappedButton
                style={[primaryButtonWrapper, App.newArticle.latitude ? bg.orange : bg.primary, mg.v(40)]}
                subStyle={[lay.row, lay.ai.center]}
                onPress={ () =>{ nextFrame(); App.getLocation().then( ({error}) => {if (error) setError(error); else nextFrame(); } ).catch(e => console.log(e))} }
              >
                { App.loadingLocation ?
                  <LoadingAnimIcon />
                  :
                  <>
                    { App.newArticle.latitude ?
                      <AntDesign style={[mg.h(20)]} name="checkcircle" size={50} color={bg.secondary.backgroundColor} />
                      :
                      <Entypo style={[mg.h(20)]} name="location" size={50} color={bg.secondary.backgroundColor} />
                    }
                    <Text style={[lay.grw(1), text.size(20), text.dark]} >Votre position</Text>
                  </>
                }
              </WrappedButton>
            </View>

            <WrappedButton
              style={[lay.relW(80), lay.ratio(4/3), mg.v(20), bg.primary, border.r(30)]}
              onPress={ () => App.handleChooseImage(1).then( img => setImage1(img) ).catch(e => console.log(e)) }
            >
            { image1 ?
              <Image style={[lay.relH(100), lay.ratio(4/3), border.r(25)]} source={image1} />
              :<>
              <MaterialIcons style={[lay.as.center]} name="add-a-photo" size={80} color={bg.secondary.backgroundColor} />
              <Text style={[text.bold, text.size(20), text.secondary]}>AJOUTER UNE IMAGE</Text>
              </>
            }
            </WrappedButton>
            { image1 &&
              <WrappedButton
                style={[lay.relW(80), lay.ratio(4/3), mg.v(20), bg.primary, border.r(30)]}
                onPress={ () => App.handleChooseImage(2).then( img => setImage2(img) ).catch(e => console.log(e)) }
              >
              { image2 ?
                <Image style={[lay.relH(100), lay.ratio(4/3), border.r(25)]} source={image2} />
                :<>
                <MaterialIcons style={[lay.as.center]} name="add-a-photo" size={80} color={bg.secondary.backgroundColor} />
                <Text style={[text.bold, text.size(20), text.secondary]}>AJOUTER UNE IMAGE</Text>
                </>
              }
              </WrappedButton>
            }
            { image2 &&
              <WrappedButton
                style={[lay.relW(80), lay.ratio(4/3), mg.v(20), bg.primary, border.r(30)]}
                onPress={ () => App.handleChooseImage(3).then( img => setImage3(img) ).catch(e => console.log(e)) }
              >
              { image3 ?
                <Image style={[lay.relH(100), lay.ratio(4/3), border.r(25)]} source={image3} />
                :<>
                <MaterialIcons style={[lay.as.center]} name="add-a-photo" size={80} color={bg.secondary.backgroundColor} />
                <Text style={[text.bold, text.size(20), text.secondary]}>AJOUTER UNE IMAGE</Text>
                </>
              }
              </WrappedButton>
            }

            <WrappedButton
            style={[primaryButtonWrapper, mg.b(40), (title && App.newArticle.latitude && price && image1 && description) ? bg.orange : bg.dark]}
            textStyle={primaryButtonText}
            title="-> Continuer"
            disabled={ (title && App.newArticle.latitude && price && image1 && description) ? false : true }
            onPress={handlePostArticle}
            />
          </View>
      </ScrollView>
    </FullScreen>
  );
}

export default ArticlePostScreen;
