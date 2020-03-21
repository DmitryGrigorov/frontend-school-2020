import React, {Component} from 'react';
import Likes from "./likes";

class Counter extends Component {

    state = {
        likesCounter: 0

    };

    increaseLikes = () => {
        this.setState(() => {
            return {likesCounter: this.state.likesCounter + 1}
        });
    };

    decreaseLikes = () => {
        const {likesCounter} = this.state;


        if (likesCounter === 0){
            return;
        }
        this.setState(() => {
            return {likesCounter: this.state.likesCounter - 1}
        });


    };

    render() {

        const {likesCounter} = this.state;
        return (
            <div className='wrapper'>
                <Likes
                    anyLikes = {likesCounter>0 ?  {opacity: '1'} : {opacity: '0'}}
                    likesCount = {likesCounter}
                />
                <div className='class' style={likesCounter>0  ? {opacity: '1'} : {opacity: '0.5'} }/>
                <div className='buttons'>
                    <button className='like' onClick={this.increaseLikes}> Класс</button>
                    <button className='dislike' onClick={this.decreaseLikes}>Не класс</button>
                </div>

            </div>


        )
    }
}

export default Counter;