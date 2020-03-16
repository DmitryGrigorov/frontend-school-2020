import React, {Component} from 'react';
import Likes from "./likes";

class Counter extends Component {

    state = {
        likesCounter: 0,
        isShown: false

    };

    increaseLikes = (event) => {
        const {likesCounter} = this.state;

        this.setState(state => {
            return {likesCounter: this.state.likesCounter + 1}
        });
        if (likesCounter > 0) {
            this.setState(state => {
                return {isShown: true}
            })
        }
        console.log(this.state);
    };

    decreaseLikes = (event) => {
        const {likesCounter} = this.state;
        this.setState(state => {
            return {likesCounter: this.state.likesCounter - 1}
        });
        if (likesCounter < 1) {
            this.setState(state => {
                    return {
                        isShown: false
                    }
                }
            )
        }
        console.log(this.state);

    };

    render() {

        const {likesCounter, isShown} = this.state;
        return (
            <div className='wrapper'>
                <Likes
                    anyLikes = {isShown ? {animation: "show 1s 1"} : {}}
                    likesCount = {likesCounter}
                />
                <div className='class'/>
                <div className='buttons'>
                    <button className='like' onClick={this.increaseLikes}> Класс</button>
                    <button className='dislike' onClick={this.decreaseLikes}>Не класс</button>
                </div>

            </div>


        )
    }
}

export default Counter;