import React, {Component} from 'react';

class InputTodo extends Component {
  render() {
    const { submitHandler, onChangeInput, currentTodo } = this.props;
    return (
      <form onSubmit={submitHandler}>
        <input onChange={onChangeInput} type="text" value={currentTodo}/>
      </form>
    );
  }
}

export default InputTodo;