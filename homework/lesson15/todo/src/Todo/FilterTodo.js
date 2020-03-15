import React, { useContext } from 'react'
import Context from '../context'

function FilterTodo() {
    const {filterTodo} = useContext(Context)
    
    return(
        <div className="radio_buttons">
            <label><input name='option' type='radio' onChange={() => filterTodo('all')} />ALL</label>
            <label><input name='option' type='radio' onChange={() => filterTodo('active')} />ACTIVE</label>
            <label><input name='option' type='radio' onChange={() => filterTodo('done')} />DONE</label>
        </div>
    )
}

export default FilterTodo