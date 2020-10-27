import React, { useState } from 'react';

import { SimpleLineIcons, Octicons, Ionicons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';

import * as S from '../../styles/styles';

export class LoadingAnimIcon extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      angle: 0
    }
  }

  nextAngle()
  {
    this.setState({...this.state, angle: this.state.angle + (this.props.speed ? this.props.speed : 6)})
  }

  componentDidMount() {  }
  componentWillUnmount() { clearTimeout(this.update) }

  render()
  {
    this.update = setTimeout(() => this.nextAngle(), 16);

    return (
      <AntDesign style={[this.props.style, S.rotate(this.state.angle)]} name="sync" size={50} {...this.props} />
    );
  }
}

export default LoadingAnimIcon;
