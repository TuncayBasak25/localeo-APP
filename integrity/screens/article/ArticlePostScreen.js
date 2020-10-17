import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, SafeAreaView, View, Button } from 'react-native';

import Styles from '../../styleSheets/styles';

import Api from 'localeo-api';
import App from '../../App/App';


export default function ArticlePostScreen({ navigation })
{
  return (
    <SafeAreaView style={Styles.container}>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
