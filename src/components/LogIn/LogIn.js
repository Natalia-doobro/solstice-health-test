import React, { Component } from "react";
// import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import shortid from "shortid";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import authOperations from '../../redux/auth/auth-operations';
import classNames from 'classnames';
import s from '../../style/Form.module.scss'

class LogIn extends Component {
    state = {
        email: "",
        password: "",
        check: false,
        seePassword: false,
        btnSubmit: false,
    };

    emailInputId = shortid.generate();      
    passwordInputId = shortid.generate();
    
    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        const { email, password } = this.state;

        this.setState({ [name]: value });

        if ((email !== '') && (password !== '')) {
            this.setState({ btnSubmit: true });
        } else {
            this.setState({ btnSubmit: false });
        }
    };

    toggleSwitch = () => {
        this.setState(({check}) => ({
            check: !check,
        }));
    }
    seeThePassword = () => {
        this.setState(({seePassword}) => ({
            seePassword: !seePassword,
        }));
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { email, password, check} = this.state;

        // this.dispatch(authOperations.register({ email, password, check }));
        console.log({email, password, check})

        this.reset();
        this.setState({ btnSubmit: false });
    };

    reset = () => {
        this.setState({ email: "", password: ""});
    };

    render() {
        const { email, password, check, seePassword, btnSubmit} = this.state;

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
                        autoComplete="off"
                        onChange={this.handleChange}
                    />
                </div>

                <div className={classNames(s.containerInput, s.inputPassword)}>
                <label htmlFor={this.passwordInputId} className={s.label}>Password</label>
                    <input
                        type={!seePassword ? "password" : "text"}
                        name="password"
                        value={password}
                        placeholder="Password"
                        id={this.passwordInputId}
                        className={s.input}
                        minLength="6"
                        maxLength="15"
                        size="15"
                        required
                        autoComplete="current-password"
                        onChange={this.handleChange}
                    />
                  <button type="button" className={s.btnHiddenPassword} onClick={this.seeThePassword}>
                        {!seePassword
                            ? <AiOutlineEye className={s.iconPassword}/>
                            : <AiOutlineEyeInvisible className={s.iconPassword} />}
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

                <button
                    type="submit" 
                    className={!btnSubmit ? s.button : classNames(s.button, s.buttonActive)}
                    disabled={!btnSubmit} 
                >
                   Log in
                </button>
                
                <div className={s.textGoto}>
                  <p>Don’t have an account? <NavLink to="/sign-up" className={classNames(s.link, s.linkGoto)}>Sign up</NavLink></p>
                </div>

            </form>
    )}  
}

export default LogIn;