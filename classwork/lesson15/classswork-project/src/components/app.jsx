import React, { Component } from 'react';

import Counter from './counter';

class App extends Component {
  state = {
    counter: 0,
    isHide: false
  };

  incrementHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  };

  decrementHandler = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  };

  toggleHandler = () => {
    this.setState({
      isHide: !this.state.isHide
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
        <button onClick={this.toggleHandler}>Toggle</button>
        { this.state.isHide && <Counter counter={this.state.counter} /> }
      </div>
    );
  }
}

export default App;