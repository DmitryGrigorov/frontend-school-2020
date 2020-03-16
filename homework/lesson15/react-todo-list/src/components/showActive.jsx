import React, {Component} from 'react';

class Active extends Component {
  render() {
    const { showActive } = this.props;
    return (
    <button onClick={showActive}>Active</button>
    );
  }
}

export default Active;