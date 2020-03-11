import React from 'react';
import s from './s.module.css';



const Filter = ({typesOfFilter, indexOfCurrentFilter, siftTasks}) => <>
 <div className={s.filter}>
  {typesOfFilter.map((v, k) => <button className={(indexOfCurrentFilter === k) ? s.active : ''} onClick={() => { siftTasks(k) }} key={k}>{v}</button>)}
 </div>
</>




export default Filter;