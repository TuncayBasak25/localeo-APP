import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, View, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import { fullScreen, lay, bg, border, text, font,
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper,
  mg, pd
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput, ArticleImage } from '../../components/Components';
import { SimpleLineIcons, Octicons, Ionicons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';

export function ArticleDetailsScreen({ route, navigation })
{
  const { App } = route.params;

  const article = App.actualArticle;
  const user = App.users["user" + article.UserId];

  let stars = Math.random() * 4 + 1;
  let fullStars = Math.floor(stars);
  let rest = stars - Math.floor(stars);

  let articleNumber = Math.ceil(Math.random() * 100);
  let avisNumber = Math.ceil(Math.random() * articleNumber);

  let distance = Math.round(Math.random() * 10000);
  let distanceText = `à ${distance} mètres`;
  if (distance > 1000) distanceText = `à ${Math.floor(distance / 1000)} km`;

  return (
    <FullScreen>

      <ScrollView style={[lay.grw(1)]}>

        <View style={[lay.relW(100), lay.ratio(3), bg.primary, border.blr(30), border.brr(30), lay.jc.center, lay.ai.center, lay.row, lay.jc.between]}>
          <WrappedButton
              subStyle={[lay.jc.center, lay.ai.center]}
              onPress={ navigation.goBack }>
              <AntDesign style={[mg.h(30), text.secondary]} name="arrowleft" size={30} />
          </WrappedButton>
          <Text style={[text.size(26), text.secondary, mg.r(120)]}>{article.title}</Text>
        </View>

        <ArticleImage style={[lay.relW(100), lay.ratio(4/3), border.r(20)]} image={"image" + article.id} App={App} />

        <Text style={[lay.grw(1), text.size(18), text.white2, text.center]}>PRIX : {article.price} €</Text>

        <Text style={[text.size(18), text.orange, mg.l(40), mg.r(30), mg.t(20)]}>Description et caractéristiques</Text>

        <Text style={[text.size(14), text.secondary, text.justify, mg.l(40), mg.r(30), mg.t(20)]}>{article.description}</Text>

        <View style={[lay.relW(100), mg.t(20), lay.row, lay.wrap, lay.jc.center, bg.dark, lay.ai.center, border.tlr(30), border.trr(30), ]}>
          <Text style={[text.size(18), lay.relW(100), text.orange, text.center, pd.t(10), pd.b(10)]}>Profil du revendeur</Text>
          <View style={[lay.relW(100), lay.ai.center]}>
            <View style={[lay.relW(20), lay.ratio(1)]}>
              <Image source={ user.Avatar ? {uri: `data:images/jpeg;base64,${user.Avatar.data}`} :require('../../../assets/avatar1.png')}
                style={[lay.relH(100), lay.ratio(1), border.r(50)]}
              />
            </View>
          </View>
          <View>
            <Text style={[text.size(14), text.secondary, text.center, mg.t(10)]}>
              {`${user.username}\n`}
              {`Posté ${App.getTimeDiff(article.createdAt)}\n`}
            </Text>
            <View style={[lay.row]} >
              { (Array(fulllaytars).fill(null)).map( () => (<AntDesign key={App.uuid()} name="star" size={20} color="yellow" />) ) }
              { (rest > 0) && <>
                <View style={lay.w(20 * rest)}>
                  <AntDesign key={App.uuid()} name="star" size={20} color="yellow" />
                </View>
                <View style={[lay.flipX, lay.w(20 * (1-rest))]}>
                  <AntDesign key={App.uuid()} name="star" size={20} color="gray" />
                </View>
              </>}
              { (Array(4 - fullStars).fill(null)).map( () => (<AntDesign key={App.uuid()} name="star" size={20} color="gray" />) ) }
            </View>
            <Text style={[text.size(10), text.white, text.center]}>{`(${avisNumber} avis client)\n`}</Text>
            <Text style={[text.size(10), text.white, text.center, pd.b(20)]}>Cet utilisateur a déjà vendu ${articleNumber} articles</Text>
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
