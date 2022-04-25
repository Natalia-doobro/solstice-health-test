import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import shortid from "shortid";

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
            <div>
                <h2>Reset password</h2>
                <p>Password reset link will be sent to your email</p>

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

                    <button type="submit">Send reset link</button>
                </form>

                <NavLink to="/">Back to log in</NavLink>
            </div>
    )}  
}

export default ResetPassword;