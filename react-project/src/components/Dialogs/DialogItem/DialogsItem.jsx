import React from "react";
import style from './../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            <div className={style.dialogAvatar}>
                <img src="https://cs14.pikabu.ru/avatars/3625/x3625879-261705560.png" alt=''/>
            </div>
            {props.name}
        </div>
    )
}


export default DialogItem;