import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, TextInput, ScrollView, Image, View } from 'react-native';

import { fullScreen, lay, bg, mg, pd, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput, ArticleImage, ArticleInfo } from '../../components/Components';

import { SimpleLineIcons, Octicons, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';


export function ArticlePostScreen({ route, navigation })
{
  const { App } = route.params;
  const [frame, setFrame] = useState(0);
  const nextFrame = () => setFrame(frame => frame+1);

  const [keyboardHeight, setKeyboardHeight] = useState(false);

  useEffect(App.keyBoardIsVisible(setKeyboardHeight), []);
  useEffect(App.nextFrameOnFocus(setFrame, navigation), []);

  const [page, setPage] = useState(false);

  const [lastMessage, setlastMessage] = useState(null);
  const [image, setImage] = useState({ uri: null });
  const [error, setError] = useState(false);

  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescrription] = useState('');
  const [price, setPrice] = useState('');

  const [image1, setImage1] = useState(null);

  function handleSelectImage(imgNo)
  }
    console.log('Enter image library');

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      if (imgNo === 1) setImage1(result.uri);
      else if (imgNo === 2) setImage2(result.uri);
      else if (imgNo === 3) setImage3(result.uri);
    }
  }



  return (
    <FullScreen>
      <View style={[bg.primary, border.br(20)]} >
        <Text style={[text.size(20), text.center, text.secondary, mg.v(20)]} >Ajouter une annonce</Text>
        <View style={[lay.row, lay.relW(100), lay.jc.around, mg.b(10)]}>
          <TouchableOpacity
            style={[page ? bg.dark : bg.orange, border.r(50)]}
            onPress={() => setPage(page => !page)}
          >
            <Entypo style={[pd.h(30), pd.v(5)]} name="location-pin" size={50} color={bg.secondary.backgroundColor} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[page ? bg.orange : bg.dark, border.r(50)]}
            onPress={() => setPage(page => !page)}
          >
            <Entypo style={[mg.h(30), pd.v(5)]} name="menu" size={50} color={bg.secondary.backgroundColor} />
          </TouchableOpacity>
        </View>
      </View>

      { !page ?
        <View style={[lay.grw(1), lay.jc.between]} >
          <WrappedTextInput
            style={[inlineFormWrapper, mg.t(40)]} textStyle={[inlineFormText]}
            placeholder="Titre de l'annonce" value={title} onChangeText={setTitle}
          />
          <WrappedTextInput
            style={[inlineFormWrapper]} textStyle={[inlineFormText]}
            placeholder="Address" value={address} onChangeText={setAddress}
          />
          <WrappedTextInput
            style={[inlineFormWrapper]} textStyle={[inlineFormText]}
            placeholder="Prix €" value={price} onChangeText={setPrice}
          />
          <WrappedButton
            style={[primaryButtonWrapper, mg.b(40)]}
            textStyle={primaryButtonText}
            title="-> Continuer"
            onPress={() => {}}
          />
        </View>
        :
        <View style={[lay.grw(1), lay.jc.between, lay.ai.center]} >
          { image1 ?
            <Image style={[lay.relW(80), lay.ratio(4/3), mg.v(20), border.r(10)]} source={image1} />
            :
            <WrappedButton
              style={[lay.relW(80), lay.ratio(4/3), mg.v(20), bg.primary, border.r(10)]}
              onPress={handleSelectImage}
            >
              <MaterialIcons style={[lay.as.center]} name="add-a-photo" size={80} color={bg.secondary.backgroundColor} />
              <Text style={[text.bold, text.size(20), text.secondary]}>AJOUTER UNE IMAGE</Text>
            </WrappedButton>
          }
          <View style={[lay.relW(80), lay.ai.center]}>
            <Text style={[text.size(30), lay.as.start, mg.b(5), text.secondary]} >Description</Text>
            <View style={[lay.relW(100), bg.primary, border.r(20)]} >
              <TextInput
                style={[lay.relW(100), mg.h(20), mg.v(5), text.size(20)]}
                placeholder="Description" value={description} multiline={true} numberOfLines={5}
                onChangeText={setDescrription}
              />
            </View>
          </View>
          <WrappedButton
            style={[primaryButtonWrapper, mg.b(40)]}
            textStyle={primaryButtonText}
            title="-> Continuer"
            onPress={() => {}}
          />
        </View>
      }

    </FullScreen>
  );
}

export default ArticlePostScreen;
