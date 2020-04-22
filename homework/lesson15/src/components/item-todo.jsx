import React, {Component, useImperativeHandle} from 'react';
import './style.css';
class ItemTodo extends Component {
  constructor(props)
  {
    super();
  }
  render() {
    const {elementId, removeHandler, toggleHandler, elementValue, isChecked, likeCount} = this.props;
    return (
      <div className="list-item">
      <li key={elementId} className={isChecked? "doneTask" :"notDoneTask"} >
        <input
          type="checkbox"
          checked={isChecked}
          data-elementid={elementId}
          onChange={toggleHandler}
        />
        {elementValue}
      </li>
      <div className="removeButton" onClick={removeHandler} data-elementid={elementId} style={{backgroundImage:`url('src/assets/images/remove.png')` }}></div>
      <div className="plusButton" onClick={this.props.increaseLikeCounter} data-elementid={elementId} style={{backgroundImage:`url('src/assets/images/icon_plus.png')` }}></div>
    <span>Likes: {likeCount}</span>
      <div className="minusButton" onClick={this.props.decreaseLikeCounter} data-elementid={elementId} style={{backgroundImage:`url('src/assets/images/icon_minus.png')` }}></div>
    </div>
    );
  }
}

export default ItemTodo;