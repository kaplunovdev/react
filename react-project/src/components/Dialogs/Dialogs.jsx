import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id}/>)
    let messagesElements =state.messages.map(elem => <Message message={elem.message} id={elem.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageCreator(body))
    }
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
                        <textarea onChange={onNewMessageChange} value={newMessageBody}> </textarea>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Dialogs;