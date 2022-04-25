import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import shortid from "shortid";
import { BsEye, BsEyeSlash } from "react-icons/bs";


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
            <div>
                <h2>Sign up</h2>
                <p>Fill in the sign up form to get started</p>

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

                    <label htmlFor={this.confirmPasswordInputId}>Confirm password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm password"
                        id={this.confirmPasswordInputId}
                        required
                        onChange={this.handleChange}
                    />

                    <button type="submit">Sign Up</button>
                </form>

                <p>Already have an account? <NavLink to="/">Log in</NavLink></p>
            </div>
    )}  
}

export default SignUp;