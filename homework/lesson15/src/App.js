import React, {Component} from 'react';
import './App.css';
import Todo from './todo'

class App extends Component {
    state = {
        allList: [{text: 'Learn JSX', checked: ''},
            {text: 'Build an Awesome App', checked: ''},
            {text: 'Ship It', checked: ''}],
        list: [{text: 'Learn JSX', checked: ''},
            {text: 'Build an Awesome App', checked: ''},
            {text: 'Ship It', checked: ''}],
        completeList: false,
        activeList: false,
    };

    onMouseOver(index) {
        document.querySelectorAll(".deleteIcon")[index].style.color = "red";
    }

    onMouseOut(index) {
        document.querySelectorAll(".deleteIcon")[index].style.color = "white";
    }

    addElem = (event) => {
        let text=event.target.value;
        if (event.keyCode === 13) {
            if (event.target.value.trim() === '') {
                alert("Заполните поле");
            } else {
                let allList = [...this.state.allList];
                allList.push({text, checked: ''});
                let list = [...this.state.list];
                list.push({text, checked: ''});
                (this.state.completeList===false)?this.setState({allList,list}):this.setState({allList});
                event.target.value = '';

            }
        }
    };

    onDelete(e, index) {
        if (e.target.className === "deleteIcon") {
            let allList = [...this.state.allList];
            allList.splice(index, 1);
            this.setState({allList});
            let list = [...this.state.list];
            list.splice(index, 1);
            this.setState({list});
        }
    }

    onAll = () => {
        let list = [...this.state.allList];
        this.setState({list, completeList: false, activeList: false});
        console.log(this.state.allList);
    };

    onActive = () => {
        let list = [];
        this.state.allList.forEach(item => {
            if (item.checked === '') {
                list.push(item);
            }
        });
        this.setState({list});
        console.log(this.state.list);
    };

    onComplete = () => {
        let list = [];
        this.state.allList.forEach(item => {
            if (item.checked === 'checked') {
                list.push(item);
            }
        });
        this.setState({list, completeList: true, activeList: false});
        console.log(this.state.allList);
    };

    onChecked(index) {
        let list = [...this.state.allList];
        list[index].checked = (!!list[index].checked) ? '' : 'checked';
        this.setState({list});
    }


    render() {
        return (
            <div className="App">
                <input type="text" className="input-text" onKeyUp={this.addElem} required/>
                <table>
                    {this.state.list.map((elem, index) => {
                        return (
                            <Todo
                                onMouseOver={() => this.onMouseOver(index)}
                                onMouseOut={() => this.onMouseOut(index)}
                                key={index}
                                text={elem.text}
                                checked={elem.checked}
                                onDelete={(e) => this.onDelete(e, index)}
                                onChecked={() => this.onChecked(index)}
                            />
                        )
                    })}

                </table>
                <div className="filter" style={{display: "inline-block"}}>
                    <button id='all' onClick={this.onAll}>All</button>
                    <button id='active' onClick={this.onActive}>Active</button>
                    <button id='complete' onClick={this.onComplete}>Complete</button>
                </div>

            </div>
        );
    }
}

export default App;
