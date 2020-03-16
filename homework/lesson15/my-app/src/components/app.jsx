import React, {Component} from 'react';
import TodoItem from './todo-item';

import TodoInput from "./todoInput";


class App extends Component {

    state = {
        items: [
            {
                id: '1',
                text: 'do this',
                isChecked: false

            },
            {
                id: '2',
                text: 'do that',
                isChecked: false
            }],
        text: '',
        locality: {
            all: true,
            active: false,
            completed: false
        }
    };


    handleSubmit = (event) => {
        event.preventDefault();
        const {items, text} = this.state;
        if (text === '') {
            return;
        }
        const newItem = {
            id: String(Date.now()),
            text: text,
            isChecked: false
        };
        this.setState({
            items: [...items, newItem],
            text: ''

        });


    };

    handleChange = (event) => {
        this.setState({text: event.target.value});


    };
    toggleHandler = (event) => {

        let target = event.target;

        if (target.tagName !== 'INPUT') {
            const liEl = Array.from(target.children).findIndex(el => el.tagName === 'INPUT');
            if (liEl === -1) {
                return;
            } else {
                target = Array.from(target.children)[liEl];
            }
        }


        const {items} = this.state;
        const elementId = target.dataset.elementid;
        // const foundElement = items.findIndex(el => el.id === elementId);
        const foundElement = items.findIndex(function (el) {

            return (el.id === elementId)

        });

        const newTodo = {
            ...items[foundElement],
            isChecked: !items[foundElement].isChecked
        };
        if (newTodo.isChecked === true) {
            target.parentElement.classList.add('checked');
            //  target.parentElement.style.textDecoration='line-through';
        } else {
            // target.parentElement.style.textDecoration='none';
            target.parentElement.classList.remove('checked')
        }


        this.setState({
            items: [...items.slice(0, foundElement),
                newTodo,
                ...items.slice(foundElement + 1)]
        });
        // target.parentElement.classList.toggle('checked');


    };
    removeHandler = (event) => {
        const {items} = this.state;
        const elementId = event.target.dataset.elementid;
        const foundElement = items.findIndex(el => el.id === elementId);
        this.setState({
            items: [
                ...items.slice(0, foundElement),
                ...items.slice(foundElement + 1),
            ]
        })
    };
    all = () => {

        this.setState(state => {
            return {
                locality: {
                    all: true,
                    active: false,
                    completed: false
                }
            }
        });

    };
    active = () => {

        this.setState(state => {
            return {

                locality: {
                    all: false,
                    active: true,
                    completed: false

                }


            }
        });




    };
    completed = () => {

        this.setState(state => {
            return {

                locality: {
                    all: false,
                    active: false,
                    completed: true
                }
            }
        });



    };


    render() {
        const {items, text, locality} = this.state;
        let objects = [];

        if (locality.all){
            objects= items;

        }
        else if (locality.completed){
            objects= items.filter(el => el.isChecked)
        }
        else {
            objects= items.filter(el => !el.isChecked);

        }

        return (
            <div className='wrapper'>
                <div className='block'>
                    <h1>TO-DO LIST</h1>
                    <TodoInput
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        text={text}
                    />
                    <ul className="list">
                        {
                            objects.map(el => (
                                <TodoItem key={el.id}
                                          checked={el.isChecked ? 'checked' : ''}
                                          elementValue={el.text}
                                          isChecked={el.isChecked}
                                          toggleHandler={this.toggleHandler}
                                          elementId={el.id}
                                          removeHandler={this.removeHandler}
                                />
                            ))
                        }
                    </ul>
                    <div className='variants'>

                        <div className='item' onClick={this.all}
                             style={this.state.locality.all ? {textDecoration: 'underline'} : {}}> ALL
                        </div>
                        <div className='item' onClick={this.active}
                             style={this.state.locality.active ? {textDecoration: 'underline'} : {}}> ACTIVE
                        </div>
                        <div className='item' onClick={this.completed}
                             style={this.state.locality.completed ? {textDecoration: 'underline'} : {}}> COMPLETED
                        </div>


                    </div>

                </div>

            </div>
        );
    }
}

export default App;