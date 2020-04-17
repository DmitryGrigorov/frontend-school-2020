import React, {Component} from 'react';

class ItemTodo extends Component {
  render() {
    const { elementId, removeHandler, toggleHandler, elementValue, isChecked } = this.props;
    const done = isChecked ? "done" : "";
    return (
      <li key={elementId} className="todo-li">
        <span onClick={removeHandler} className="cross" data-elementid={elementId}>X</span>
        <input
          type="checkbox"
          checked={isChecked}
          data-elementid={elementId}
          onChange={toggleHandler}
          className="todo-check"
        />
        <span className={done}>{elementValue}</span>
      </li>
    );
  }
}

export default ItemTodo;