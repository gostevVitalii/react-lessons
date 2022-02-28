import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogs = [
    { id: 1, name: 'Dmitry' },
    { id: 2, name: 'Polina' },
    { id: 3, name: 'Andrey' },
    { id: 4, name: 'Sveta' },
    { id: 5, name: 'Paul' },
    { id: 6, name: 'Viktor' }
]
let messages = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'How is React-learning?' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
    { id: 6, message: 'Yo' }
]
let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
let messagesElements = messages.map(m => <Message message={m.message} />)

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}

            </div>
            <div className={s.messageItems}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;