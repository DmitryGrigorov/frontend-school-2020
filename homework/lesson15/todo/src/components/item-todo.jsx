import React, {Component} from 'react';

class ItemTodo extends Component {
  render() {
    const { elementId, removeHandler, toggleHandler, elementValue, isChecked } = this.props;
    const classes = [];
    
    if (isChecked) {
      classes.push('checked');
    }

    return (
      <li key={elementId} className={classes.join(' ')}>
        <span onClick={removeHandler} className="cross" data-elementid={elementId}>X</span>
        <input
          type="checkbox"
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