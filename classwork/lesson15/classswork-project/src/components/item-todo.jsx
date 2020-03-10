import React, {Component} from 'react';

class ItemTodo extends Component {
  render() {
    const { elementId, removeHandler, toggleHandler, elementValue, isChecked } = this.props;
    return (
      <li>
        <span onClick={removeHandler} className="cross" data-elementid={elementId}>X</span>
        <input
          type="checkbox"
          checked={isChecked}
          data-elementid={elementId}
          onChange={toggleHandler}
        />
        <span className={isChecked ? 'item-select' : 'item'}>{elementValue}</span>
      </li>
    );
  }
}

export default ItemTodo;