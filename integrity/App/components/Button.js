import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function Button(props, { navigation })
{
  return (
    <View style={props.div} >
      <TouchableOpacity style={{width: "100%", height: "100%", justifyContent: "center"}} onPress={props.onPress} >
        <Text style={props.text} >{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
