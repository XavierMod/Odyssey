import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '../library/Form/TextField';
import Button from '../library/Buttons/Button';
import { Link } from 'react-router-dom';
import GoogleSignin from '../library/Buttons/GoogleSignIn';


const SigninWrapper = styled.div`
    text-align: center;
    max-width: 400px;
    margin: auto;
`;

const P = styled.p`
    margin-top: 30px;

    a, a:active {
        color: black;
    }
`;

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <SigninWrapper>
                <form noValidate autoComplete="on">
                    <TextField fieldType="email" type="email" label="Your email" />
                    <TextField type="password" label="Your password" />
                    <Button variant="submit" body="Log In" link="/"/>
                    <GoogleSignin />
                </form>
                <P>Don't have an account? <Link to='/onboarding'>Sign up!</Link></P>
           </SigninWrapper>
        );
    }
};

export default Signin;