import React, {Component} from 'react';

class InputTodo extends Component {
  render() {
    const { submitHandler, onChangeInput, currentTodo } = this.props;
    return (
      <form onSubmit={submitHandler}>
        <input className="form-input" onChange={onChangeInput} type="text" value={currentTodo} placeholder="Введите название задачи"/>
      </form>
    );
  }
}

export default InputTodo;