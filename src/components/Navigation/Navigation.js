import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineQuestionCircle} from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { VscKey } from "react-icons/vsc";
import s from '../../style/Navigation.module.scss'

class Navigation extends Component {
    state = {
        url: window.location.pathname,
    };

    toggleLogin = () => {
        this.setState(({url}) => ({
            url: "/login",
        }));
    }

    toggleSignup = () => {
       this.setState(({url}) => ({
            url: "/sign-up",
        })); 
    }

    render() {
        const {url} = this.state;
    
        return(
            <nav className={s.navigation}>
                <NavLink to="/login" className={s.link}>
                    <AiOutlineQuestionCircle className={s.icon}/> 
                    <p className={s.text}>ABOUT</p>
                </NavLink>

                { url === "/sign-up" 
                    ?
                    <NavLink to="/login" className={s.link} onClick={this.toggleLogin}>
                        <BsBoxArrowInRight className={s.icon} />
                        <p className={s.text}>LOGIN</p>
                    </NavLink>
                    :
                    <NavLink to="/sign-up" className={s.link} onClick={this.toggleSignup}>
                        <VscKey className={s.icon}/> 
                        <p className={s.text}>SIGN UP</p>
                    </NavLink>
                }

        </nav>
    )}
}

export default Navigation;