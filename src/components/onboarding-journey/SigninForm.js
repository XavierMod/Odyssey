import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '../library/Form/TextField';
import Button from '../library/Buttons/Button';
import { Link } from 'react-router-dom';
import GoogleSignin from '../library/Buttons/GoogleSignIn';
import { PostData } from '../../services/PostData';
import axios from 'axios';
import UserToken from '../../services/UserToken';
import MainTitle from '../library/Styles/MainTitle'

const SigninWrapper = styled.div`
    text-align: center;
    max-width: 400px;
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

const ButtonsHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 70px;

    .button {
        margin: 20px;
        padding: 0;
        width: 80px !important;
        padding: 10px;
        border-radius: 100px;
    }
`;



class SigninForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {},
            errorLogin: {
                isError: false,
                bodyError: ''
            }
        }
    }

    onChange(el, type) {
        if (type == "email") {
            this.setState({auth: {...this.state.auth, email: el.value}})
        } else if (type == "password") {
            this.setState({auth: {...this.state.auth, password: el.value}})
        }
    }

    sendLoginData = () => {
        let formData = new FormData();
        formData.append("content", JSON.stringify(this.state.auth));
        axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/signin.php', formData)
          .then(response => {
              if (response.data.id == 'wrong-password') {
                this.setState({errorLogin: {isError: true, bodyError: response.data.message}})
              } else if (response.data.id == 'login-success') {
                UserToken('set', response.data.message)
                window.location.href = '/dashboard/home/';
              }
          })
          .catch(function (error) {
            alert(error);
          });
    }

    render() {
        return (
            <SigninWrapper>
                <form noValidate autoComplete="on">
                    <IMG src="https://opendoodles.s3-us-west-1.amazonaws.com/float.svg" />
                    <MainTitle body="Sign in"/>
                    <TextField onChange={(el) => this.onChange(el, "email")} fieldType="email" type="email" label="Your email" />
                    <TextField 
                        onChange={(el) => this.onChange(el, "password")} 
                        fieldType="password" label="Your password" 
                        hidePasswordStrength
                        showError={this.state.errorLogin.isError} 
                        bodyError={this.state.errorLogin.bodyError}/>
                    <Button onClick={this.sendLoginData} variant="primary" body="Log In"/>
                    <GoogleSignin />
                </form>
                <P>Don't have an account? <Link to='/onboarding'>Sign up!</Link></P>
                <ButtonsHeader>
                    <Button variant="primary" body="Go Back" link="/onboarding"/>
            </ButtonsHeader>
           </SigninWrapper>
        );
    }
};

export default SigninForm;