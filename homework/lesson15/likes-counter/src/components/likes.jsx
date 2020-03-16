import React, {Component} from 'react';

class Likes extends Component {

    render() {
        const {anyLikes, likesCount} = this.props;

        return (
            <div style={anyLikes} className='show'>
                {likesCount}
            </div>
        )
    }
}

export default Likes;