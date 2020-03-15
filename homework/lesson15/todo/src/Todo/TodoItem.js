import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        borderBottom: '1px solid #ccc',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    },
    span: {
        display: 'flex',
        width: '350px',
        alignItems: 'center',
        wordBreak: 'break-word'
    }
}

function TodoItem({todo, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    } else if (!todo.completed) {
        classes.push('active')
    }
    return(
        <li className={classes.join(' ')} style={styles.li}>
            <span style={styles.span}>
                <input 
                type='checkbox' 
                checked={todo.completed}
                style={styles.input}
                onChange={() => onChange(todo.id)}/>
                {todo.title}
            </span>
            <button className='remove' onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem