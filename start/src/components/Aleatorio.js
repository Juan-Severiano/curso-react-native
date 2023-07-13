import React from 'react';
import {Text} from 'react-native';
import Style from './style';

export default props => {
  const res = Math.floor(Math.random() * (props.max - props.min) + props.min);
  return (
    <Text style={Style.txtG}>
      O valor aleatorio entre {props.min} e {props.max} é {res}
    </Text>
  );
};
