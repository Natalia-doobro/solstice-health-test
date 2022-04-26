import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import shortid from "shortid";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import classNames from 'classnames';
import s from '../../style/Form.module.scss'

class LogIn extends Component {
    state = {
        email: "",
        password: "",
        check: false,
    };

    emailInputId = shortid.generate();      
    passwordInputId = shortid.generate();
    
    handleChange = (e) => {
        const { name, value } = e.currentTarget;

        this.setState({ [name]: value });
    };

    toggleSwitch = () => {
        this.setState(({check}) => ({
            check: !check,
        }));
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(this.state)

        this.reset();
    };

    reset = () => {
        this.setState({ email: "", password: ""});
    };

    render() {
        const { email, password, check } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={s.container}>
                <h1 className={s.tytle}>Welcome</h1>
                <p className={s.text}>Enter your email and password to log in</p>


                <div className={s.containerInput}>
                <label htmlFor={this.emailInputId}  className={s.label}>Email address</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email address"
                        id={this.emailInputId}
                        className={s.input}
                        required
                        onChange={this.handleChange}
                    />
                </div>

                <div className={classNames(s.containerInput, s.inputPassword)}>
                <label htmlFor={this.passwordInputId} className={s.label}>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        id={this.passwordInputId}
                        className={s.input}
                        required
                        onChange={this.handleChange}
                    />
                     <button className={s.btnHiddenPassword}>
                       <AiOutlineEye className={s.iconPassword}/>
                        {/* <AiOutlineEyeInvisible className={s.iconPassword}/> */}
                    </button>
                </div>

                    
                <div className={s.switchContaine}>
                    <div className={s.switch} onClick={() => this.toggleSwitch()}>
                        <p className={s.textSwitch}>Remember me</p>
                        <div className={s.switchContainer} > 
                            <div className={!check ? s.switchBackground : s.switchBackgroundCheck}></div> 
                            <div className={!check ? s.switchHandle : s.switchHandleCheck}></div>  
                        </div> 
                    </div> 

                        <NavLink to="/reset-password" className={s.link}>Reset password</NavLink>
                    </div>

                <button type="submit" className={s.button}>Log in</button>
                
                <div className={s.textGoto}>
                  <p>Don’t have an account? <NavLink to="/sign-up" className={classNames(s.link, s.linkGoto)}>Sign up</NavLink></p>
                </div>

            </form>
    )}  
}

export default LogIn;