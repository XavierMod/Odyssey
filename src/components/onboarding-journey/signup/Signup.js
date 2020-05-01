// Main Signup component containing sign up options

import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../library/Headers/HeaderLogo';
import Button from '../../library/Buttons/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GoogleSignin from '../../library/Buttons/GoogleSignIn';
import MainTitle from '../../library/Styles/MainTitle';

const MainWrapper = styled.div`
    max-width: 1200px;
    text-align: center;
    margin: auto;
`;

const P = styled.p`
    margin-top: 30px;
    font-size: 14px;

    a, a:active {
        color: #FF5678;
        padding: 5px;
    }
`;

const IMG = styled.img`
    width: 400px;
    padding-top: 60px;
`;

const Information = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 30px 0;
    margin: 30px 0;

    h1 {
        font-weight: bold;
    }
`;

const Description = styled.p`
    font-size: 15px;
    margin: 20px 0;
    line-height: 20px;
    max-width: 400px;
    margin: 20px auto;
    opacity: 0.8;
`;

const Version = styled.div`
    font-size: 11px;
    font-weight: 700;
    opacity: 0.4;
    margin: 30px 0;
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
                <IMG src="https://opendoodles.s3-us-west-1.amazonaws.com/zombieing.svg" />
                <MainTitle body="Start your Odyssey"/>
                <Button variant="withImage" image="email" link={this.props.match.url + "/signup/registration"} body="Sign up with Email" />
                <GoogleSignin />
                <P>Have an account already? <Link to={this.props.match.url + '/signin'}>Sign in.</Link></P>
                <Information>
                    <h1>What's Odyssey?</h1>
                    <Description>A Social Media web application targeted to adventurers where they can post their adventures, journeys, etc. This is a University project made by Xavier Mod.</Description>
                </Information>
                <Version>Version 1.43.1 (stable release).</Version>
            </MainWrapper>
        );
    }
};

export default Signup;