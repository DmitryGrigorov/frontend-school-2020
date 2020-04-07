import React, {Component} from 'react';
import "./style.css";

class InputTodo extends Component {
  render() {
    const { submitHandler, onChangeInput, currentTodo } = this.props;
    return (
      <form onSubmit={submitHandler}>
        <input onChange={onChangeInput} 
               className='inputAdd'
               type='text' 
               value={currentTodo}
               placeholder='Your next mission...'
        />
        <button onChange={onChangeInput} 
               className='btnAdd'>
               Add
        </button>
      </form>
    );
  }
}

export default InputTodo;