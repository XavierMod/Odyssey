import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import styled from 'styled-components';
import HeaderLogo from '../library/Headers/HeaderLogo';
import Button from '../library/Buttons/Button';
import Signin from './Signin';
import Signup from './Signup';
import SignupJourney from './SignupJourney';
import SignupJourneyNext from './SignupJourneyNext';
import OnboardingLoading from './OnboardingLoading';
import MainTitle from '../library/Styles/MainTitle';

class OnboardingWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props.match.url);
        return (
            <React.Fragment>
                <HeaderLogo size="small" />
                <br/>
                <MainTitle body="Start your Odyssey"/>
                <Route exact path={this.props.match.url} component={Signup}/>
                <Route exact path={this.props.match.url + '/signup/registration'} component={SignupJourney}/>
                <Route exact path={this.props.match.url + '/signup/registration/next'} component={SignupJourneyNext}/>
                <Route path={this.props.match.url + '/signin'} component={Signin}/>
                <Route path={this.props.match.url + '/loading'} component={OnboardingLoading}/>
            </React.Fragment>
        );
    }
};

export default OnboardingWrapper;