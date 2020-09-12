/*
    File Description: KEY Component that renders all dashboard options depending on routes: home, notifications and search.
    Notes: KEY component. 
*/

import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomeFeed from './HomeFeed/HomeFeed';
import Notifications from './Notifications/Notifications';
import Search from './Search/Search'

class DashboardWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Route path={this.props.match.url + '/home'} component={HomeFeed}/>
                <Route path={this.props.match.url + '/notifications'} component={Notifications}/>
                <Route path={this.props.match.url + '/search'} component={Search}/>
            </React.Fragment>
        );
    }
};

export default DashboardWrapper;