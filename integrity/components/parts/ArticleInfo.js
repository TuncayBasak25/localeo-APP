import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import * as S from '../../styles/styles';

import { AntDesign } from '@expo/vector-icons';


export function ArticleInfo(props)
{
  const { App, article } = props;

  const [frame, setFrame] = useState(0);
  const nextFrame = () => setFrame(frame => frame+1);

  const user = App.users["user" + article.UserId];
  const time = {};

  const repeateGetUser = () => {
    App.getUser(article.UserId)
    .then( ({ user, error }) => {
      if (!error && !user)  return setTimeout(repeateGetUser, 500);
      else if (error) console.log(error);
      nextFrame();
    })
    .catch(e => console.log(e))
  }

  if (!user) repeateGetUser();

  let stars = Math.random() * 4 + 1;
  let fullStars = Math.floor(stars);
  let rest = stars - Math.floor(stars);

  let articleNumber = Math.ceil(Math.random() * 100);
  let avisNumber = Math.ceil(Math.random() * articleNumber);

  let distance = Math.round(Math.random() * 10000);
  let distanceText = `à ${distance} mètres`;
  if (distance > 1000) distanceText = `à ${Math.floor(distance / 1000)} km`;

  return (
    <View style={[props.style, S.relW(100), S.border.br(20)]}>
      <Text style={[S.text.center, S.text.size(30), S.text.secondary, S.text.white]} >{article.title}</Text>
      <View style={[S.row, S.jc.around]} >
        <Text style={[S.text.center, S.text.white, S.text.size(20), S.text.secondary]} >{App.getTimeDiff(article.createdAt)}</Text>
        <Text style={[S.text.center, S.text.white, S.text.size(20), S.text.secondary]} >{distanceText}</Text>
      </View>
      { user &&
        <View style={[props.subStyle, S.row, S.grw(1), S.jc.between, S.ai.center]} >
          { user.Avatar && <Image style={[S.relW(25), S.ratio(1), S.border.r(50), S.mg.m(10)]} source={ { uri: `data:images/jpeg;base64,${user.Avatar.data}` } } /> }
          <View style={[S.row, S.grw(1), S.relH(100), S.mg.r(5)]}>
            <View style={[S.jc.center]} >
              <Text style={[S.text.size(20), S.mg.m(10), S.text.bold, S.text.cyan]} >{user.username.toUpperCase()}</Text>
              <View style={[S.row]} >
                { (Array(fullStars).fill(null)).map( () => (<AntDesign key={App.uuid()} name="star" size={20} color="yellow" />) ) }
                { (rest > 0) && <>
                  <View style={S.lay.w(20 * rest)}>
                    <AntDesign key={App.uuid()} name="star" size={20} color="yellow" />
                  </View>
                  <View style={[S.flipX, S.lay.w(20 * (1-rest))]}>
                    <AntDesign key={App.uuid()} name="star" size={20} color="gray" />
                  </View>
                </>}
                { (Array(4 - fullStars).fill(null)).map( () => (<AntDesign key={App.uuid()} name="star" size={20} color="gray" />) ) }
              </View>
              <Text style={[S.text.size(16), S.text.orange]} >{articleNumber} Article / {avisNumber} Avis</Text>
            </View>
            <View style={[S.grw(1), S.jc.center, S.mg.r(20)]} >
              <Text style={[S.text.size(40), S.text.orange, S.text.center]} >{article.price}€</Text>
            </View>
          </View>
        </View>
      }
    </View>
  );
}

export default ArticleInfo;
