import React, {Component} from 'react';

import './style.css';

class HeartIcon extends Component {
  render() {
    const { count } = this.props;
    let className="heart"
    className += count > 0 ? " red" : "";
    return (
      <span count={count > 0 ? count : null} className={className}>          
      </span>
    );
  }
}

export default HeartIcon;