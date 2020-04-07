import React, {Component} from 'react';
import './style.css';

class ItemTodo extends Component {
  render() {
    const { elementId, removeHandler, toggleHandler, elementValue, isChecked } = this.props;
    return (
      <li key={elementId}>
        <span onClick={removeHandler} className='cross' data-elementid={elementId}>✖</span>
        <input
          type='checkbox'
          className='checkbox'
          checked={isChecked}
          data-elementid={elementId}
          onChange={toggleHandler}
        />
        {elementValue}
      </li>
    );
  }
}

export default ItemTodo;