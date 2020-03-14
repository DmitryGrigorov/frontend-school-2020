import React, {Component} from 'react';
import style from "./input-todo.css";

class InputTodo extends Component {
    render() {
        const {submitHandler, onChangeInput, currentTodo} = this.props;
        return (
            <form onSubmit={submitHandler}>
                <input onChange={onChangeInput}
                       type="text"
                       placeholder='Text here...'
                       value={currentTodo}
                       className='addTitle'/>
                <button onChange={onChangeInput} className="addButton">ADD</button>
            </form>
        );
    }
}

export default InputTodo;