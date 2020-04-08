import React, {Component} from 'react';

class Filter extends Component {
    render() {
        const { displayFilterBy } = this.props; 
        
        return(
            <div className="filter">
                <button className="todo-btn" data-value="all" onClick={displayFilterBy}>All</button>
                <button className="todo-btn" data-value="active" onClick={displayFilterBy}>Active</button>
                <button className="todo-btn" data-value="complete" onClick={displayFilterBy}>Complete</button>
            </div> 
        )
    }
}

export default Filter;