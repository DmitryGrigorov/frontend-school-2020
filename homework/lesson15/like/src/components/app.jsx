import React, { Component } from 'react';
import Like from './like';

import './style.css';

class App extends Component {
  state = {
    likes: 0 
  };
  
  plusLike = () => {
    let { likes } = this.state;
    this.setState(() => {
      return { likes: this.state.likes + 1}
    });
  };

  minusLike = () => {
    let {likes} = this.state;
    this.setState(() => { 
      return { likes: this.state.likes - 1 }
    });
  };

  render() {
    let { likes } = this.state;
    return (
      <div className='contain'>
        <Like
          picLook = {likes > 0 ?  {opacity: '0'} : {opacity: '1'}}
          checkLikes = {likes > 0 ?  {opacity: '1'} : {opacity: '0'}}
          likes = {likes}
        />
        
        <div className='batman'>
          <div className='bat-cave'>
            <div className='left-wing-connector'>
                <div></div> 
                <div></div>  
                <div></div>  
            </div>
            <div className='left-wing'>
                <div></div> 
                <div></div> 
                <div></div> 
                <div className='left-smoother'>
                </div>
            </div>
            <div className='bat-body'>
                <div></div>  
                <div></div> 
                <div></div> 
                <div></div> 
                <div></div> 
            </div>
            <div className='right-wing-connector'>
                <div></div> 
                <div></div> 
                <div></div> 
            </div>
            <div className='right-wing'>
                <div></div> 
                <div></div> 
                <div></div> 
                <div className='right-smoother'>                
                </div>
            </div>
          </div>
        </div>

        <div className='btnlike'>

          <button className='like' 
            onClick={this.plusLike}>
            Like
          </button>

          <button className='dislike' 
            onClick={this.minusLike}>
            Dislike
          </button>
        </div>

      </div>
    )
  }
}

export default App;