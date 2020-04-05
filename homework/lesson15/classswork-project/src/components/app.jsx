import React, { Component } from 'react';

import InputTodo from './input-todo';
import ItemTodo from './item-todo';
import LinkFilter from './link-filter';

import './style.css';


class App extends Component {
  state = {
    todos: [
      {
        id: "1",
        value: "Create Todo 1",
        isChecked: false,
        isHidden: false,
       
      },
      {
        id: "2",
        value: "Create Todo 1",
        isChecked: true,
        isHidden: false
      },
      {
        id: "3",
        value: "Create Todo 1",
        isChecked: false,
        isHidden: false
      }
    ],
    currentTodo: '',
    links:[
      { 
        filter:'all',
        value:'All',
        active:'true'
      },
      {
        filter:'active',
        value:'Active',
        active:'false'},
      {
        filter:'complete',
        value:'Complete',
        active:'false'}
    ]
  };



  toggleHandler = (evt) => {
    const { todos } = this.state;
    const elementId = evt.target.dataset.elementid;
    const foundElement = todos.findIndex(el => el.id === elementId);
    const newTodo = {
      ...todos[foundElement],
      isChecked: !todos[foundElement].isChecked,
     
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
      isHidden: false
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

  filterList=(evt)=>{
 
    const { todos, links } = this.state;
    const typefilter=evt.target.dataset.filter;
   
    let filterTodos=todos;
    switch(typefilter){
      case 'all':
        filterTodos=todos.map(function(todo) {
          todo.isHidden=false;
          return todo;
        });
        break;
      case 'active':
        filterTodos=todos.map(function(todo) {
          todo.isHidden = todo.isChecked ? 'true':'false';
          return todo;
        });
       
        break;
      case 'complete':
        filterTodos=todos.map(function(todo) {
          todo.isHidden = todo.isChecked ? 'false':'true';
          return todo;
        });
        break;
    }

   
    this.setState({
      todos: filterTodos,
      links: links.map(link => {
        link.active=link.filter===typefilter? 'true':'false';
        return link;
      })
    });
   
  }

  render() {
    const { todos, currentTodo, links } = this.state;
   
    return (
      <div className='todoWrapper'>
        <h1 className='todoFormElement'>Todo List</h1>
        <InputTodo
          submitHandler={this.submitHandler}
          onChangeInput={this.onChangeInput}
          currentTodo={currentTodo}
          className='todoFormElement'
          placeholder='New Todo'
        />
        <ul className='list todoFormElement'>
          {
            todos.map(el => (
              <ItemTodo
                elementId={el.id}
                removeHandler={this.removeHandler}
                toggleHandler={this.toggleHandler}
                elementValue={el.value}
                isChecked={el.isChecked}
                isHidden={el.isHidden}
               
              />
            ))
          }
        </ul>
        <div className='listLinksFilter todoFormElement'> 
        {
          links.map(el=>(
            <LinkFilter
              className='linkFilter'
              onClick={this.filterList}
              filter={el.filter}
              value={el.value}
              active={el.active}
            /> 
          ))
        }
        </div>
        
      </div>
    );
  }
}

export default App;