import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import { fullScreen, lay, bg, border, text, font, 
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper,
  mg, pd
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput } from '../../components/Components';
import { SimpleLineIcons, Octicons, Ionicons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons'; 

export function ArticleDetailsScreen({ route, navigation })
{
  const { App } = route.params;


  return (
    <FullScreen>

      <ScrollView style={[lay.grw(1)]}>

        <View style={[lay.relW(100), lay.ratio(3), bg.primary, border.blr(30), border.brr(30), lay.jc.center, lay.ai.center, lay.row, lay.jc.between]}>
          <WrappedButton
              subStyle={[lay.jc.center, lay.ai.center]}
              onPress={ navigation.goBack }>
              <AntDesign style={[mg.h(30), text.secondary]} name="arrowleft" size={30} />
          </WrappedButton>
          <Text style={[text.size(26), text.secondary, mg.r(120)]}>Vélobécanne</Text>
        </View>

        <View style={[lay.jc.center, lay.ai.center, lay.row,]}>
          <MaterialIcons name="motorcycle" size={200} color="black" />
         </View>

        <View>
          <WrappedButton
            style={[primaryButtonWrapper]}
            subStyle={[lay.row, lay.jc.center, lay.ai.center]}
            onPress={ () => navigation.navigate("Register") }
          >
            <Text style={[lay.grw(1), text.size(18), text.white2, text.center]}>
              PRIX : 365,00 €
            </Text>
          </WrappedButton>
        </View>
     
        <View>
          <Text style={[text.size(18), text.orange, mg.l(40), mg.r(30), mg.t(20)]}>Description et caractéristiques</Text>
        </View>

        <View>
          <Text style={[text.size(14), text.secondary, text.justify, mg.l(40), mg.r(30), mg.t(20)]}>
            Le vélobécanne m'a été très utile dans tous les déplacements du quotidien. 
            Etat décent, n'a jamais nécessité de réparation. Je m'en sépare car j'ai investi dans une vrai bécanne.
          </Text>
        </View>

        <View>
          <Text style={[text.size(14), text.secondary, mg.l(40), mg.r(30), mg.t(10)]}>
            {`Freins à disques\n`}
            {`Batterie amovible\n`}
            {`Autonomie 75km\n`}
            {`Vitesse max 25km\n`}
            {`Moteur\n`}
            {`Cadre semi-rigide\n`}
            {`Verrouillage de la batterie\n`}
            {`5 niveaux d'assistance\n`}
            {`Double saccoche\n`}
            {`2 rétroviseurs\n`}
          </Text>
        </View>

        <View style={[lay.relW(100), lay.row, lay.wrap, lay.jc.center, bg.dark, lay.ai.center, border.brr(30), border.blr(30)]}>
          <Text style={[text.size(18), lay.relW(100), text.orange, pd.l(55), mg.r(30), mg.t(10)]}>Lieu d'échange</Text>
          <Image
          style={[lay.relW(95), lay.ratio(13/9), border.r(30), mg.v(10)]}
            source={require('../../../assets/carte1.jpg')}
          />
        </View>

        <View style={[lay.relW(100), mg.t(20), lay.row, lay.wrap, lay.jc.center, bg.dark, lay.ai.center, border.tlr(30), border.trr(30), ]}>
          <Text style={[text.size(18), lay.relW(100), text.orange, text.center, pd.t(10), pd.b(10)]}>Profil du revendeur</Text>
          <View style={[lay.relW(100), lay.ai.center]}>
            <View style={[lay.relW(20), lay.ratio(1)]}>
              <Image source={require('../../../assets/avatar1.png')}
                style={[lay.relH(100), lay.ratio(1), border.r(50)]}
              />
            </View>
          </View>
          <View>
            <Text style={[text.size(14), text.secondary, text.center, mg.t(10)]}>
              {`Warren Maunier\n`}
              {`58000 Nevers\n`}
              {`Posté il y a 3 minutes\n`}
              <AntDesign name="staro" size={26} color="yellow" /> 
              <AntDesign name="staro" size={26} color="yellow" /> 
              <AntDesign name="staro" size={26} color="yellow" /> 
              <AntDesign name="staro" size={26} color="yellow" />
              <AntDesign name="staro" size={26} color="yellow" />
            </Text>
            <Text style={[text.size(10), text.white, text.center]}>{`(21 avis client)\n`}</Text>
            <Text style={[text.size(10), text.white, text.center, pd.b(20)]}>Cet utilisateur a déjà vendu 28 articles</Text>
          </View>
        </View>
        
        <View style={[lay.relW(100), lay.ratio(3), bg.dark, border.blr(30), border.brr(30), lay.jc.center, lay.ai.center, lay.row, lay.wrap, lay.jc.between, mg.b(20)]}>
          <Text style={[lay.relW(100), text.size(14), text.white, pd.l(40)]}>Derniers commentaires</Text>
          <View style={[ lay.row, lay.relW(82), lay.h(90), mg.v(10), mg.h(40), lay.jc.center, lay.ac.center, lay.as.center, border.r(10), bg.orange, pd.l(20) ]}>
            <View style={[lay.relW(20), lay.jc.center]}>
              <Image source={require('../../../assets/avatar1.png')}
                style={[lay.relH(50), lay.ratio(1), border.r(50)]}
              />
              <Text style={[text.size(12)]}>
                Maxtor
              </Text>
            </View>
            <View style={[lay.relW(80), lay.jc.center]}>
              <Text>
              <AntDesign name="staro" size={14} color="yellow" /> 
              <AntDesign name="staro" size={14} color="yellow" /> 
              <AntDesign name="staro" size={14} color="yellow" /> 
              <AntDesign name="staro" size={14} color="yellow" />
              <AntDesign name="staro" size={14} color="yellow" />
              </Text>
              <Text style={[text.size(12), lay.row, text.white2]}>
                Un vendeur de qualité il m'a même offert le soupé. Je recommande !
              </Text>
            </View>
          </View>
        </View>

      </ScrollView>

    </FullScreen>
  );
}

export default ArticleDetailsScreen;

const superstyle = [inlineFormWrapper, mg.b(0), mg.v(5)];
const substyle = [lay.row, lay.jc.between, lay.ai.center, bg.primary, border.r(10)];