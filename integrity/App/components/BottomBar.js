import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, SafeAreaView, View, Button } from 'react-native';

import Styles from '../../styleSheets/styles';

import Api from 'localeo-api';
import App from '../App';


export default function BottomBar()
{
  return (
    <View style={Styles.bottomBar}>

      <StatusBar style="auto" />
    </View>
  );
}
