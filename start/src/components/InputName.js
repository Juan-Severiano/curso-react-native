import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
// import Style from './style';

export default (props) => {
  const [nome, setNome] = useState('test');
  return (
    <View>
      <Text>{nome}</Text>
      <TextInput
        placeholder="Digite seu Nome BB"
        value={nome}
        onChangeText={(name) => setNome(name)}
      />
    </View>
  );
};
