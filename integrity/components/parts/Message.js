import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import * as S from '../../styles/styles';

export function Message(props)
{
  const { myId } = props;
  const { text, posterId } = props.message;

  const myBg = (posterId === myId) ? S.bg.dark : S.bg.orange;
  const place = (posterId === myId) ? S.as.end : S.as.start;

  const side = (posterId === myId) ? S.right(-7) : S.left(-7);

  return (
    <View style={[S.relW(100), S.pd.t(20), S.jc.center, S.ai.center, props.style]} >
      <View style={[S.relW(90), S.minH(90)]} >
        <View style={[myBg, S.relW(80), S.minH(60), S.border.r(20), place, S.pd.p(20)]} >
          <Text style={[S.text.size(20)]} >{text}</Text>
          <View style={[S.w(14), S.h(14), S.abs, S.rotate(45), S.top(20), myBg, place, side]} />
        </View>
      </View>
    </View>
  );
}

export default Message;
