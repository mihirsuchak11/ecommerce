import React from 'react';

import SignIn from './SignIn/SignIn';

import './authentication.scss';
import SignUp from '../../components/SignUp/SignUp';

const Authentication = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication;
