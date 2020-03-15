import React, {useState} from 'react'
import PropTypes from 'prop-types'

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    padding: '.5rem 1rem',
    borderBottom: '1px solid #ccc',
    marginBottom: '.5rem',
    width: '400px',
    float: 'right' 
  },
  input: {
    border:'none',
    outline: 'none',
    width: '250px'
  }
}

function AddTodo( {onCreate} ) {
    const [value, setValue] = useState('')
    
    function submitHandler(event) {
       event.preventDefault()
       
       if(value.trim()) {
           onCreate(value)
           setValue('')
       }
   } 

    return (
        <form onSubmit={submitHandler} style={styles.form}>
            <input value={value} onChange={event => setValue(event.target.value)} placeholder='Add new task' style={styles.input}/>
            <button className='AddTodo' type='submit' style={{width: '120px'}}>+ Add new task</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo