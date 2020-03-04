import React, { Component } from 'react';

class App extends Component {
  state = {
    counter: 0
  };

  incrementHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  };

  decrementHandler = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default App;