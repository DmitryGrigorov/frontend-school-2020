import React, {Component} from 'react';

class All extends Component {
  render() {
    const { showAll } = this.props;
    return (
      <button onClick={showAll}>All</button>
    );
  }
}

export default All;