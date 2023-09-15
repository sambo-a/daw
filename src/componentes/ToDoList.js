import React, { Component } from 'react';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // Lista de tarefas
      newTask: '' // Nova tarefa a ser adicionada
    };
  }

  // Manipulador de evento para adicionar uma nova tarefa à lista
  addTask = () => {
    if (this.state.newTask.trim() !== '') {
      this.setState(prevState => ({
        tasks: [...prevState.tasks, prevState.newTask],
        newTask: '' // Limpar o campo de entrada após adicionar a tarefa
      }));
    }
  }

  // Manipulador de evento para remover uma tarefa da lista
  removeTask = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks });
  }

  // Manipulador de evento para atualizar o campo de entrada de nova tarefa
  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <div>
          <input
            type="text"
            placeholder="Nova Tarefa"
            value={this.state.newTask}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTask}>Adicionar</button>
        </div>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.removeTask(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
