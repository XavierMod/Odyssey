/*
    File Description: Creates a text field.
    Notes: LIBRARY component. 
*/

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { odysseySettings } from '../../../config/theme';
import Checkmark from '../../../assets/icons/checkmark.svg';
import * as FormServices from '../../../services/FormServices';
import NotificationField from '../../library/Form/NotificationField';

const TextFieldWrapper = styled.div`
    display: block;
    margin: 40px auto;
    text-align: center;

    label {
        font-family: ${odysseySettings.headingFont};
        color: ${odysseySettings.primaryColor};
        font-size: 16px;
        letter-spacing: ${odysseySettings.letterSpacing};
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

    // Validating the email structure and adding a check
    validateEmail = ( input ) => {
        if (FormServices.validateEmail(input.value)) {
            this.setState({validationIcon: true})
        } else {
            this.setState({validationIcon: false})
        }
    }

    // Using Regex to validate the strength of the password
    validatePassword = ( input ) => {
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

    // Renders different types of fields based on props
    render() {
        if (this.props.fieldType == 'email') {
            return (
                <TextFieldWrapper>
                    <ContentWrapper>
                        <div style={{position: 'relative'}}>
                            <TextField name={this.props.name} required={this.props.required} onChange={(ev) => {
                                this.validateEmail(ev.target);
                                this.props.onChange(ev.target);
                            }} id="standard-basic" type={this.props.type} label={this.props.label} />
                            {this.state.validationIcon ? <CheckIcon src={Checkmark} /> : null}
                        </div>
                        {this.props.showError ? <NotificationField body={this.props.bodyError} /> : null}
                    </ContentWrapper>
                </TextFieldWrapper>
                );
        } else if (this.props.fieldType == 'password') {
            return (
                <TextFieldWrapper>
                    <ContentWrapper>
                        <TextField
                            name={this.props.name} 
                            inputProps={{ maxLength: this.props.maxLength, minLength: 6 }} required={this.props.required}  
                            onChange={(ev) => {
                            this.props.onChange(ev.target);
                            this.validatePassword(ev.target)}}
                            id="standard-basic" type="password" 
                            label={this.props.label} />
                        <br/>{this.props.hidePasswordStrength ? null : <PasswordStrength>{this.state.passwordStrength}</PasswordStrength>}
                        {this.props.showError ? <NotificationField body={this.props.bodyError} /> : null}
                    </ContentWrapper>
                </TextFieldWrapper>
                );
        } else {
            return (
                <TextFieldWrapper>
                    <ContentWrapper>
                        <TextField name={this.props.name} onChange={(ev) => this.props.onChange(ev.target)} inputProps={{ maxLength: this.props.maxLength, minLength: 6 }} id="standard-basic" required={this.props.required}  type={this.props.type} label={this.props.label} />
                        {this.props.showError ? <NotificationField body={this.props.bodyError} /> : null}
                    </ContentWrapper>
                </TextFieldWrapper>
                );
        }
    }
}

export default BasicTextFields;