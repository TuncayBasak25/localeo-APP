import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import * as S from '../../styles/styles';

export function ArticleUser(props)
{
  const { App, userId } = props;

  const [frame, setFrame] = useState(0);
  const nextFrame = () => setFrame(frame => frame+1);

  const user = App.users["user" + userId];

  const repeateGetUser = () => {
    App.getUser(userId)
    .then( ({ user, error }) => {
      if (!error && !user)  return setTimeout(repeateGetUser, 500);
      else if (error) console.log(error);
      nextFrame();
    })
    .catch(e => console.log(e))
  }

  if (!user) repeateGetUser();

  return (
    <View style={props.style}>
      { user &&
        <View style={props.subStyle} >
          { user.Avatar && <Image style={[S.lay.w(50), S.lay.h(50)]} source={ { uri: `data:images/jpeg;base64,${user.Avatar.data}` } } /> }
          <Text>I am {user.username}</Text>
        </View>
      }
    </View>
  );
}

export default ArticleUser;
