import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import shortid from "shortid";
import { BiChevronLeft } from "react-icons/bi";
import classNames from 'classnames';
import s from '../../style/Form.module.scss'

class ResetPassword extends Component {
    state = {
        email: "",
    };

    emailInputId = shortid.generate();

    handleChange = (e) => {
        this.setState({ email: e.currentTarget.value });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(this.state)

        this.reset();
    };

    reset = () => {
        this.setState({ email: ""});
    };

    render() {
        const { email } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={s.container}>
                <div className={s.containerTytle}>
                   <NavLink to="/login" className={s.link}><BiChevronLeft className={s.iconReset}/></NavLink>
                   <h1 className={s.tytleReset}>Reset password</h1>
                </div>
                
                <p className={s.text}>Password reset link will be sent to your email</p>

                <div className={s.containerInput} >
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

                <button type="submit" className={classNames(s.button, s.buttonReset)}>Send reset link</button>
                

                <NavLink to="/login" className={classNames(s.link, s.linkReset)}>Back to log in</NavLink>
            </form>
    )}  
}

export default ResetPassword;