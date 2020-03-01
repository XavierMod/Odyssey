import React, { Component, Suspense } from 'react';
import styled from 'styled-components';
import './App.css';
import axios from 'axios';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import OnboardingWrapper from './components/onboarding-journey/OnboardingWrapper';
import DashboardWrapper from './components/dashboard/DashboardWrapper';
import UsersTemplates from './components/Users/UsersTemplates';
import { Link } from 'react-router-dom';
import { ToastProvider, useToasts } from 'react-toast-notifications'
import AuthVerification from './components/helpers/AuthVerification'
import BottomBar from './components/dashboard/BottomBar'

const DevelopmentRoot = styled.div`
  text-align: center;
  padding-top: 90px;
  
  span {
    display: block;
    padding: 20px 0;
    font-size: 13px;
    font-style: italic;
  }

  p {
    margin : 20px 0;
  }
`;

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://apis.google.com/js/platform.js?onload=onLoadCallback';
    document.body.appendChild(script);
  }

  authenticationRender() {
    if (window.localStorage.getItem('odyssey-user-token') !== null) {
      return(
        <React.Fragment>
          <Route path="/dashboard" component={DashboardWrapper} />
          <Route path="/user" component={UsersTemplates} />
          <BottomBar />
      </React.Fragment>
      )
    } else {
      return(<Route path="/:id" component={AuthVerification} />)
    }
  }


  render() {
    return (
      <React.Fragment>
        <ToastProvider>
          <Switch>
            <Route exact path="/" render={() => <DevelopmentRoot><h3>Odyssey, a project by Xavier Mod.</h3><span>v.0 pre-alpha.</span><Link to="/onboarding"><p>go to Onboarding</p></Link><Link to="/dashboard/home"><p>go to Dashboard</p></Link></DevelopmentRoot>} />
            <Route path="/onboarding" component={OnboardingWrapper} />
            {this.authenticationRender()}
          </Switch>
        </ToastProvider>
    </React.Fragment>
    );
  }
}

export default App;
