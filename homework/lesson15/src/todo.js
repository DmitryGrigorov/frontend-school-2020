import React from "react";




export default props => (
    <tbody>
        <tr className="todo" onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} onClick={props.onDelete}>
            <td style={{color: "white"}} className='deleteIcon'>X
            </td>
            <td><input type="checkbox" onClick={props.onChecked} checked={props.checked}/></td>
            <td><p>{props.text}</p></td>
        </tr>
    </tbody>
)