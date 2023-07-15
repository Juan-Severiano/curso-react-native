import React from 'react';
import { Button } from 'react-native';

export default (props) => {
  function executar() {
    console.warn('Executou porra');
  }

  return <Button title="Executar" onPress={executar} />;
};
