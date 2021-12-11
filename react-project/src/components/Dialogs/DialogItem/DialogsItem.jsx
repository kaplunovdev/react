import React from "react";
import style from './../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            {props.name}
        </div>
    )
}


export default DialogItem;