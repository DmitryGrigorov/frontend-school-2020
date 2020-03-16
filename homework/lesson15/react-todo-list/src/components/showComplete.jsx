import React, {Component} from 'react';

class Complete extends Component {
  render() {
    const { showComplete } = this.props;
    return (
    <button onClick={showComplete}>Complete</button>
    );
  }
}

export default Complete;