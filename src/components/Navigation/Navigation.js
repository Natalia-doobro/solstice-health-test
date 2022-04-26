import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineQuestionCircle} from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { VscKey } from "react-icons/vsc";
import s from '../../style/Navigation.module.scss'

function Navigation() {
    return(
        <nav className={s.navigation}>
            <NavLink to="/login" className={s.link}>
                <AiOutlineQuestionCircle className={s.icon}/> 
                <p className={s.text}>ABOUT</p>
            </NavLink>
            <NavLink to="/login" className={s.link}>
                <BsBoxArrowInRight className={s.icon}/> 
                <p className={s.text}>LOGIN</p>
            </NavLink>
            {/* <NavLink to="/sign-up" className={s.link}>
                <VscKey className={s.icon}/> 
                <p className={s.text}>SIGN UP</p>
            </NavLink> */}
        </nav>
    )
}

export default Navigation;