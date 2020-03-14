import React, {Component} from 'react';

// class TodoItem extends Component{
//     render() {
//         return (
//             <ul>
//                 {this.props.items.map(item => (
//                     <li key={item.id}>{item.text}</li>
//                 ))}
//             </ul>
//         );
//     }
// }
//
// export default TodoItem;

class TodoItem extends Component {
    render() {
        const {elementId, removeHandler, toggleHandler, elementValue, isChecked} = this.props;
        return (
            <li key={elementId}>
                {/*<input*/}
                {/*    type="text"*/}
                {/*    data-elementid={elementId}*/}
                {/*/>*/}
                {elementValue}
            </li>
        );
    }
}

export default TodoItem;