import React, { Component } from 'react';

import HeartIcon from './heart-icon/index';
import './style.css';

class App extends Component {
  state = {
    count: 0
  };

  increaseCount = () => {    
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  };

  decreaseCount = () => {
    const { count } = this.state;
    this.setState({
      count: count > 0 ? count - 1 : 0
    });
  };

  render() {    
    const { count } = this.state;
    return (
      <div>
        <HeartIcon count={count} />
        <div className="button-panel">
          <button onClick={this.increaseCount}>Like</button>
          <button onClick={this.decreaseCount}>Dislike</button>
        </div>
      </div>
    );
  }
}

export default App;