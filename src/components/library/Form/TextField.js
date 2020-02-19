import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { odysseySettings } from '../../../config/theme';
import Checkmark from '../../../assets/icons/checkmark.svg';

const TextFieldWrapper = styled.div`
    display: block;
    margin: 40px auto;
    text-align: center;

    label {
        font-family: ${odysseySettings.headingFont};
        color: ${odysseySettings.primaryColor};
        font-size: 16px;
    }

    input {
        color: ${odysseySettings.primaryColor};
        width: 300px;
        font-family: ${odysseySettings.bodyFont};
    }

    .MuiInput-underline:after {
        border-bottom: 2px solid ${odysseySettings.primaryColor};
    }

    .MuiFormLabel-root.Mui-focused {
        color: black;
    }
`;

const ContentWrapper = styled.div`
    width: 300px;
    margin: auto;
    position: relative;
`;

const CheckIcon = styled.img`
    position: absolute;
    right: 0;
    height: 100%;
    transform: scale(0.4);
    z-index: 1000;
`;

const PasswordStrength = styled.p`
    width: 300px;
    text-align: left;
    margin: auto;
    font-size: 13px;
    margin-top: 20px;
`;

class BasicTextFields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validationIcon: false,
            passwordStrength: "Password strength: None"
        }
    }

    render() {
        const validateEmail = ( input ) => {
            var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      
            if (input.value.match(email)) {
                this.setState({validationIcon: true})
            } else {
                this.setState({validationIcon: false})
            }
        }

        const validatePassword = ( input ) => {
            var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
            var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
            var okRegex = new RegExp("(?=.{6,}).*", "g");

            if (input.value.match(strongRegex)) {
                this.setState({passwordStrength: 'Password strength: NASA level!'})
            } else if (input.value.match(mediumRegex)) {
                this.setState({passwordStrength: 'Password strength: Medium'})
            } else if (input.value.match(okRegex)) {
                this.setState({passwordStrength: 'Password strength: OK'})
            } else {
                this.setState({passwordStrength: 'Password strength: None'})
            }
        }

        if (this.props.fieldType == 'email') {
            return (
                <TextFieldWrapper>
                    <ContentWrapper>
                        {this.state.validationIcon ? <CheckIcon src={Checkmark} /> : null}
                        <TextField required onChange={(ev) => validateEmail(ev.target)} id="standard-basic" type={this.props.type} label={this.props.label} />
                    </ContentWrapper>
                </TextFieldWrapper>
                );
        } else if (this.props.fieldType == 'password') {
            return (
                <TextFieldWrapper>
                    <TextField inputProps={{ maxLength: 20, minLength: 6 }} required onChange={(ev) => validatePassword(ev.target)} id="standard-basic" type={this.props.type} label={this.props.label} />
                    <br/><PasswordStrength>{this.state.passwordStrength}</PasswordStrength>
                </TextFieldWrapper>
                );
        } else {
            return (
                <TextFieldWrapper>
                    <TextField inputProps={{ maxLength: 20, minLength: 6 }} id="standard-basic" required type={this.props.type} label={this.props.label} />
                </TextFieldWrapper>
                );
        }
    }
}

export default BasicTextFields;