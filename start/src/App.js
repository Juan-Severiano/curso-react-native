import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Primeiro from './components/Primeiro';
import {Comp2, Comp3} from './components/Multi';

export default function App() {
  return (
    <View style={style.App}>
      <Text>asdasdasdasdadadasdadsd</Text>
      <Primeiro />
      <Comp3 />
      <Comp2 />
    </View>
  );
}

const style = StyleSheet.create({
  App: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
