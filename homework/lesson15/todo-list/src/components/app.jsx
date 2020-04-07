import React, { Component } from 'react';

import InputTodo from './input-todo';
import ItemTodo from './item-todo';
import FilterTodo from './filter-todo'

import './style.css';

class App extends Component {
  state = {
    todos: [
      {
        id: '1',
        value: 'My first mission',
        isChecked: true,
      },
      {
        id: '2',
        value: 'My second mission',
        isChecked: false,
      },
      {
        id: '3',
        value: 'My third mission',
        isChecked: false,
      },
      {
        id: '4',
        value: 'My fourth mission',
        isChecked: false,
      },
      {
        id: '5',
        value: 'My fifth mission',
        isChecked: false,
      },
      {
        id: '6',
        value: 'My sixth mission',
        isChecked: false,
      }
    
    ],
    currentTodo: '',
  };

// чек галки и добавление ее к новому элементу

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
    if (currentTodo === '') {
      return alert ('Oops! You wrote nothing. Try again!'); 
    }
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

  // отображение и набор нового todo

  onChangeInput = (evt) => {
    this.setState({
      currentTodo: evt.target.value 
    })
  };

// удаление, присвоение  id после удаления todo (пересчет элементов)
 
  removeHandler = (evt) => {
    const { todos } = this.state;
    const target = evt.currentTarget;
    const elementId = target.dataset.elementid;
    const foundElement = todos.findIndex(el => el.id === elementId);
    this.setState({
      todos: [
        ...todos.slice(0, foundElement),
        ...todos.slice(foundElement + 1),
      ]
    })
  };

  filterCheck = (type) => {
    this.setState({
      title: type
    });
  };

  render() {
    let { todos, currentTodo, title } = this.state;

    switch (title) {
      case 'complete':
        todos = todos.filter((item) => 
          item.isChecked === true
        ); 
        break;
      case 'active':
        todos = todos.filter((item) => 
          item.isChecked === false
        );  
    };

    return (
      <div className='contain'>

        <h1>Todo List</h1>
        <InputTodo
          submitHandler={this.submitHandler}
          onChangeInput={this.onChangeInput}
          currentTodo={currentTodo}
        />

        <FilterTodo 
          filterCheck = {this.filterCheck}
          title = {title}  
        />

        <ul className='list'>
          {
            todos.map(el => (
              <ItemTodo
                key={el.id}
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