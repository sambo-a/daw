import React, { Component } from 'react';

class RenderizacaoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false // Defina como `true` para simular que o usuário está logado
    };
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <h1>Renderização Condicional</h1>
        {!isLoggedIn ? (
          <p>voce esta logado com sucesso</p>
        ) : (
          <p>utilizador nao esta logado</p>
        )}
      </div>
    );
  }
}

export default RenderizacaoCondicional;
