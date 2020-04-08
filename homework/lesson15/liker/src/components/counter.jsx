import React, {Component} from 'react';


class Counter extends Component {
  render() {
    return <span className="counter">{this.props.counter}</span>
  }
}

export default Counter;