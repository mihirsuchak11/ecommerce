import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils';

import './signUp.scss';

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log(error)
        }
    };

    handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        this.setState({ [name]: value })
    }

    render () {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Display Name"
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type="Submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;