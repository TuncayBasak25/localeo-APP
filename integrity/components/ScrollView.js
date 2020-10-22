import React, { useState } from 'react';
import { Text, StatusBar, ScrollView as SW, View } from 'react-native';

import { safeArea, bg, flex, minVh, jc, ai } from '../../styleSheets/styles';


export default function ScrollView(props)
{
  return (
    <View container={props.container}>
      <SW style={props.style} >

        {props.children}

      </SW>
    </View>
  );
}
