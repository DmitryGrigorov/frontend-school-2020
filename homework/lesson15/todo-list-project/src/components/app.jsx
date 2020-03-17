import React, { Component } from 'react';

import InputTodo from './input-todo';
import ItemTodo from './item-todo';
import Button from './button';
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
        value: "Create Todo 2",
        isChecked: true,
      },
      {
        id: "3",
        value: "Create Todo 3",
        isChecked: false,
      }
    ],
    currentTodo: '',    
    viewType: 'all'
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

  toggleFilter = (type) => {    
    this.setState({
      viewType: type
    });
  }

  getFilteredTodoItems(todItems, filterType) {
    switch (filterType) {
      case 'all':
        return todItems;
        break;
      case 'active':
        return todItems.filter((todoItem) => {
          return !todoItem.isChecked;
        });
        break;
      case 'completed':
        return todItems.filter((todoItem) => {
          return todoItem.isChecked;
        });
        break;
    }
  }
  
  render() {
    const { todos, currentTodo, viewType } = this.state;
    const renderTodos = this.getFilteredTodoItems(todos, viewType);
    
    return (
      <div>
        <h1>Todo List</h1>
        <InputTodo
          submitHandler={this.submitHandler}
          onChangeInput={this.onChangeInput}
          currentTodo={currentTodo}
        />
        <Button
          id="btnAll"
          caption="All"
          onClick={() => this.toggleFilter('all')}
        />
        <Button
          id="btnActive"
          caption="Active"
          onClick={() => this.toggleFilter('active')}
        />
        <Button
          id="btnCompleted"
          caption="Completed"
          onClick={() => this.toggleFilter('completed')}
        />
        <ul className="list">
          {
            renderTodos.map(el => (
              <ItemTodo
                elementId={el.id}
                key={el.id}
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