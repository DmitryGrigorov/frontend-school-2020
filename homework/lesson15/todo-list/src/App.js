import React, { Component } from 'react'
import './App.css'

class App extends Component{
  state = {
    inputValue: '',
    notes: [
      {
        note: "Сделать домашнее задание 1",
        checked: false
      },
      {
        note: "Сделать домашнее задание 2",
        checked: false
      },
      {
        note: "Сделать домашнее задание 3",
        checked: false
      }],
      filteredNotes: [],
  }

  componentDidMount(){
    this.setState({
      filteredNotes: this.state.notes
    })
  }

  onChangeInput = (event) =>{
    this.setState({
      inputValue: event.target.value
    })
  }

  onKeyPressEnter = (event) =>{
    if (event.key === 'Enter'){
      let notes = this.state.notes

      notes.push({
        note: event.target.value,
        checked: false
      })

      event.target.value = ''

      this.setState({
        notes,
      })
    }
  }

  onChangeStatusNote = (index) =>{
      const notes = this.state.notes;
      notes[index].checked = !notes[index].checked;
      this.setState({
        notes,
      })
  }

  onRouteClick = (filterName) => {
    const notes = this.state.notes;
    switch(filterName) {
      case 'Active': {
        const filteredNotes = notes.filter((element) => element.checked === false);
        this.setState({
          filteredNotes,
        })
        break
      }
      case 'Complete':{
        const filteredNotes = notes.filter((element) => element.checked === true);
        this.setState({
          filteredNotes,
        })
        break
      }
      default :{
        this.setState({
          filteredNotes: this.state.notes
        })
      }
    }
  }

  onDeleteHandler = (index) =>{
    const filteredNotes = this.state.filteredNotes
    filteredNotes.splice(index, 1)
    this.setState({
      filteredNotes
    })
  }

  render(){

    const styleHref ={
      margin: 'auto',
      width: '300px',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '30px',
    }

    return(
      <div className='main'>
        <input 
        className = 'input' 
        onChange={this.onChangeInput}
        onKeyPress={this.onKeyPressEnter}
        />

        {
          this.state.filteredNotes.map((element,index)=>{
            return(
              <div key={index} className='note'>
              <span сlassName='delete' onClick={() => this.onDeleteHandler(index)}>X</span>
              <input id='c1' type='checkbox' checked={element.checked}
              onChange={() => this.onChangeStatusNote(index)}/>
              <label for='c1' style={{paddingLeft:'10px'}}>{element.note}</label>
              </div>
            )
          })
        }
        
        <div style={styleHref}>
          <button className='button' onClick={() => this.onRouteClick('default')}>All</button>
          <button className='button' onClick={() => this.onRouteClick('Active')}>Active</button>
          <button className='button' onClick={() => this.onRouteClick('Complete')}>Complete</button>
        </div>
      </div>
    )
  }
}

export default App
