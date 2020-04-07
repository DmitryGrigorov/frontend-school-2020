import React, {Component} from 'react';
import './style.css';

class FilterTodo extends Component {
  onClick = (type) => {
    return (evt) => {
      evt.preventDefault();
      this.props.filterCheck(type);
    };
  };

  render() {

    return (
    <div className='btncheck'>
    <button id='active' 
      href='' 
      onClick={this.onClick('active')}>
        Active
    </button> 

    <button id='complete' 
      href='' 
      onClick={this.onClick('complete')}>
        Complete
    </button>   

    <button id='all' 
      href='' 
      onClick={this.onClick('all')}>
        All
    </button>  
  </div> 
  
  );}
};

export default FilterTodo; 

