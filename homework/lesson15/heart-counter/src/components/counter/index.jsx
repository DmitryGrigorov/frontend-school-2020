import React, {Component} from 'react';
import '../../App.css';
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
            <div className='wrapper'>
               
                <br />
                
                <div className='heart-container'>
                    <div className='heart'></div>
                    {
                        this.state.counter > 0?
                            <div className='counter'> {this.state.counter}</div>:'' 
                        
                    }
                    
                </div>
              
                
                <div className='buttonContainer'>

                    <button onClick={this.like}>Like</button>
                    <button onClick={this.dislike}>Dislike</button>
                </div>
            </div>
            
        )
    }
}