import React, {Component} from 'react';

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            counter: 0
        };

    }
like=()=>{
    this.setState({
        counter: this.state.counter +1
    })
}
dislike=()=>{
    this.setState({
        counter: this.state.counter -1
    })
}
    render(){
        return(
            <div>
                counter
                <br />
                {this.state.counter}
                <button onClick={this.like}>Like</button>
                <button onClick={this.dislike}>Dislike</button>
            </div>
            
        )
    }
}