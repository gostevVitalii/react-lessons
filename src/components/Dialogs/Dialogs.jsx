import React from "react";
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>Dmitry</div>
                <div className={s.dialog}>Polina</div>
                <div className={s.dialog}>Andrey</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Paul</div>
                <div className={s.dialog}>John</div>

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
