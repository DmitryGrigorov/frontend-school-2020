import React from 'react';
import like from './img/like.jpg'
//import Auxiliary from '../hoc/auxillary'

class Counter extends React.Component {

    state = {
        countLikes: 0
    }

    addLike = () => {
        this.setState({
            countLikes: this.state.countLikes+1,
        })
    }
    render() {
        return (
            <div className="block">
                <img 
                    src={like} 
                    alt="likes_image" 
                    className="likes"
                    style={{ marginTop: "50px" }}
                />
                <>
                    <button 
                        onClick={this.addLike}
                        style={{
                            width: '100px', 
                            float: "left"
                        }}
                    >Лайк</button>
                    <button 
                        onClick={() => 
                            this.setState({countLikes: this.state.countLikes-1})}
                        style={{ width: '100px', marginLeft: '0px', float: "right", }}
                    >Дизлайк</button>
                </>
                <div id="circle">{this.state.countLikes}</div>    
            </div>
        )
    }
}

export default Counter