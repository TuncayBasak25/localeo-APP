import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

export function WrappedTextInput(props)
{
  // let myProps = {...props};
  // delete myProps.style;
  return (
    <View style={[props.wrapperStyle]} >
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
