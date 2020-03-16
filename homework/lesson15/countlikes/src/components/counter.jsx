import React from 'react';

function Counter(props) {

  const classes = ['heart'];

  if (props.counter > 0) {
    classes.push('active-heart');
  } else if (props.counter < 0) {
    classes.push('disactive-heart');
  } else if (props.counter == 0) {
    classes.push('neutral-heart');
  }

  return (  
    <body>
    <div className="container">
      <div className={classes.join(' ')}>
      <svg x="0px" y="0px"
	      viewBox="0 0 382.377 382.377">
        <path d="M280.322,17.221c-68-2.4-89.12,63.12-89.12,63.12s-21.12-65.52-89.12-63.04s-114.72,67.84-99.04,128
          c16.56,63.52,78.08,104.88,128.64,156.96c33.84,34.48,59.52,62.96,59.52,62.96s25.68-28.48,59.52-63.28
          c50.56-52.08,112-93.44,128.64-156.96C394.962,85.061,348.242,19.701,280.322,17.221L280.322,17.221z M344.962,149.861
          c-1.105,4.286-5.474,6.865-9.76,5.76c-4.286-1.105-6.865-5.474-5.76-9.76l0,0c5.84-22.24,3.92-40-5.6-52.64
          c-16-21.52-49.2-22.72-49.6-22.72c-4.418-0.133-7.893-3.822-7.76-8.24c0.133-4.418,3.822-7.893,8.24-7.76
          c1.68,0,41.12,1.44,61.92,29.12c12.64,16.8,15.44,39.12,8.32,66.32V149.861z"/>
        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
        <div className="counter">{props.counter}</div>
      </div>
      <div className="buttons">
        <button onClick={props.increaseCounter}>like</button> 
        <button onClick={props.decreaseCounter}>dislike</button> 
      </div>
    </div>
  </body>
  )
}

export default Counter;