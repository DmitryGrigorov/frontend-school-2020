import React, {Component} from 'react';
import style from './button-sort.css';

class ButtonSort extends Component {
    render() {
        const name = this.props.name;
        return <button className='buttonItem'>{name}</button>
    }
}

export default ButtonSort;