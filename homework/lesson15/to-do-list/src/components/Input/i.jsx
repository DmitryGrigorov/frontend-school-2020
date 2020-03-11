import React from 'react';
import s from './s.module.css';



class Input extends React.Component{
 constructor(props){
  super(props);

  this.state = {
   input: ''
  }
 }

 addTask = () => {
  const {input} = this.state;

  if(input !== ''){
   this.props.addTask(input);
   this.setState({input: ''})
  }
 }
 changeInput = (e) => {
  this.setState({input: e.target.value})
 }

 render(){
  return(
<div className={s.input}>
 <input value={this.state.input} onChange={this.changeInput}></input>
 <button onClick={this.addTask}>+</button>
</div>
  )
 }
}



export default Input;