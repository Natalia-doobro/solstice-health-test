import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import shortid from "shortid";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import classNames from 'classnames';
import s from '../../style/Form.module.scss'


class SignUp extends Component {
    state = {
        email: "",
        password: "",
        confirmPassword: "",
    };

    emailInputId = shortid.generate();      
    passwordInputId = shortid.generate();
    confirmPasswordInputId = shortid.generate();

    handleChange = (e) => {
        const { name, value } = e.currentTarget;

        this.setState({ [name]: value });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(this.state)

        this.reset();
    };

    reset = () => {
        this.setState({ email: "", password: "", confirmPassword: "",});
    };

    render() {
        const { email, password, confirmPassword } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={s.container}>
                <h1 className={s.tytle}>Sign up</h1>
                <p className={s.text}>Fill in the sign up form to get started</p>

                <div className={s.containerInput}>
                    <label htmlFor={this.emailInputId} className={s.label}>Email address</label>
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

                

                <div className={s.containerInput}>
                    <label htmlFor={this.confirmPasswordInputId} className={s.label}>Confirm password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm password"
                        id={this.confirmPasswordInputId}
                        className={s.input}
                        required
                        onChange={this.handleChange}
                    />
                </div>
                    <button type="submit" className={s.button}>Sign Up</button>
                
                <div className={s.textGoto}>
                  <p>Already have an account? <NavLink to="/login" className={classNames(s.link, s.linkGoto)}>Log in</NavLink></p>
                </div>


                
            </form>
    )}  
}

export default SignUp;