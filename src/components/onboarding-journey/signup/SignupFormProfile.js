// Signup Form adding optional profile information

import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import HeaderLogo from '../../library/Headers/HeaderLogo';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField from '../../library/Form/TextField';
import Button from '../../library/Buttons/Button';
import TextArea from '../../library/Form/TextArea';
import FileUpload from '../../library/Form/FileUpload';

const FORM = styled.form`
    text-align: center;
    margin-bottom: 70px;

    .buttonPrimary {
        margin: 10px 0;
    }
`;

const P = styled.p`
    max-width: 1000px;
    margin: auto;
    line-height: 30px;
    padding: 0 30px;
`;

class SignupFormProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
        <FORM noValidate autoComplete="on">
            <P>To set up your profile, we'll need some information first and you'll be good to go. You can do this later if you want.</P>
            <TextField type="text" label="Your Odyssey profile name" />
            <TextArea label="Bio" />
            <FileUpload label="Your Profile Pic" />
            <Button variant="primary" body="Create my profile!" link="/onboarding/loading"/>
            <Button variant="primary" body="Go Back" link="/onboarding/signup/registration"/>
        </FORM>
        );
    }
};

export default SignupFormProfile;