import React, {Component} from 'react';

class InputTodo extends Component {
  render() {
    const { submitHandler, onChangeInput, currentTodo, className, placeholder } = this.props;
    return (
      <form className={className} onSubmit={submitHandler}>
        <input onChange={onChangeInput} type="text" value={currentTodo} placeholder={placeholder}/>
      </form>
    );
  }
}

export default InputTodo;