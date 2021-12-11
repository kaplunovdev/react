import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import {dialogs, messages} from "../../index";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = dialogs.map(elem => <DialogItem name={elem.name} id={elem.id}/>)
    let messagesElements = messages.map(elem => <Message message={elem.message} id={elem.id}/>)

    return (
        <div className={style.chatMain}>
            <div className={style.dialogs}>
                {dialogsElements}
            </div>
            <div className={style.message}>
                {messagesElements}
            </div>
        </div>


    )
}

export default Dialogs;