import React from "react";
import logo from './logo.svg';
import s from './Header.module.css';


const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="react logo" />
            <h2 className={s.text}>Learning React</h2>
        </header>
    );
}

export default Header;
