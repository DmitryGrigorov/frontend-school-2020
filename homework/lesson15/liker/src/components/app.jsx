import React, { Component } from 'react';
import './style.css';
import Counter from './counter';


class App extends Component {
  state = {
    counter: 0,
    isHide: false
  };

  incrementLike = () => {
    this.setState({
      counter: this.state.counter + 1,
      isHide: true
    })
  };

  decrementLike = () => {
    this.setState({ counter: this.state.counter - 1 },
    function () {
      if (this.state.counter <= 0) {
        this.setState({
          counter: 0,
          isHide: false
        });
      }
    });
  };


  render() {
    const count  = this.state.counter;
    let style = '';
    if (count === 0) {
      style = 'blue';
    } else {
      style = 'red';
    }

    return (
      <div className="wrapper">
        <div className="block">
          <div className="block-heart">
            <div className={style + ' heart '}></div>
            { this.state.isHide && <Counter counter={this.state.counter} /> }
          </div>
        
          <div className="buttons">
            <button onClick={this.incrementLike}>Like</button>
            <button onClick={this.decrementLike}>Dislike</button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;