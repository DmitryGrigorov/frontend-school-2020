import React from "react";
import style from "./heart.module.css"

function Heart(props) {
    return (
        <div className={style.heartDiv}>
            <i className="far fa-heart"></i>
            <div className={style.count}>
                {props.count}
            </div>
        </div>
    )

}

export default Heart;