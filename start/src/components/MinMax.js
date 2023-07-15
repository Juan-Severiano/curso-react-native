import React from 'react';
import { Text } from 'react-native';
import Style from './style';

export default (param) => (
  <Text style={Style.txtG}>
    {param.max} > {param.min}
  </Text>
);
