import React, { Component } from 'react';

import InputTodo from './input-todo';
import ItemTodo from './item-todo';
import All from './showall';
import Active from './showActive';
import Complete from './showComplete';

import './style.css';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
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
      filterBy: 'all',
    }
  }


  toggleHandler = (evt) => {
    const todos = this.state.todos;
    console.log(todos); // Получение массива обьектов
    console.log(evt.target); // Получение элемента куда кликнули
    const elementId = evt.target.dataset.elementid;
    console.log(elementId); // Получение id data атрибута у элемента куда кликнули
    const foundElement = todos.findIndex(el => el.id === elementId);
    console.log(foundElement); // Получили его индекс
    console.log(todos[foundElement]);
    const newTodo = {
      ...todos[foundElement], // Получение одного элемента, куда кликнули
      isChecked: !todos[foundElement].isChecked // Изменение параметра isChecked 
    };
    console.log(newTodo);

    this.setState({
      todos: [ //видоизменяется состав массива свойства todos
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
      id: Math.floor(Math.random() * 100).toString(),
      value: currentTodo,
      isChecked: false,
    };
    console.log(todos);
    console.log(currentTodo);

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

  changeFilter = (filter) => {
      this.setState({
        filterBy: filter
      })
    }
    //   } else if (filter === "active") {
    //   this.setState({
    //     filteredTodos: this.state.todos.filter(i => !i.isChecked),
    //     });
    //   } else if (filter === "complete") {
    //   this.setState({
    //     filteredTodos: this.state.todos.filter(i => i.isChecked),
    //     });
    // }

  
  render() {
    const { todos, filterBy } = this.state;
    
    let filteredTodos = [];

    if (filterBy === "all") {
        filteredTodos = todos
    } 
    if (filterBy === "active") {
        filteredTodos = todos.filter(i => !i.isChecked);
    } 
    if (filterBy === "complete") {
        filteredTodos = todos.filter(i => i.isChecked);
    }

      return (
          <div>
            <h1>Todo List</h1>
            <InputTodo
              submitHandler={this.submitHandler}
              onChangeInput={this.onChangeInput}
              currentTodo={this.state.currentTodo}
            />
            <ul className="list">
              {
                  filteredTodos.map(el => (
                  <ItemTodo 
                    elementId={el.id}
                    removeHandler={this.removeHandler}
                    toggleHandler={this.toggleHandler}
                    elementValue={el.value}
                    isChecked={el.isChecked}
                    className={this.state.defaultClass}
                  />
                ))
              }
            </ul>
            <All showAll={() => this.changeFilter('all')}  />
            <Active showActive={() => this.changeFilter('active')}/>
            <Complete showComplete={() => this.changeFilter('complete')}/>
          </div>
        );
      }     
}

export default App;