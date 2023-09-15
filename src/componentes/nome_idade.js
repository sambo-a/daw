import React from 'react';

class MeusDados extends React.Component {
  render() {
    const nome = "Antonio Julio Sambo";
    const idade = 34; 

    return (
      <div>
        <h1>Meus dados</h1>
        <p>Nome: {nome}</p>
        <p>Idade: {idade} anos</p>
      </div>
    );
  }
}

export default MeusDados;
