import React, {Component} from 'react';


class TodoItem extends Component {
    render() {
        const {elementId, removeHandler, toggleHandler, elementValue, isChecked, checked} = this.props;
        return (
            <div className='todoItem'>
                <li key={elementId} onClick={toggleHandler} className={checked}>

                    <input className='checkboxItem'
                           type="checkbox"
                           checked={isChecked}
                        // onChange={toggleHandler}
                           data-elementid={elementId}

                    />

                    {elementValue}
                    <div onClick={removeHandler} className="cross" data-elementid={elementId}/>

                </li>
            </div>
        );
    }
}

export default TodoItem;