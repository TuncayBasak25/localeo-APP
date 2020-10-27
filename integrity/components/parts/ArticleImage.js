import React, { useState } from 'react';
import { View, Image } from 'react-native';

import * as S from '../../styles/styles';

export class ArticleImage extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      frame: 0
    }
  }

  nextFrame() { this.setState({ frame: this.frame + 1 }) }

  componentWillUnmount() { clearTimeout(this.update) }

  render()
  {
    const { App, image, style } = this.props;
    if (!App.images[image]) this.update = setTimeout(() => this.nextFrame(), 500);

    return (
      <Image style={[style]} source={App.images[image]} />
    );
  }
}

export default ArticleImage;
