import React from 'react';
import { Button, Text, TextInput } from 'react-native';
import Style from '../style';

export default class Mega extends React.Component {
  state = {
    qtdeNumbers: this.props.qtdeNumbers,
    numbers: [],
  };

  handleQtdeNumber = (qtde) => {
    this.setState({ qtdeNumbers: qtde });
  };

  gerarNumero = (nums) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumero(nums) : novo;
  };

  gerarNumeros() {
    const numeros = Array(this.state.qtdeNumbers)
      .fill()
      .reduce((n) => [...n, this.gerarNumero(n)], []);
    this.setState({ numbers: numeros });
  }

  render() {
    return (
      <>
        <Text style={Style.txtG}>
          Gerador de Mega-Sena{this.state.qtdeNumbers}
        </Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Bota esse capeta ai"
          value={this.state.qtdeNumbers}
          onChangeText={this.handleQtdeNumber}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <Text>{this.state.numbers.join(',')}</Text>
      </>
    );
  }
}
