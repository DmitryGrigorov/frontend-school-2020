import React from 'react'
import Input from './components/Input/i'
import Filter from './components/Filter/i'
import Task from './components/Task/i'

import s from './s.module.css'



class App extends React.Component{
 constructor(){
   super()

   this.state = {
    tasks: [
     {id: 0, title: 'task #1', done: false},
     {id: 1, title: 'task #2', done: true},
     {id: 2, title: 'task #3', done: false},
     {id: 3, title: 'task #4', done: true},
     {id: 4, title: 'task #5', done: false},
     {id: 5, title: 'task #6', done: true}
    ],

    typesOfFilter: ['all', 'active', 'done'],
    indexOfCurrentFilter: 0
   }
 }


 doneTask = (id) => {
  const index = this.state.tasks.map(v => v.id).indexOf(id)

  this.setState((state) => {
   let {tasks} = state

   tasks[index].done = !tasks[index].done

   return tasks
  })
 }
 deleteTask = (id) => {
  const index = this.state.tasks.map(v => v.id).indexOf(id)

  this.setState((state) => {
   let {tasks} = state

   delete tasks[index]

   return tasks
  })
 }
 addTask = (task) => {
  this.setState((state) => {
    let {tasks} = state

    tasks.push({
      id: (tasks.length !== 0 ? tasks.length : 0),
      title: task,
      done: false
    })
 
    return tasks
   })
 } 
 siftTasks = (flag = 0) => {
  if(flag === 1){ this.setState({indexOfCurrentFilter: flag}) }
  else if(flag === 2){ this.setState({indexOfCurrentFilter: flag}) }
  else{ this.setState({indexOfCurrentFilter: flag}) }
 }

 render(){
  const tasks = []
  tasks[0] = this.state.tasks
  tasks[1] = this.state.tasks.filter(v => !v.done)
  tasks[2] = this.state.tasks.filter(v => v.done)

  return(
<div className={s.toDoList}>
 <h1>ToDo List (all: {tasks[0].length}, active: {tasks[1].length}, done: {tasks[2].length})</h1>

 <Input addTask={this.addTask} />

 <Filter typesOfFilter={this.state.typesOfFilter} indexOfCurrentFilter={this.state.indexOfCurrentFilter} siftTasks={this.siftTasks} />
 
 {tasks[this.state.indexOfCurrentFilter].map(v => (
<Task
  task={v}
  doneTask={() => this.doneTask(v.id)}
  deleteTask={(e) => {e.stopPropagation(); this.deleteTask(v.id)} }
  key={v.id}
/>
 ))}
 </div>
  )
 }
}



export default App;