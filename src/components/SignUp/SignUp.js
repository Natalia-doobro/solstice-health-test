import React, { Component } from "react";
// import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import shortid from "shortid";
// import authOperations from '../../redux/auth/auth-operations';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import classNames from 'classnames';
import s from '../../style/Form.module.scss'


class SignUp extends Component {
    state = {
        email: "",
        password: "",
        confirmPassword: "",
        seePassword: false,
        seeconfirmPassword: false,
        validation: true,
        btnSubmit: false,
    };

    // dispatch = useDispatch();
    emailInputId = shortid.generate();      
    passwordInputId = shortid.generate();
    confirmPasswordInputId = shortid.generate();

    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        const { email, password, confirmPassword } = this.state;

        this.setState({ [name]: value });

        if ((email !== '') && (password !== '') && (confirmPassword !== '')) {
            this.setState({ btnSubmit: true });
        } else {
            this.setState({ btnSubmit: false });
        }
    };
    seeThePassword = () => {
        this.setState(({seePassword}) => ({
            seePassword: !seePassword,
        }));      
    }

    seeTheConfirmPassword = () => {
        this.setState(({seeconfirmPassword}) => ({
            seeconfirmPassword: !seeconfirmPassword,
        }));
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            return this.setState(({validation}) => ({
                validation: false,
            }));
        }

        this.setState(({validation}) => ({
            validation: true,
        }));

        // this.dispatch(authOperations.register({ email, password, confirmPassword }));

        console.log({ email, password, confirmPassword })

        this.reset();
        this.setState({ btnSubmit: false });
    };

    reset = () => {
        this.setState({ email: "", password: "", confirmPassword: "",});
    };

    render() {
        const { email, password, confirmPassword, seePassword, seeconfirmPassword, validation, btnSubmit} = this.state;

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
                        autoComplete="off"
                        onChange={this.handleChange}
                    />
                </div>

                <div className={classNames(s.containerInput, s.inputPassword)}>
                    <label htmlFor={this.passwordInputId} className={validation ? s.label : classNames(s.label, s.ivalidInput)}>Password</label>
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

                

                <div className={classNames(s.containerInput, s.inputPassword)}>
                    <label htmlFor={this.confirmPasswordInputId} className={validation ? s.label : classNames(s.label, s.ivalidInput)}>Confirm password</label>
                    <input
                        type={!seeconfirmPassword ? "password" : "text"}
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm password"
                        id={this.confirmPasswordInputId}
                        className={s.input}
                        minLength="6"
                        maxLength="15"
                        size="15"
                        required
                        autoComplete="current-password"
                        onChange={this.handleChange}
                    />
                    <button type="button" className={s.btnHiddenPassword} onClick={this.seeTheConfirmPassword}>
                        {!seeconfirmPassword
                            ? <AiOutlineEye className={s.iconPassword}/>
                            : <AiOutlineEyeInvisible className={s.iconPassword} />}
                    </button>
                </div>
                    
                    
                <button
                    type="submit" 
                    className={!btnSubmit ? s.button : classNames(s.button, s.buttonActive)}
                    disabled={!btnSubmit} 
                >
                    Sign Up
                </button>
                
                <div className={s.textGoto}>
                  <p>Already have an account? <NavLink to="/login" className={classNames(s.link, s.linkGoto)}>Log in</NavLink></p>
                </div>


                
            </form>
    )}  
}

export default SignUp;