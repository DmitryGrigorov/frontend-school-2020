import React, {Component} from 'react';
class FilterLink extends Component
{
    constructor(props)
    {
        super();
    }
    render()
    {
        let currentFilter = this.props.currentFilter;
        return(
            <div className="navigateForm">
              <a className={
                  (currentFilter === "all") ? "active" : "in-active"
                } onClick={() => this.props.changeView("all")}>All </a>
              <a className={
                  (currentFilter === "done") ? "active" : "in-active"
                } onClick={() => this.props.changeView("done")}>Completed</a>
              <a className={
                  (currentFilter === "active") ? "active" : "in-active"
                } onClick={() => this.props.changeView("active")}>Not Completed</a>
            </div>
          );     
    }
}

export default FilterLink;