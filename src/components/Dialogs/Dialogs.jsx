import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink></div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name='Dmitry' id='1' />
                <DialogItem name='Polina' id='2' />
                <DialogItem name='Andrey' id='3' />
                <DialogItem name='Sveta' id='4' />
                <DialogItem name='Paul' id='5' />
                <DialogItem name='Viktor' id='6' />
            </div>
            <div className={s.messageItems}>
                <Message message='Hi!' />
                <Message message='How are you?' />
                <Message message='How is React-learning?' />
            </div>
        </div>
    )
}
export default Dialogs;
