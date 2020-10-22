import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import { fullScreen, lay, bg, border, text, font, 
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper,
  mg
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput } from '../../components/Components';
import { SimpleLineIcons, Octicons, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'; 

export function AccountScreen({ route, navigation })
{
  const { App } = route.params;


  return (
    <FullScreen>
    
      <Text>
        Vos informations
      </Text>

    </FullScreen>
  );
}

export default AccountScreen;

const superstyle = [inlineFormWrapper, mg.b(0), mg.v(5)];
const substyle = [lay.row, lay.jc.between, lay.ai.center, bg.primary, border.r(10)];