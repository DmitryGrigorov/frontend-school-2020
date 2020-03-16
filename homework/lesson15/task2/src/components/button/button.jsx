import React from "react";
import style from "./button.module.css"

function Button(props) {
    return (
        <button
            onClick={props.click}
            onFocus={props.active}
            className={style.buttonLike}>
            {props.name}
        </button>
    )
}

export default Button;