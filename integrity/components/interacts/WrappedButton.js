import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export function WrappedButton(props)
{
  return (
    <View style={[props.wrapperStyle]} >
      <TouchableOpacity style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}} onPress={props.onPress} >
        { props.title && <Text style={props.textStyle} >{props.title}</Text>}
        {props.children &&
          <View style={{width: "100%", height: "100%"}, props.sub}>
            { props.children }
          </View>
        }
      </TouchableOpacity>
    </View>
  );
}

export default WrappedButton;
