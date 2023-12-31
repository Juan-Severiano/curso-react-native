import React from 'react';
import { StyleSheet, View } from 'react-native';

// import ListOfProductsV2 from './components/products/ListOfProductsV2';
// import ListOfProducts from './components/products/ListOfProducts';
// import InputName from './components/InputName';
// import Quadrado from './components/layout/Quadrado';
// import FlexBoxE1 from './components/layout/FlexBoxE1';
// import FlexBoxE2 from './components/layout/FlexBoxE2';
// import UserLogin from './components/UserLogin';
// import Pai from './components/direta/Pai';
// import ContadorV2 from './components/contador/ContadorV2';
// import Contador from './components/Contador';
// import Primeiro from './components/Primeiro';
// import { Comp2, Comp3 } from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
import Mega from './components/mega/Mega';
// import Botao from './components/Botao';
// import Title from './components/Titulo';

export default function App() {
  return (
    <View style={style.App}>
      <Mega qtdeNumbers={12} />
      {/*
      <FlexBoxE2 />
      <FlexBoxE1 />
      <InputName />
      <UserLogin user={{ name: 'juan', email: 'juan@gmail.com' }} />
      <ListOfProductsV2 />
      <Contador inicial={3} passo={13} />
      <Text>Text que está no App.js</Text>
      <Primeiro />
      <Title
        title="Cadastro de Produtos"
        subtitle="cadastre seus produtos aqui"
      />
      <Botao />
      <Aleatorio min={34} max={788} />
      <MinMax min="3" max="6" />
      <MinMax min="38" max="65" />
      <Comp3 />
      <Comp2 /> */}
    </View>
  );
}

const style = StyleSheet.create({
  App: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
