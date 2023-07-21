import React from 'react';
import { StyleSheet, View } from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {
  return (
    <>
      <View style={style.flexV1}>
        <Quadrado color="#f00" />
        <Quadrado color="#0f0" />
        <Quadrado color="#00f" />
        <Quadrado color="#000" />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  flexV1: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'space-between',
  },
});
