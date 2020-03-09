import React from 'react';
import Styles from './index.css'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo';
import FilterTodo from './Todo/FilterTodo';

function Todo() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: true, title: 'Купить хлеб'}
    ])

function toggleTodo(id) {
    setTodos(todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo;
    }))
}

function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
}

function filterTodo(idRadio) {
    let li = document.getElementsByTagName('li')
    Array.from(li).map(li => {
        (li.className === idRadio) ? (li.style.display='flex') : (li.style.display='none')
        if (idRadio === 'all') {li.style.display='flex'}
        return li
    })    
}

function addTodo(title) {
    setTodos(
        todos.concat([
            {
                title,
                id: Date.now(),
                completed: false
            }
        ])
    )
}

    return ( 
        <Context.Provider value={{removeTodo, filterTodo}}>
            <div className = 'wrapper' style={Styles} >
                <div>
                    <h1>MY TASKS</h1>
                    <FilterTodo />
                </div>
                <hr></hr>
                <AddTodo onCreate={addTodo}/>

                {todos.length ? (
                <TodoList  todos={todos} onToggle={toggleTodo}/>
                ) : (
                    <p> You are doing great! You have no tasks</p>
                )}
            </div>
        </Context.Provider>
    )
}

export default Todo