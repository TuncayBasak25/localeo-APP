import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Api from 'localeo-api';

async function test()
{
  console.log(await Api.login('tuncay', '12345678'));
  console.log(await Api.createMessage({ destinaterId: 2, text: "Salut Olivier!" }));
}

export default function App() {
  test();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
