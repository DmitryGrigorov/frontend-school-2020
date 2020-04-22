import React, { Component } from 'react';
import InputTodo from './input-todo';
import ItemTodo from './item-todo';
import FilterLink from './item-filterlink';
import TaskList from './todo-list'
import './style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.changeViewByFilter = this.changeViewByFilter.bind(this);
    this.state= {
     tasks: [
       {id:"1", title:"just do it 1", isChecked:false, likeCount:1}, 
       {id:"2", title:"just do it 2", isChecked:true, likeCount:2}, 
       {id:"3", title:"just do it 3", isChecked:false, likeCount:0}, 
     ],
     currentTask: '', 
     currentFilter:'all'
    };
  
  }
  // state = {
  //   todos: [
  //     {
  //       id: "1",
  //       value: "Create Todo 1",
  //       isChecked: false,
  //     },
  //     {
  //       id: "2",
  //       value: "Create Todo 1",
  //       isChecked: true,
  //     },
  //     {
  //       id: "3",
  //       value: "Create Todo 1",
  //       isChecked: false,
  //     }
  //   ],
  //   currentTodo: ''
  // };

  toggleHandler = (evt) => {
    const { tasks } = this.state;
    const elementId = evt.target.dataset.elementid;
    const foundElement = tasks.findIndex(el => el.id === elementId);
    const newTask = {
      ...tasks[foundElement],
      isChecked: !tasks[foundElement].isChecked
    };

    this.setState({
      tasks: [
        ...tasks.slice(0, foundElement),
        newTask,
        ...tasks.slice(foundElement + 1),
      ]
    });
  };

  submitHandler = (evt) => {
    evt.preventDefault();
    const { currentTask, tasks } = this.state;
    const newTask = {
      id: Math.floor(Math.random() * 1000000).toString(),
      title: currentTask,
      isChecked: false,
      likeCount:0,
    };
    this.setState({
      tasks: [...tasks, newTask],
      currentTask: '',
      // filter:'all'
    });
  };
  changeViewByFilter=(newFilter)=>{
    this.setState({
      currentFilter: newFilter
    });
  };
  onChangeInput = (evt) => {
    this.setState({
      currentTask: evt.target.value
    })
  };

  increaseLikeCounter =(evt)=>
  {
    const { tasks } = this.state;
    const elementId = evt.target.dataset.elementid;
    const foundElement = tasks.findIndex(el => el.id === elementId);
     const newTask = {
       ...tasks[foundElement],
       likeCount: tasks[foundElement].likeCount+1
     };

    this.setState({
      tasks: [
        ...tasks.slice(0, foundElement),
        newTask,
        ...tasks.slice(foundElement + 1),
      ]
    });
  };
  decreaseLikeCounter =(evt)=>
  {
    const { tasks } = this.state;
    const elementId = evt.target.dataset.elementid;
    const foundElement = tasks.findIndex(el => el.id === elementId);
     const newTask = {
       ...tasks[foundElement],
       likeCount: tasks[foundElement].likeCount>0?tasks[foundElement].likeCount-1:0
     };

    this.setState({
      tasks: [
        ...tasks.slice(0, foundElement),
        newTask,
        ...tasks.slice(foundElement + 1),
      ]
    });
  };
  removeHandler=(evt)=> {
    const {tasks} = this.state;
    const target = evt.target;
    let newtasks =  tasks.filter((obj)=>{return obj.id !== evt.target.dataset.elementid});
    this.setState({tasks: newtasks});
  };

  changeTask(item){
    let allTasks = this.state.tasks;
    allTasks.map( (object) =>{
      if(object.task === item.task){
         object.isChecked = !object.isChecked;
      }
    });
    this.setState({tasks: allTasks});
  };
  
  render() {
    const { tasks, currentTask } = this.state;
    return (
      <div>
        <h1>My To-Do List</h1>
        <FilterLink currentFilter={this.state.currentFilter} changeView={this.changeViewByFilter}/>
        <InputTodo
          submitHandler={this.submitHandler}
          onChangeInput={this.onChangeInput}
          currentTask={currentTask}
        />
        <TaskList tasks={tasks} toggleHandler={this.toggleHandler} currentFilter={this.state.currentFilter} removeHandler={this.removeHandler} increaseLikeCounter={this.increaseLikeCounter} decreaseLikeCounter={this.decreaseLikeCounter}/>
      </div>
    );
  }
}

export default App;