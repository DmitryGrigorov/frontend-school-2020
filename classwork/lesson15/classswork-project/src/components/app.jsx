import React, { Component } from 'react';

import InputTodo from './input-todo';
import ItemTodo from './item-todo';
import './style.css';

class App extends Component {
  state = {
    todos: [
      {
        id: "1",
        value: "Create Todo 1",
        isChecked: false,
      },
      {
        id: "2",
        value: "Create Todo 1",
        isChecked: true,
      },
      {
        id: "3",
        value: "Create Todo 1",
        isChecked: false,
      }
    ],
    currentTodo: ''
  };



  toggleHandler = (evt) => {
    const { todos } = this.state;
    const elementId = evt.target.dataset.elementid;
    const foundElement = todos.findIndex(el => el.id === elementId);
    const newTodo = {
      ...todos[foundElement],
      isChecked: !todos[foundElement].isChecked
    };

    this.setState({
      todos: [
        ...todos.slice(0, foundElement),
        newTodo,
        ...todos.slice(foundElement + 1),
      ]
    });
  };

  submitHandler = (evt) => {
    evt.preventDefault();
    const { currentTodo, todos } = this.state;
    const newTodo = {
      id: Math.floor(Math.random() * 1000000).toString(),
      value: currentTodo,
      isChecked: false,
    };

    this.setState({
      todos: [...todos, newTodo],
      currentTodo: ''
    });
  };

  onChangeInput = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
  };

  removeHandler = (evt) => {
    const { todos } = this.state;
    const elementId = evt.target.dataset.elementid;
    const foundElement = todos.findIndex(el => el.id === elementId);
    this.setState({
      todos: [
        ...todos.slice(0, foundElement),
        ...todos.slice(foundElement + 1),
      ]
    })
  };

  render() {
    const { todos, currentTodo } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <InputTodo
          submitHandler={this.submitHandler}
          onChangeInput={this.onChangeInput}
          currentTodo={currentTodo}
        />
        <ul className="list">
          {
            todos.map(el => (
              <ItemTodo
                elementId={el.id}
                removeHandler={this.removeHandler}
                toggleHandler={this.toggleHandler}
                elementValue={el.value}
                isChecked={el.isChecked}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;