import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import HeaderLogo from '../library/Headers/HeaderLogo';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField from '../../components/library/Form/TextField';
import Button from '../library/Buttons/Button';

const FORM = styled.form`
    text-align: center;

    .buttonPrimary {
        margin-bottom: 20px;
    }
`;

class SignupJourney extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
        <FORM noValidate autoComplete="on">
            <TextField type="text" label="Your Full Name" />
            <TextField fieldType="email" type="email" label="Your Email" />
            <TextField fieldType="password" type="password" label="Your Password" />
            <Button variant="primary" body="Next" link={this.props.match.url + '/next'}/>
            <Button variant="primary" body="Go Back" link="/onboarding"/>
        </FORM>
        );
    }
};

export default SignupJourney;