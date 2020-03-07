import React from "react";

const Task = props => (
  <li>
    <input
      id={props.id}
      type="checkbox"
      checked={props.checked}
      value={props.id}
      onChange={props.onChange}
    />
    <label htmlFor={props.id}>{props.name}</label>
    <span onClick={() => props.onDelete(props.id)}>X</span>
  </li>
);

export default Task;
