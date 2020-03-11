import React, {Component} from 'react';

class ItemTodo extends Component {
  render() {
    const { elementId, removeHandler, toggleHandler, elementValue, isChecked } = this.props;
    return (
      <li key={elementId} className="list-item">
        <span data-checked={isChecked}>
        <input
          type="checkbox"
          checked={isChecked}
          data-elementid={elementId}
          onChange={toggleHandler}
        />
        {elementValue}
        </span>
        <span onClick={removeHandler} className="delete-icon far fa-trash-alt" data-elementid={elementId}></span>
      </li>
    );
  }
}

export default ItemTodo;