import React, { useState } from 'react';
import { View, Image } from 'react-native';

import * as S from '../../styles/styles';

export function ArticleImage(props)
{
  const { App, image } = props;

  const [frame, nextFrame] = useState(0);
  if (!App.images[image]) setTimeout(() => nextFrame(frame => frame+1), 500);

  return (
    <View style={[S.relW(100), S.ratio(1), S.jc.center, S.ai.center, props.style]} >
      <Image style={[S.lay.relW(100), S.lay.ratio(1), S.border.r(20), props.imageStyle]} source={App.images[image]} />
    </View>
  );
}

export default ArticleImage;
