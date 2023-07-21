import React from 'react';
import { Text } from 'react-native';
import Style from '../style';
import { useState } from 'react';

import ContadorDisplay from './ContadorDisplay';
import ContadorBtn from './ContadorBtn';

export default (props) => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <Text style={Style.txtG}>Contador V2</Text>
      <ContadorDisplay num={num} />
      <ContadorBtn inc={inc} dec={dec} />
    </>
  );
};
