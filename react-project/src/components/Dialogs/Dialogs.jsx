import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id}/>)
    let messagesElements = props.messages.map(elem => <Message message={elem.message} id={elem.id}/>)

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