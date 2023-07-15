import React from 'react';
import { Text } from 'react-native';
import Style from './style';

export default ({ min, max }) => {
  const res = Math.floor(Math.random() * (max - min) + min);
  return (
    <Text style={Style.txtG}>
      O valor aleatorio entre {min} e {max} é {res}
    </Text>
  );
};
