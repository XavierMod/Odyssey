import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import styled from 'styled-components';
import HeaderLogo from '../library/Headers/HeaderLogo';
import Button from '../library/Buttons/Button';
import Signin from './SigninForm';
import Signup from './signup/Signup';
import SignupForm from './signup/SignupForm';
import SignupFormProfile from './signup/SignupFormProfile';
import OnboardingLoading from './OnboardingLoading';
import MainTitle from '../library/Styles/MainTitle';

class OnboardingWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <HeaderLogo size="small" />
                <br/>
                <MainTitle body="Start your Odyssey"/>
                <Route exact path={this.props.match.url} component={Signup}/>
                <Route exact path={this.props.match.url + '/signup/registration'} component={SignupForm}/>
                <Route exact path={this.props.match.url + '/signup/registration/next'} component={SignupFormProfile}/>
                <Route path={this.props.match.url + '/signin'} component={Signin}/>
                <Route path={this.props.match.url + '/loading'} component={OnboardingLoading}/>
            </React.Fragment>
        );
    }
};

export default OnboardingWrapper;