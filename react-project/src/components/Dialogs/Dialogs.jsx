import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id}/>)
    let messagesElements = props.state.messages.map(elem => <Message message={elem.message} id={elem.id}/>)

    const newMessage = React.createRef()
    const addMessage =()=>{
        let text = newMessage.current.value
        alert(text)
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
                        <textarea></textarea>
                        <button ref={newMessage} onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Dialogs;