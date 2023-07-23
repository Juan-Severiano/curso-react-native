import React from 'react';
import { Text, TextInput } from 'react-native';
import Style from '../style';

export default class Mega extends React.Component {
  state = {
    qtdeNumbers: this.props.qtdeNumbers,
  };

  handleQtdeNumber(qtde) {
    this.setState({ qtdeNumbers: qtde });
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
          onChangeText={(qtde) => this.handleQtdeNumber(qtde)}
        />
      </>
    );
  }
}
