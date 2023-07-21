import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default (props) => {
  return (
    <View style={style.BtnArea}>
      <Button style={style.Btn} title="+" onPress={props.inc} />
      <Button style={style.Btn} title="-" onPress={props.dec} />
    </View>
  );
};

const style = StyleSheet.create({
  BtnArea: {
    maxWidth: 300,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Btn: {
    width: 50,
  },
});
