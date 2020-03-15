import React, {Component} from 'react';
import style from './button-sort.css';

class ButtonSort extends Component {
    render() {
        const {name, sort} = this.props;
        return <button className='buttonItem' onClick={sort}>{name}</button>
    }
}

export default ButtonSort;