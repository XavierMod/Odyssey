import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '../library/Form/TextField';
import Button from '../library/Buttons/Button';
import { Link } from 'react-router-dom';
import GoogleSignin from '../library/Buttons/GoogleSignIn';
import { PostData } from '../../services/PostData';
import axios from 'axios';
import UserToken from '../../services/UserToken';

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
        console.log(el, type);
        if (type == "email") {
            this.setState({auth: {...this.state.auth, email: el.value}})
            console.log(this.state);
        } else if (type == "password") {
            this.setState({auth: {...this.state.auth, password: el.value}})
            console.log(this.state);
        }
    }

    sendLoginData = () => {
        let formData = new FormData();
        formData.append("content", JSON.stringify(this.state.auth));
        axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/signin.php', formData)
          .then(response => {
              console.log(response);
              if (response.data.id == 'wrong-password') {
                this.setState({errorLogin: {isError: true, bodyError: response.data.message}})
              } else if (response.data.id == 'login-success') {
                UserToken('set', response.data.message);
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
           </SigninWrapper>
        );
    }
};

export default SigninForm;