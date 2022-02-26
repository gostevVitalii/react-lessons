import React from "react";
import './avatar.jpg';
import './background.jpg';
import s from './Info.module.css';


const Info = () => {
    return (
        <div className={s.info}>
            <div className={s.background}></div>
            <div className={s.card}>
                <div className={s.avatar}></div>
                <div className={s.description}>
                    <div className={s.name}>Vitaliy G.</div>
                    <div className={s.text}>
                        <p>Date of birth: 20 june</p>
                        <p>City: Sochi</p>
                        <p>Role: react-developer</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Info;