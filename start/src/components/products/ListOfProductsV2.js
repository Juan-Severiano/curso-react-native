import React from 'react';
import { Text, FlatList } from 'react-native';
import Style from '../style';

import Products from './Products';

export default (props) => {
  return (
    <>
      <Text style={Style.txtG}>Lista de Produtos V2</Text>
      <FlatList
        data={Products}
        keyExtractor={(i) => i.id}
        renderItem={({ item: p }) => {
          return (
            <Text>
              {p.id} {p.nome} - R$ {p.preco}
            </Text>
          );
        }}
      />
    </>
  );
};
