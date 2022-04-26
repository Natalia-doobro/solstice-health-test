import React from "react";
import Navigation from '../Navigation';
import s from '../../style/Header.module.scss';


const Header = () => {
    return (
        <header className={s.header}>
            <Navigation/>
        </header>
    )
}

export default Header;