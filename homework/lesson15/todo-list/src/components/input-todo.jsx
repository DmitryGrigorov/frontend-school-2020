import React, {Component} from 'react';

class InputTodo extends Component {
  render() {
    const { submitHandler, onChangeInput, currentTodo } = this.props;
    return (
      <form onSubmit={submitHandler} className="todo-form">
        <input onChange={onChangeInput} type="text" value={currentTodo} className="todo-add"/>
      </form>
    );
  }
}

export default InputTodo;