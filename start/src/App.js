import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Primeiro from './components/Primeiro';
import {Comp2, Comp3} from './components/Multi';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';

export default function App() {
  return (
    <View style={style.App}>
      <Text>Text que está no App.js</Text>
      <Primeiro />
      <Aleatorio min={34} max={788} />
      <MinMax min="3" max="6" />
      <MinMax min="38" max="65" />
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
    padding: 20,
  },
});
