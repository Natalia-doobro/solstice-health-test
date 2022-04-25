import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import shortid from "shortid";
import { BsEye, BsEyeSlash } from "react-icons/bs";


class LogIn extends Component {
    state = {
        email: "",
        password: "",
        checkbox: false,
    };

    emailInputId = shortid.generate();      
    passwordInputId = shortid.generate();
    checkboxInputId = shortid.generate();

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
        this.setState({ email: "", password: ""});
    };

    render() {
        const { email, password, checkbox } = this.state;

        return (
            <div>
                <h2>Welcome</h2>
                <p>Enter your email and password to log in</p>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={this.emailInputId}>Email address</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email address"
                        id={this.emailInputId}
                        required
                        onChange={this.handleChange}
                    />

                    <label htmlFor={this.passwordInputId}>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        id={this.passwordInputId}
                        required
                        onChange={this.handleChange}
                    />
                    <button><BsEye/><BsEyeSlash/></button>
                    
                    <label htmlFor={this.checkboxInputId}>Remember me</label>
                    <input
                        type="checkbox"
                        name="checkbox"
                        value={checkbox}
                        id={this.checkboxInputId}
                        onChange={this.handleChange}
                    />

                    <NavLink to="/">Reset password</NavLink>

                    <button type="submit">Log in</button>
                </form>

                <p>Don’t have an account? <NavLink to="/">Sign up</NavLink></p>
            </div>
    )}  
}

export default LogIn;