import React from 'react';
import { Text } from 'react-native';
import Style from './style';
import If from './if';

export default ({ user = {} }) => {
  return (
    <>
      <If teste={user && user.name && user.email}>
        <Text style={Style.txtG}>User Logado</Text>
        <Text style={Style.txtG}>
          {user.name} | {user.email}
        </Text>
      </If>
    </>
  );
};
