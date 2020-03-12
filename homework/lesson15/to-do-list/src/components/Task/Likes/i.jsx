import React from 'react'
import s from './s.module.css'



const Likes = (props) => <>
 <div className={s.like}>
  <button onClick={(e) => {e.stopPropagation(); props.disLike(props.id)}}>-</button>
  <div className={(props.likes <= 0) ? s.dislike : ''}>{props.likes}</div>
  <button onClick={(e) => {e.stopPropagation(); props.addLike(props.id)}}>+</button>
 </div>
</>



export default Likes