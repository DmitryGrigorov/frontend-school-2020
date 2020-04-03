import { createStore } from 'redux';



function reducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// store.getState(); 
// store.dispatch(); //чтобы сказать что произошло событие
//store.subscribe

store.dispatch({type: 'INCREASE'});
store.subscribe(()=>console.log(store.getState()));

function changeStoreHandler() {
  console.log(store.getState());
}

store.subscribe(changeStoreHandler);

store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'DECREASE' });
