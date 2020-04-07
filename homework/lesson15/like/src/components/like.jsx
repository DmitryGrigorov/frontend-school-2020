import React, {Component} from 'react';
import './style.css';


class Like extends Component {
    render () {
        const {checkLikes, likes, picLook} = this.props;
        return (
            <div>
                <div id='look' style={picLook}>
                   BATMAN
                </div>
                <div id='looklike' style={checkLikes}> 
                   {likes} 
                </div>
            </div>
        )
    }
}


export default Like;