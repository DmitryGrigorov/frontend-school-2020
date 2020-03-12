import React from 'react'
import Likes from './Likes/i'
import s from './s.module.css'



const Task = ({task, ...props}) => {
 

 return <>
  <div className={s.task + ((task.done) ? ' ' + s.done : '')} onClick={props.doneTask}>
   <div>{task.title}</div>
   <Likes
    id={task.id}
    likes={task.likes}
    disLike={props.disLike}
    addLike={props.addLike}
   />
   <div onClick={props.deleteTask}>x</div>
  </div>
 </>
}



export default Task;