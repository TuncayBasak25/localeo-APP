import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import { fullScreen, lay, bg, border, text, font, 
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper,
  mg
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput } from '../../components/Components';
import { SimpleLineIcons, Octicons, Ionicons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons'; 

export function ProfileScreen({ route, navigation })
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
        <Text style={[text.size(26), text.secondary]}>Vos paramètres</Text>
        <AntDesign style={mg.r(30)} name="check" size={24} color="green" />
      </View>

    <View style={[lay.jc.between, lay.grw(1)]}>
      
      <View>
      <WrappedButton
          style={[superstyle, mg.t(30)]}
          subStyle={substyle}
          onPress={ () => navigation.navigate("Account") }
        >
          <SimpleLineIcons style={mg.h(20)} name="user" size={24} color={bg.orange.backgroundColor} />
          <Text style={[lay.grw(1), text.secondary, text.size(20)]}>
            Votre compte
          </Text>
          <Octicons style={mg.h(20)} name="chevron-right" size={24} color={bg.secondary.backgroundColor} />
        </WrappedButton>

        <WrappedButton 
          style={superstyle} 
          subStyle={substyle} onPress={ () => {} }
        >
          <Ionicons style={mg.h(20)} name="md-menu" size={24} color={bg.orange.backgroundColor} />
          <Text style={[lay.grw(1), text.secondary, text.size(20)]}>
            Vos annonces
          </Text>
          <Octicons style={mg.h(20)} name="chevron-right" size={24} color={bg.secondary.backgroundColor} />
        </WrappedButton>

        <WrappedButton 
          style={superstyle} 
          subStyle={substyle}
          onPress={ () => navigation.navigate("Message") }
        >
          <MaterialIcons style={mg.h(20)} name="message" size={24} color={bg.orange.backgroundColor} />
          <Text style={[lay.grw(1), text.secondary, text.size(20)]}>
            Vos messages
          </Text>
          <Octicons style={mg.h(20)} name="chevron-right" size={24} color={bg.secondary.backgroundColor} />
        </WrappedButton>
      </View>

        <WrappedButton 
          style={[superstyle, mg.b(30)]} 
          subStyle={substyle}
          onPress={ () => App.logout().then(() => navigation.navigate("Home") ).catch(e => console.log(e)) }
        >
          <Entypo style={mg.h(20)} name="circle-with-cross" size={24} color={bg.orange.backgroundColor} />
          <Text style={[lay.grw(1), text.secondary, text.size(20)]}>
            Déconnexion
          </Text>
          <Octicons style={mg.h(20)} name="chevron-right" size={24} color={bg.secondary.backgroundColor} />
        </WrappedButton>
    </View>

    </FullScreen>
  );
}

export default ProfileScreen;

const superstyle = [inlineFormWrapper, mg.b(0), mg.v(5)];
const substyle = [lay.row, lay.jc.between, lay.ai.center, bg.primary, border.r(10)];