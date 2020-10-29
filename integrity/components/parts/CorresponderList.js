import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import * as S from '../../styles/styles';
import { fullScreen, lay, bg, mg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper
} from '../../styles/styles';

import { WrappedButton, WrappedTextInput } from '../interacts/interacts';
import { ArticleImage } from './ArticleImage';

import { AntDesign } from '@expo/vector-icons';


export function CorresponderList(props)
{
  const { App, corresponder, navigation } = props;

  const [frame, setFrame] = useState(0);
  const nextFrame = () => setFrame(frame => frame+1);

  const user = App.users["user" + corresponder];
  const time = {};

  const repeateGetUser = () => {
    App.getUser(corresponder)
    .then( ({ user, error }) => {
      if (!error && !user)  return setTimeout(repeateGetUser, 500);
      else if (error) console.log(error);
      nextFrame();
    })
    .catch(e => console.log(e))
  }

  if (!user) repeateGetUser();

  return (<>
    { user &&
    <TouchableOpacity onPress={ () => { App.corresponder = user; navigation.navigate('Message'); } } >
      <View style={[S.lay.relW(90), S.mg.v(10), S.row, S.jc.between, S.ai.center, S.bg.primary, S.border.r(5)]} >
            <Image
              style={[S.relW(20), S.ratio(1), S.mg.m(5), S.border.r(50)]}
              source={ user.Avatar ? { uri: `data:images/jpeg;base64,${user.Avatar.data}` } : require('../../../assets/avatar1.png') }
            />
          <View style={[S.row, S.grw(1), S.relH(100), S.mg.r(5)]}>
            <View style={[S.jc.center]} >
              <Text style={[S.text.size(20), S.mg.m(10), S.text.bold, S.text.cyan]} >{user.username.toUpperCase()}</Text>
            </View>
          </View>
      </View>
    </TouchableOpacity>
    }
  </>);
}

export default CorresponderList;
