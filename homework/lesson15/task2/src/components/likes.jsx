import React, {Component} from 'react';

class Likes extends Component {
  state = {
    likes: 0,
    showLikes: false
  };

  incLikes = (event) => {
    let {likes} = this.state;
    this.setState({
      likes: this.state.likes + 1,
      showLikes: this.state.showLikes = true
    })
  };

  decLikes = (event) => {
    let {likes} = this.state;
    if (this.state.likes > 0 && this.state.likes === 1) {
      this.setState({
        likes: this.state.likes - 1,
        showLikes: false
      })
    } else if (this.state.likes > 0) {
      this.setState(
        {
          likes: this.state.likes - 1
        }
      )
    }
  };

  render() {
    return (
      <div className="container">
        <div className="main-div">
          <h2>Поставьте Лайк</h2>
          <div className="heart fa fa-heart" data-show={this.state.showLikes}>
            <div className="likes-count" data-show={this.state.showLikes}>{this.state.likes}</div>
          </div>
          <div className="buttons">
            <button className="button" onClick={this.incLikes}>Like</button>
            <button className="button" onClick={this.decLikes}>Dislike</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Likes;