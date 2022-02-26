import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}><NavLink to='/dialogs/1'>Dmitry</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/2'>Polina</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/3'>Andrey</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/4'>Sveta</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/5'>Paul</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/6'>John</NavLink></div>

            </div>
            <div className={s.messageItems}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>How is React-learning?</div>
            </div>



        </div>
    )
}
export default Dialogs;
