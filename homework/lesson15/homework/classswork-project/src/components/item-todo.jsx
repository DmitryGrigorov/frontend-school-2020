import React, {Component} from 'react';

class ItemTodo extends Component {
  render() {
    const { elementId, removeHandler, toggleHandler, elementValue, isChecked, isHidden } = this.props;
    const isHiddenClass=JSON.parse(isHidden) ? 'hidden' : '';
    const classChecked = JSON.parse(isChecked) ? 'itemChecked' : '';
    return (
      
      <li key={elementId} className={isHiddenClass}>
      
        <input
          type="checkbox"
          checked={isChecked}
          data-elementid={elementId}
          onChange={toggleHandler}
        />
        <span className={classChecked}>{elementValue}</span>
        <div className='flexGrow'></div>
        <button onClick={removeHandler} className="cross" data-elementid={elementId} >x</button>
      </li>
    );
  }
}

export default ItemTodo;