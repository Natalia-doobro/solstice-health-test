import React from "react";
import logo from '../../images/logo.png'
import s from "../../style/Logo.module.scss";

const Hero = () => (
    <img src={logo} alt="logo" className={s.logo}/>
)

export default Hero ;