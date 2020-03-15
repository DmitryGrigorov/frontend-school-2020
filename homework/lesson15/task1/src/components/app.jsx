import React, {Component} from 'react';

import InputTodo from './Input-todo/input-todo';
import ItemTodo from './Item-todo/item-todo';
import './style.css';
import Footer from "./footer/footer";
import ButtonSort from "./button-sort/button-sort";

class App extends Component {
    state = {
        todos: [
            {
                id: "1",
                value: "Create Todo 1",
                isChecked: false,
            },
            {
                id: "2",
                value: "Create Todo 2",
                isChecked: true,
            },
            {
                id: "3",
                value: "Create Todo 3",
                isChecked: false,
            },
            {
                id: "4",
                value: "Create Todo 4",
                isChecked: true,
            },
            {
                id: "5",
                value: "Create Todo 5",
                isChecked: true,
            }
        ],
        currentTodo: '',
        sort: []
    };


    toggleHandler = (evt) => {
        const {todos} = this.state;
        const elementId = evt.target.dataset.elementid;
        const foundElement = todos.findIndex(el => el.id === elementId);
        const newTodo = {
            ...todos[foundElement],
            isChecked: !todos[foundElement].isChecked
        };

        this.setState({
            todos: [
                ...todos.slice(0, foundElement),
                newTodo,
                ...todos.slice(foundElement + 1),
            ]
        });
    };

    submitHandler = (evt) => {
        evt.preventDefault();
        const {currentTodo, todos} = this.state;
        const newTodo = {
            id: Math.floor(Math.random() * 1000000).toString(),
            value: currentTodo,
            isChecked: false,
        };

        this.setState({
            todos: [...todos, newTodo],
            currentTodo: ''
        });
    };

    onChangeInput = (evt) => {
        this.setState({
            currentTodo: evt.target.value
        })
    };

    removeHandler = (evt) => {
        const {todos} = this.state;
        const target = evt.currentTarget;
        const elementId = target.dataset.elementid;
        const foundElement = todos.findIndex(el => el.id === elementId);
        this.setState({
            todos: [
                ...todos.slice(0, foundElement),
                ...todos.slice(foundElement + 1),
            ]
        })
    };

    filter = (arg) => {
        this.setState({
            sort: arg
        });

    };

    render() {
        let {currentTodo, todos, sort} = this.state;
        switch (sort) {
            case "active":
                todos = todos.filter(obj => obj.isChecked === false);
                break;
            case "complete":
                todos = todos.filter(obj => obj.isChecked === true)
        }
        return (
            <div>
                <div className="search">
                    <h1>To do List by DL^Larp</h1>
                    <InputTodo
                        submitHandler={this.submitHandler}
                        onChangeInput={this.onChangeInput}
                        currentTodo={currentTodo}
                    />
                </div>
                <ul className="list">
                    {
                        todos.map(el => (
                            <ItemTodo
                                key={el.id}
                                elementId={el.id}
                                removeHandler={this.removeHandler}
                                toggleHandler={this.toggleHandler}
                                elementValue={el.value}
                                isChecked={el.isChecked}
                            />
                        ))
                    }
                </ul>
                <div className="buttonItems">
                    <ButtonSort name='All' sort={() => this.filter('all')}/>
                    <ButtonSort name='Active' sort={() => this.filter('active')}/>
                    <ButtonSort name='Complete' sort={() => this.filter('complete')}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;