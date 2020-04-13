import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
  counter: 0,
  showHeart: false,
  };

  increaseCounter = () => {
    const { counter } = this.state;
    const newCounter = counter + 1;
    const showHeart = newCounter > 0;

    this.setState({
      counter: newCounter,
      showHeart
    })
  };

  decreaseCounter = () => {
    const { counter } = this.state;
    const newCounter = counter ? counter - 1 : 0;
    const showHeart = newCounter > 0;

    this.setState(
      {counter: newCounter,
        showHeart
      })
  };

  render() {
    const { counter, showHeart } = this.state;
    return(
      <div className="wrapper">
      <div className="heart-container">
            <div className={showHeart ? 'heart red' : 'heart none'}>
            <div className={showHeart ? 'counter counter-view' : 'counter'}>{counter}</div>
      </div>
      </div>
      <div className='button-container'>
        <button onClick={this.increaseCounter}>Like</button>
        <button onClick={this.decreaseCounter}>Dislike</button>
      </div>
    </div>
    )
    }
  }
