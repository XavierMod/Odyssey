import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MainTitle from '../../library/Styles/MainTitle';
import {odysseySettings} from '../../../config/theme';
import HeaderLogo from '../../library/Headers/HeaderLogo';

const NotificationsWrapper = styled.div`
    text-align: center;
`;

const NotificationsInfo = styled.div `
      h1 {
        margin: 0 40px;
        padding-top: 160px;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
    }

    p {
        margin: 30px;
    }  
`;

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <NotificationsWrapper>
                <HeaderLogo addSettings/>
                <NotificationsInfo>
                    <h1>Sorry, notifications are not available on this version.</h1>
                    <p>Here you will be able to see new followings, friend's activity and more.</p>
                </NotificationsInfo>
            </NotificationsWrapper>
        );
    }
};

export default Notifications;