import React, { Component } from 'react';

class VidaDoComponente extends Component {
  constructor(props) {
    super(props);
    console.log('Componente está sendo construído');
    this.state = {
      data: 'Inicial'
    };
  }

  componentDidMount() {
    console.log('Componente foi montado');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Componente foi atualizado');
    console.log('Estado anterior:', prevState.data);
    console.log('Novo estado:', this.state.data);
  }

  componentWillUnmount() {
    console.log('Componente está sendo desmontado');
  }

  changeState = () => {
    this.setState({ data: 'Atualizado' });
  }

  render() {
    console.log('Renderização do componente');
    return (
      <div>
        <h1>Ciclo de Vida do Componente</h1>
        <p>Estado: {this.state.data}</p>
        <button onClick={this.changeState}>Atualizar Estado</button>
      </div>
    );
  }
}

export default VidaDoComponente;
