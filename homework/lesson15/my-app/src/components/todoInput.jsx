import React, {Component} from 'react';


class TodoInput extends Component {

    render() {
        const {handleSubmit, handleChange, text} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <input className='inputItem' onChange={handleChange} placeholder={`Что вам нужно сделать?`} type="text"
                       value={text}/>
                <button className='buttonItem' onSubmit={handleSubmit}> ADD </button>
            </form>)


    }
}

export default TodoInput;