import React, {Component} from 'react';

class ItemTodo extends Component {
  render() {
    const { elementId, removeHandler, toggleHandler, elementValue, isChecked } = this.props;
    return (
      <li key={elementId}>
        <span onClick={removeHandler} className="cross" data-elementid={elementId}>X</span>
        <input
          type="checkbox"
          checked={isChecked}
          data-elementid={elementId}
          onChange={toggleHandler}
        />
        <div style={{display: 'inline', textDecoration: isChecked ? 'line-through': null}}>
          {elementValue}
        </div>
      </li>
    );
  }
}

export default ItemTodo;