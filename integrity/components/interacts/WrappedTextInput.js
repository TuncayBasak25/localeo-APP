import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

export function WrappedTextInput(props)
{
  return (
    <View style={[props.style]} >
      <TextInput
        {...props}
        style={props.textStyle}
        value={props.value && props.value}
        onChangeText={props.onChangeText}
      >
      </TextInput>
    </View>
  );
}

export default WrappedTextInput;
