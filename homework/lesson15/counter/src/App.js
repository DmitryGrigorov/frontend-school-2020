import React, { Component } from 'react';
import './App.css';
import { ReactComponent as MyIcon} from './donut.svg'

class App extends Component{
  state={
    count: 0
  }

  onDonutHandler = () =>{
    this.setState({
      count: this.state.count+1
    })
  }

  onNotDonutHandler = () =>{
    if(this.state.count > 0){
      this.setState({
        count: this.state.count-1
      })
    }
    else{
      this.setState({
        count: 0
      })
    }
  }


  render(){
    const imageClassName = this.state.count === 0 ? 'donut':'donutVisible'
    const counterClassName = this.state.count === 0 ? 'counter':'counterVisible'
    return(
      <div>
        <span className={counterClassName}>{this.state.count}</span>
        <div>
          <MyIcon className={imageClassName}/>
          <div className='button'>
            <button onClick={this.onDonutHandler}>DONUT</button>
            <button onClick={this.onNotDonutHandler}>NOT DONUT</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
