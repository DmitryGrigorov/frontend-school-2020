import React, {Component} from 'react';
import TodoItem from './todo-item'


class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { items: [], text: '' };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }


    state = {
        items: [
            {
                id: 1,
                text: 'do this'

            },
            {
                id: 2,
                text: 'do that'
            }],
        text: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);


    handleSubmit(event) {
        event.preventDefault();
        if (this.state.text === '') {
            return;
        }
        const newItem = {
            id: Date.now(),
            text: this.state.text
        };
        this.setState({
            items: [...items, newItem],
            text: ''

        });
        console.log(state);

    }

    handleChange(event) {
       // this.state.setState({text: event.target.value});

    }

    render() {
        const {items, text} = this.state;
        return (
            <div>
                <h1>TO-DO list</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        Что нужно сделать?
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={text}
                    />
                    <button>
                        Добавить
                    </button>
                    <ul className="list">
                        {
                            items.map(el => (
                                <TodoItem
                                    elementId={el.id}
                                    elementValue={el.text}
                                />
                            ))
                        }
                    </ul>
                </form>
                {/*<TodoItem items={this.state.items}/>*/}
            </div>
        );
    }
}

export default App;