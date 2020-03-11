import React from 'react';
import s from './s.module.css';



const Task = ({task, ...props}) => <>
<div className={s.task + ((task.done) ? ' ' + s.done : '')} onClick={props.doneTask}>
 <div>{task.title}</div>
 <div onClick={props.deleteTask}>x</div>
</div>
</>



export default Task;