import React from 'react';
import { Text } from 'react-native';
import Style from '../style';

import Products from './Products';

export default (props) => {
  function getList() {
    return Products.map((p) => {
      return (
        <Text key={p.id}>
          {p.id} {p.nome} {p.preco}
        </Text>
      );
    });
  }

  return (
    <>
      <Text style={Style.txtG}>Lista de Produtos</Text>
      {getList()}
    </>
  );
};
