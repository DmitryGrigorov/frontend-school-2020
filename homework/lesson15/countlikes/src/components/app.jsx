import React, { Component } from 'react';
import './style.css';
import Counter from './counter';

class App extends Component {
  state = {
    counter: 0
  }

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <Counter counter = {this.state.counter} 
      increaseCounter = {this.increaseCounter}
      decreaseCounter = {this.decreaseCounter}
      />
    )
  }
}

export default App;