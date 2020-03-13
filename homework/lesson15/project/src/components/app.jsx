import React, { Component } from 'react';

import './style.css';
import InputTodo from "./input-todo";
import ItemTodo from "./item-todo";

    class App extends Component {
    state = {
        todos: [
              {
                id: "1",
                value: "Create task 1",
                isChecked: false,
              },
              {
                id: "2",
                value: "Create task 2",
                isChecked: true,
              },
              {
                id: "3",
                value: "Create task 3",
                isChecked: false,
              }
        ],
          currentTodo: '',
          flag: 0

    };
    overMouse = (evt) => {
        let target = evt.target;
        if(target.classname !== "LI") { target = target.closest('li'); }
        return target.firstChild.hidden= false;
        };
    outMouse = (evt) => {
        let target = evt.target;
        if(target.classname !== "LI") { target = target.closest('li'); }
        return target.firstChild.hidden = true;
    };

    toggleImp = (evt) => {
        const { todos } = this.state;
        const target = evt.target;
        const elementId = target.dataset.elementid;
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

        if(currentTodo !== '') {
            this.setState({
                todos: [...todos, newTodo],
                currentTodo: ''
            });
        }

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
        // console.log(foundElement)
        this.setState({
            todos: [
                ...todos.slice(0, foundElement),
                ...todos.slice(foundElement + 1),
            ]
        })
    };
    allFilter = (evt) => {
        const { flag } = this.state;

        this.setState(
            {
                flag: 0
            }
        )
    };
    activeFilter = (evt) => {
        const { flag } = this.state;

        this.setState(
            {
                flag: 1
            }
        )
    };
    completeFilter = (evt) => {
        const { flag } = this.state;

        this.setState(
            {
                flag: 2
            }
        )
    };

  render() {
    const { todos, currentTodo, flag} = this.state;
    let classes = '';
    let active = '';
    let active1 = '';
    let active2 = '';
    switch (flag) {
        case 0: active = 'active';  break;
        case 1: active1 = 'active'; break;
        case 2: active2 = 'active'; break;
        default:
            active = '';
            active1 = '';
            active2 = '';
    }
    return (
      <div className="todo-list">
        <h1>Todo List Dmitry Drozdov</h1>
            <div className='buttons'>
                <button onClick={this.allFilter} className={active}>All</button>
                <button onClick={this.activeFilter} className={active1}>Active</button>
                <button onClick={this.completeFilter} className={active2}>Complete</button>
            </div>
            <InputTodo
                submitHandler = {this.submitHandler}
                onChangeInput = {this.onChangeInput}
                currentTodo={currentTodo}
            />
            <ul className="list">
                {
                  todos.map((el) => {
                      if(el.isChecked === true) {
                          classes = 'done';
                      } else {
                          classes = '';
                      }
                      if((flag === 2) && (el.isChecked === true)) {
                          return (
                              <ItemTodo
                                  classe = {classes}
                                  elementId = {el.id}
                                  elementValue = {el.value}
                                  isChecked = {el.isChecked}
                                  overMouse = {this.overMouse}
                                  outMouse = {this.outMouse}
                                  onChangeImp = {this.toggleImp}
                                  removeHandler = {this.removeHandler}
                              />

                          )
                      }
                      if((flag === 1) && (el.isChecked === false)) {
                          return (
                              <ItemTodo
                                  classe = {classes}
                                  elementId = {el.id}
                                  elementValue = {el.value}
                                  isChecked = {el.isChecked}
                                  overMouse = {this.overMouse}
                                  outMouse = {this.outMouse}
                                  onChangeImp = {this.toggleImp}
                                  removeHandler = {this.removeHandler}
                              />
                          )
                      }
                      if((flag === 0)) {
                          return (
                              <ItemTodo
                                  classe = {classes}
                                  elementId = {el.id}
                                  elementValue = {el.value}
                                  isChecked = {el.isChecked}
                                  overMouse = {this.overMouse}
                                  outMouse = {this.outMouse}
                                  onChangeImp = {this.toggleImp}
                                  removeHandler = {this.removeHandler}
                              />
                          )
                      }
                  })
                }
            </ul>
      </div>
    );
  }
}

export default App;