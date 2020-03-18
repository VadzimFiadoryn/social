import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let onMessageChange = (e) => {
        props.updateNewDialogsText(e.currentTarget.value);
    }
    // let addMessage = () => {
    //     props.addMessage()
    // }

    return (
        <div>
            <div>
                    <textarea onChange={onMessageChange}
                              value={props.newDialogText}/>
                <button onClick={props.addMessage}>Add Message</button>
            </div>
            <div className={s.dialogs}>
                <div className={s.messages}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;