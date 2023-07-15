import React from 'react';
import { Text } from 'react-native';
import Style from '../style';

import Filho from './Filho';

export default (props) => {
  let a = 45;
  let b = 77;

  return (
    <>
      <Text style={Style.txtG}>
        asdddddddddddddddddddddddddddddddddddddddddddasvc
      </Text>
      <Filho a={a} b={b} />
    </>
  );
};
