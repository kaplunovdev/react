import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let state = props.dialogsPage


    let dialogsElements = state.dialogs.map(elem => <DialogItem name={elem.name} key={elem.id} id={elem.id}/>)
    let messagesElements = state.messages.map(elem => <Message message={elem.message} key={elem.id} id={elem.id}/>)


    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)
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
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>

        </div>


    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.addMessage}>
                <Field component="textarea" name="newMessageBody"
                       placeholder='Enter new message'
                > </Field>
                <button>Send</button>
            </div>
        </form>
    )

}



const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;