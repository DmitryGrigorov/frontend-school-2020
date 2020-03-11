import React, { Component } from 'react';

import InputTodo from './input-todo';
import ItemTodo from './item-todo';
import ItemFilter from "./filter";
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
    currentTodo: '',
    displayType: 'all',
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

  changeDisplayType = (evt) => {
    const displayType = evt.target.dataset.value;
    this.setState(
      {
        displayType
      }
    )
  };

  filterTodos = (todo) => {
    const { todos, displayType } = this.state;
    switch (displayType) {
      case 'undone':
        return !todo.isChecked;
      case 'done':
        return todo.isChecked;
      default:
        return todos;
    }
  };

  render() {
    const { todos, currentTodo, displayMode } = this.state;
    return (
      <div className="todo-list">
        <h1>Список дел:</h1>
        <div className="input-field">
          <InputTodo
            submitHandler={this.submitHandler}
            onChangeInput={this.onChangeInput}
            currentTodo={currentTodo}
          />
        </div>
        <ItemFilter changeDisplayType={this.changeDisplayType} />
        <ul className="list">
          {
            todos.filter(this.filterTodos).map(el => (
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