import React, {Component} from 'react';
import './App.css';
import Heart from "./components/heart/heart";
import Button from "./components/button/button";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    addLike = () => {
        let counter = this.state.counter;
        counter++;
        this.setState({
            counter: counter
        })
    };

    removeLike = () => {
        let counter = this.state.counter;
        if(counter === 0) {
            return;
        }
        counter--;
        this.setState({
            counter: counter
        })
    };

    removeFocus = (event) => {
        event.preventDefault();
        event.target.style.outline = 'none';
    };

    render() {
        const counter = this.state.counter;
        return (
            <div className="App">
                <Heart count={counter}/>
                <div className="buttons">
                    <Button
                        name={<i className="fas fa-thumbs-up"></i>}
                        click={this.addLike}
                        active={this.removeFocus}
                    />
                    <Button
                        name={<i className="fas fa-thumbs-down"></i>}
                        click={this.removeLike}
                        active={this.removeFocus}
                    />
                </div>
            </div>
        );
    }

}

export default App;
