import React, {Component} from 'react';
import './style.css'
class InputTodo extends Component {
  render() {
    const { submitHandler, onChangeInput, currentTask } = this.props;
    return (
      <div className="addTask">
      <input type="text" placeholder="Enter new task here" onChange={onChangeInput} value={currentTask}/>
      <input type="submit" onClick={submitHandler} value="+"/>
    </div>

      // <form onSubmit={submitHandler}>
      //   <input onChange={onChangeInput} type="text" value={currentTask}/>
      // </form>
    );
  }
}

export default InputTodo;