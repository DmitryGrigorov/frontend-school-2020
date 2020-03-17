import React, {Component} from 'react';


class Counter extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    return <h1>{this.props.counter}</h1>
  }
}

export default Counter;