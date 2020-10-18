import React, { useState } from 'react';
import { View, TextInput as YourTextInput } from 'react-native';

export default function TextInput(props, { navigation })
{
  let myProps = {...props};
  delete myProps.style;
  return (
    <View style={[props.div]} >
      <YourTextInput
        style={props.text}
        value={props.val && props.val}
        onChangeText={props.onChangeText}
        {...myProps}>
      </YourTextInput>
    </View>
  );
}
