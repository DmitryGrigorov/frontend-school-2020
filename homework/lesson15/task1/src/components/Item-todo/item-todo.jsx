import React, {Component} from 'react';
import style from './item-todo.css';

class ItemTodo extends Component {
  render() {
    const { elementId, removeHandler, toggleHandler, elementValue, isChecked } = this.props;
    return (
      <li key={elementId} className='item-list'>
        <div className="target">
            <input
                type="checkbox"
                checked={isChecked}
                data-elementid={elementId}
                onChange={toggleHandler}
            />
        </div>
        <p>{elementValue}</p>
        <div className="close" onClick={removeHandler} data-elementid={elementId}>
            <i className="far fa-times-circle"></i>
        </div>
      </li>
    );
  }
}

export default ItemTodo;