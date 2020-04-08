import React, {Component} from 'react';

class ItemTodo extends Component {
  render() {
    const { elementId, removeHandler, toggleHandler, elementValue, isChecked } = this.props;

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
        {elementValue}
      </li>
    );
  }
}

export default ItemTodo;