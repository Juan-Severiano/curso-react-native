import React from 'react';
import { Text } from 'react-native';
import Style from '../style';

export default (props) => {
  return (
    <>
      <Text style={Style.txtG}>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Text>
      <Text style={Style.txtG}>{props.a}</Text>
      <Text style={Style.txtG}>{props.b}</Text>
    </>
  );
};
