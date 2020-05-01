// Signup Form that handles database checking

import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import axios from 'axios';
import TextField from '../../library/Form/TextField';
import Button from '../../library/Buttons/Button';
import { checkEmptyFields, validateEmail } from '../../../services/FormServices';
import MainTitle from '../../library/Styles/MainTitle';
import UserToken from '../../../services/UserToken';

const FORM = styled.form`
    text-align: center;
`;

const IMG = styled.img`
    padding-top: 80px;
    width: 400px;
    margin: auto;
    display: block;
`;

const ButtonsHeader = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    z-index: 101000;
    
    .button {
        margin: 20px;
        padding: 0;
        width: 80px !important;
        padding: 10px;
        border-radius: 100px;
    }
`;

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {
                username: '',
                email: '',
                password: '',
            },
            validated: false,
            errorUsername: {
                isError: false,
                bodyError: ''
            },
            errorEmail: {
                isError: false,
                bodyError: ''
            }
        }
    }

    sendData = () => {
        let formData = new FormData();
        formData.append("content", JSON.stringify(this.state.auth));
        axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/signup.php', formData)
          .then(response => {
              console.log(response);
            if (response.data.id == 'email-taken') {
                console.log(response)
                this.setState({errorEmail: {isError: true, bodyError: response.data.message}})
            } else if (response.data.id == 'username-taken') {
                this.setState({errorUsername: {isError: true, bodyError: response.data.message}})
            } else if (response.data.id == 'email-username-taken') {
                this.setState({errorUsername: {isError: true, bodyError: response.data.messageUsername},
                               errorEmail: {isError: true, bodyError: response.data.messageEmail}});
            } else {
            UserToken('set', this.state.auth.username);
              window.location.href = '/onboarding/loading';
            }
          })
          .catch(function (error) {
            alert(error);
          });
    }


    validation = () => {
        if (checkEmptyFields({...this.state.auth}) && validateEmail(this.state.auth.email)) {
            this.setState({validated: true})
            console.log(this.state.validated)
        } else {
            this.setState({validated: false})

        }
    }

    onChange(el, type) {
        if (type == "email") {
            this.setState({auth: {...this.state.auth, email: el.value}})
            console.log(this.state);
        } else if (type == "password") {
            this.setState({auth: {...this.state.auth, password: el.value}})
            console.log(this.state);
        } else if (type == 'username') {
            this.setState({auth: {...this.state.auth, username: el.value.toLowerCase()}})
            console.log(this.state);
        } 
        this.validation();
    }

    render() {
        return (
            <React.Fragment>
            <IMG src="https://opendoodles.s3-us-west-1.amazonaws.com/unboxing.svg" />
            <MainTitle body="Sign in"/>
        <FORM noValidate autoComplete="on">
            <TextField showError={this.state.errorUsername.isError} bodyError={this.state.errorUsername.bodyError} onChange={(el) => this.onChange(el, "username")} type="text" label="Your Username" />
            <TextField showError={this.state.errorEmail.isError} bodyError={this.state.errorEmail.bodyError} onChange={(el) => this.onChange(el, "email")} fieldType="email" type="email" label="Your Email" />
            <TextField onChange={(el) => this.onChange(el, "password")} fieldType="password" type="password" label="Your Password" />
            <ButtonsHeader>
                <Button variant="primary" body="Go Back" link="/onboarding"/>
                <Button onClick={this.sendData} 
                        variant="primary" 
                        body="Next"
                        disabled={this.state.validated ? false : true} />
            </ButtonsHeader>
        </FORM>
        </React.Fragment>
        );
    }
};

export default SignupForm;