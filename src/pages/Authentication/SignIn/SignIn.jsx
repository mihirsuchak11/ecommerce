import React, { Component } from 'react';

import FormInput from '../../../components/FormInput/FormInput';
import CustomButton from '../../../components/CustomButton/CustomButton';

import { signInWithGoogle } from '../../../firebase/firebaseUtils';

import './SignIn.scss';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }

    render () {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        label="Email"
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Submit Form</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>SignIn with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;