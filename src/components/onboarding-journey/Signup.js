import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderLogo from '../library/Headers/HeaderLogo';
import Button from '../library/Buttons/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GoogleSignin from '../library/Buttons/GoogleSignIn';


const MainWrapper = styled.div`
    max-width: 1200px;
    text-align: center;
    margin: auto;
`;

const P = styled.p`
    margin-top: 30px;

    a, a:active {
        color: black;
    }
`;

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }

        return (
            <MainWrapper>
                <Button variant="withImage" image="email" link={this.props.match.url + "/signup/registration"} body="Sign up with Email" />
                <GoogleSignin />
                <P>Have an account already? <Link to={this.props.match.url + '/signin'}>Sign in.</Link></P>
            </MainWrapper>
        );
    }
};

export default Signup;