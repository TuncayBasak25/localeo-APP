import React, { useState } from 'react';
import { View, Image } from 'react-native';

import * as S from '../../styles/styles';

export function ArticleImage(props)
{
  const { App, image } = props;

  const [frame, nextFrame] = useState(0);
  if (!App.images[image]) setTimeout(() => nextFrame(frame => frame+1), 500);

  return (
    <Image style={[S.lay.relW(50), S.lay.ratio(1), S.lay.as.center]} source={App.images[image]} />
  );
}

export default ArticleImage;
