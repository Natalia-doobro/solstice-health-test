import React from "react";
import { Link } from "react-router-dom";
import s from '../../style/Footer.module.css'

function Footer() {
    return(
        <div className={s.footer}>
            <p className={s.text}>@ 2022, All right reserved</p>
            <ul className={s.list}>
                <li className={s.item}><Link to="/" className={s.link}>Terms of service</Link></li>
                <li className={s.item}><Link to="/" className={s.link}>Privacy policy</Link></li>
                <li className={s.item}><Link to="/" className={s.link}>Contact us</Link></li>
            </ul>
        </div>
    )
}

export default Footer;