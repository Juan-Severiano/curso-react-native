import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import CentralText from './src/components/CentralText';
import ScreenA from './src/views/ScreenA';
import ScreenB from './src/views/ScreenB';
import ScreenC from './src/views/ScreenC';  

export default function App() {
  return (
    <SafeAreaView style = {{ flex: 1, marginTop: 30 }} >
      <ScreenA />
      <ScreenB />
      <ScreenC />
    </SafeAreaView>
  );
}
