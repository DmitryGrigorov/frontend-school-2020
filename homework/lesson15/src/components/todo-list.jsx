import React, {Component} from 'react'
import ItemTodo from './item-todo';

class TaskList extends Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
        let currentFilter = this.props.currentFilter;
          const taskList = this.props.tasks.map((el) => {
            if (currentFilter === "all") {        
              return(
                <ItemTodo
                   elementId={el.id}
                  removeHandler={this.props.removeHandler}
                  toggleHandler={this.props.toggleHandler}
                  elementValue={el.title}
                  isChecked={el.isChecked}
                  increaseLikeCounter = {this.props.increaseLikeCounter}
                  decreaseLikeCounter = {this.props.decreaseLikeCounter}
                  likeCount ={el.likeCount}
              />
              );
            } 
            else if (currentFilter === "active") {        
              if(!el.isChecked){
                return(  
                <ItemTodo
                  elementId={el.id}
                  removeHandler={this.props.removeHandler}
                  toggleHandler={this.props.toggleHandler}
                  elementValue={el.title}
                  increaseLikeCounter = {this.props.increaseLikeCounter}
                  decreaseLikeCounter = {this.props.decreaseLikeCounter}
                  isChecked={el.isChecked}
                  likeCount ={el.likeCount}
                />);
              }        
            } 
            else {
                if(el.isChecked){
                  return(<ItemTodo
                    elementId={el.id}
                    removeHandler={this.props.removeHandler}
                    toggleHandler={this.props.toggleHandler}
                    elementValue={el.title}
                    increaseLikeCounter = {this.props.increaseLikeCounter}
                    decreaseLikeCounter = {this.props.decreaseLikeCounter}
                    isChecked={el.isChecked}
                    likeCount ={el.likeCount}
                  />);
                }         
            }            
          });     
          return(
            <div>
              <ul className="list">
                {taskList}
              </ul>       
            </div>
          );       
        }
}
export default TaskList