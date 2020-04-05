import React, {Component} from 'react';

class ItemTodo extends Component {
  render() {
    const { className, active, filter, onClick, value } = this.props;
    return (
        <div 
        className={className} 
        data-active={active} 
        data-filter={filter} 
        onClick={onClick}>
            {value}
            </div>

    );
  }
}

export default ItemTodo;