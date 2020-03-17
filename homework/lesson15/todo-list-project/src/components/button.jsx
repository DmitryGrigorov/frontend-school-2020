import React, {Component} from 'react';

class Button extends Component {
  render() {
    const { id, caption, type, onClick } = this.props;
    return (
      <button
        id={id}
        type={type}
        onClick={onClick}>
          {caption}
      </button>
    );
  }
}

export default Button;