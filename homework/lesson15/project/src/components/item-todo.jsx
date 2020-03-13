import React, {Component} from 'react';

class ItemTodo extends Component {
  render() {
    const { classe, elementId, removeHandler, elementValue, isChecked,overMouse,outMouse,onChangeImp } = this.props;
    return (
      <li key={elementId}  onMouseOut={outMouse} onMouseOver={overMouse}>
        <span onClick={removeHandler} className='list-close' data-elementid={elementId} hidden={true}>X</span>
        <input type="checkbox" checked={isChecked}  data-elementid={elementId} onChange={onChangeImp}/>
        <span className={classe}>{elementValue}</span>
      </li>
    );
  }
}

export default ItemTodo;