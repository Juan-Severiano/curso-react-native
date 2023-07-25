import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import CentralText from './src/components/CentralText';

export default function App() {
  return (
    <SafeAreaView style = {{ flex: 1 }} >
      <CentralText>App</CentralText>
    </SafeAreaView>
  );
}
