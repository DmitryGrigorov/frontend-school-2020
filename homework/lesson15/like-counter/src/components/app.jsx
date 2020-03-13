import React, { Component } from 'react';

import './style.css';

class App extends Component {
    state = {
        counter: 0
    };
    onLike = (evt) => {
        let {counter} = this.state;
        let like = counter;
        like++;
        this.setState(
            { counter: like}
        )
    };
    onDislike = (env) => {
        let {counter} = this.state;
        let like = counter;
        like--;
        this.setState(
            { counter: like}
        )
    }

  render() {
    const { counter } = this.state;
    let done = '';
    let blue = '';
    if(counter <= 0) {
        done = 'done';
        blue = 'blue';
    } else {
        done = '';
        blue = 'red';
    }
    return (
      <div className='like-counter'>
        <h1>like counter Dmitry Drozdov</h1>
        <div id='heart' className={blue}>
            <input className={done + ' counter'} type="text" value={counter} readOnly/>
        </div>
          <div className='button'>
              <button onClick={this.onLike}>Like</button>
              <button onClick={this.onDislike}>Dislike</button>
          </div>
      </div>
    );
  }
}

export default App;