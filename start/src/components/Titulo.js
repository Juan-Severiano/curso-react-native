import React from 'react';
import { Text } from 'react-native';
import Style from './style';

export default ({ title, subtitle }) => (
  <React.Fragment>
    <Text style={Style.title}>{title}</Text>
    <Text style={Style.subtitle}>{subtitle}</Text>
  </React.Fragment>
);
