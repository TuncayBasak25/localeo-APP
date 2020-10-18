import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function Button(props, { navigation })
{
  return (
    <View style={props.div} >
      <TouchableOpacity style={{width: "100%", height: "100%", justifyContent: "center"}} onPress={props.onPress} >
        { props.title && <Text style={props.text} >{props.title}</Text>}
        {props.children &&
          <View style={{width: "100%", height: "100%"}, props.sub}>
            { props.children }
          </View>
        }
      </TouchableOpacity>
    </View>
  );
}
