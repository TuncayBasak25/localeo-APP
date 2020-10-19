import { View, StatusBar } from 'react-native';
import React from 'react';

import { fullScreen, bg } from '../../styles/styles';

export function FullScreen(props)
{
  return (
    <View style={[fullScreen, bg.gray]} >
      { props.children }
      <StatusBar />
    </View>
  );
}

export default FullScreen;
