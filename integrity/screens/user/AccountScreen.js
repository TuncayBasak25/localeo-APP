import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import { fullScreen, lay, bg, border, text, font, 
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper,
  mg, pd, colors
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput } from '../../components/Components';
import { SimpleLineIcons, Octicons, Ionicons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons'; 
import { color } from 'react-native-reanimated';


export function AccountScreen({ route, navigation })
{
  const { App } = route.params;


  return (
    <FullScreen>
      <View style={[lay.relW(100), lay.relH(12), bg.primary, border.blr(30), border.brr(30), lay.jc.center, lay.ai.center, lay.row, lay.jc.between]}>
        <WrappedButton
          subStyle={[lay.jc.center, lay.ai.center]}
          onPress={ navigation.goBack }>
          <AntDesign style={[mg.h(30), text.secondary]} name="arrowleft" size={30} />
        </WrappedButton>
        <Text style={[text.size(26), text.secondary]}>Votre compte</Text>
        <AntDesign style={mg.r(30)} name="check" size={24} color="green" />
      </View>

      <View>
        <Text style={[text.size(22), text.secondary, mg.l(30), mg.r(30), mg.t(30)]}>Vos informations</Text>
      </View>

      <View style={[lay.relW(85), lay.relH(50), bg.primary, border.blr(15), border.brr(15), border.tlr(15), border.trr(15), mg.t(10), mg.l(30), mg.r(30), lay.jc.center,]}>

        <Text style={[text.size(18), text.secondary, pd.r(10), pd.l(20)]}>Nom complet</Text>
        <View style={[lay.row, lay.relW(100), lay.jc.between]}>
          <Text style={[text.size(15), text.secondary, pd.r(10), pd.l(20), text.white]}>Warren Maunier</Text>
          <AntDesign style={mg.r(30)} name="edit" size={24} color="grey" />
        </View>

        <Text style={[text.size(18), text.secondary, mg.t(20), pd.r(10), pd.l(20)]}>Adresse</Text>
        <View style={[lay.row, lay.relW(100), lay.jc.between]}>
          <Text style={[text.size(15), text.secondary, pd.r(10), pd.l(20), text.white]}>2, rue de la Motte, 58000 Nevers</Text>
          <AntDesign style={mg.r(30)} name="edit" size={24} color="grey" />
        </View>
        
        <Text style={[text.size(18), text.secondary, mg.t(20), pd.r(10), pd.l(20)]}>Email</Text>
        <View style={[lay.row, lay.relW(100), lay.jc.between]}>
          <Text style={[text.size(15), text.secondary, pd.r(10), pd.l(20), text.white]}>w.maunier@acs.fr</Text>
          <AntDesign style={mg.r(30)} name="edit" size={24} color="grey" />
        </View>

        <Text style={[text.size(18), text.secondary, mg.t(20), pd.r(10), pd.l(20)]}>Mot de passe</Text>
        <View style={[lay.row, lay.relW(100), lay.jc.between]}>
          <Text style={[text.size(15), text.secondary, pd.r(10), pd.l(20), text.white]}>***************</Text>
          <AntDesign style={mg.r(30)} name="edit" size={24} color="grey" />
        </View> 

        <Text style={[text.size(18), text.secondary, mg.t(20), pd.r(10), pd.l(20)]}>Photo de profil</Text>
        <View style={[lay.row, lay.relW(100), lay.jc.between]}>
          <AntDesign style={[text.size(50), text.secondary, pd.r(10), pd.l(20), text.white]} name="user" />
          <AntDesign style={mg.r(30)} name="edit" size={24} color="grey" />
        </View>

      </View>

      <View>
        <Text style={[text.size(22), text.secondary, mg.l(30), mg.r(30), mg.t(30)]}>
        Vos préférences
        </Text>
      </View>

      <View style={[lay.relW(85), lay.relH(15), bg.primary, border.blr(15), border.brr(15), border.tlr(15), border.trr(15), mg.t(10), mg.l(30), mg.r(30), lay.jc.center,]}>

          <View style={[lay.row, lay.relW(100), lay.jc.between]}>
            <Text style={[text.size(18), text.secondary, pd.r(10), pd.l(20)]}>Notification de messages</Text>
            <Entypo style={mg.r(30)} name="switch" size={24} color="grey" />
          </View>

          <View style={[lay.row, lay.relW(100), lay.jc.between]}>
            <Text style={[text.size(18), text.secondary, mg.t(20), pd.r(10), pd.l(20)]}>Notification de ventes</Text>
            <Entypo style={mg.r(30)} name="switch" size={24} color="grey" />
          </View>

      </View>

    </FullScreen>
  );
}

export default AccountScreen;

const superstyle = [inlineFormWrapper, mg.b(0), mg.v(5)];
const substyle = [lay.row, lay.jc.between, lay.ai.center, bg.primary, border.r(10)];