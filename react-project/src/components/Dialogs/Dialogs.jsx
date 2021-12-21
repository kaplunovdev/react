import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage
    console.log(state)

    let dialogsElements = state.dialogs.map(elem => <DialogItem name={elem.name} key={elem.id} id={elem.id}/>)
    let messagesElements =state.messages.map(elem => <Message message={elem.message} key={elem.id} id={elem.id}/>)

    const onSendMessageClick = () => {
        props.sendMessage()

    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    if(!props.isAuth)return <Navigate to='/login'/>
    return (
        <div>
            <div className={style.chatMain}>
                <div className={style.dialogs}>
                    {dialogsElements}
                </div>
                <div className={style.blockChat}>
                    <div className={style.message}>
                        {messagesElements}
                    </div>
                    <div className={style.addMessage}>
                        <textarea onChange={onNewMessageChange} value={props.newMessageBody}> </textarea>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Dialogs;