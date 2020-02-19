import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import BottomBar from './BottomBar';
import HomeFeed from './HomeFeed/HomeFeed';
import Profile from './Profile/Profile';
import Notifications from './Notifications/Notifications';

class DashboardWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Route path={this.props.match.url + '/home'} component={HomeFeed}/>
                <Route path={this.props.match.url + '/profile'} component={Profile}/>
                <Route path={this.props.match.url + '/notifications'} component={Notifications}/>
                <BottomBar />
            </React.Fragment>
        );
    }
};

export default DashboardWrapper;