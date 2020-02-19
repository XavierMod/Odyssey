import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MainTitle from '../../library/Styles/MainTitle';
import {odysseySettings} from '../../../config/theme';

const NotificationsWrapper = styled.div`
    h1 {
        text-align: left;
        margin: 0;
        padding: 20px 0;
    }
`;

const NotificationsTitle = styled.div`
    border: 1px solid red;
    padding: 30px;
    background-color: blue;
    opacity: 0.2;
    z-index: 1;
`;

const NotificationsShowWrapper = styled.div`
    border: 1px solid red;
    padding: 30px;
`;

const LoadingNotifications = styled.div`
    background-color: red;
    position: relative;
    top: -30px;
    z-index: -1;
`;

const Separator = styled.div`
    border-bottom: 1px solid ${odysseySettings.fadeLinesColor};
    margin-bottom: 20px;
`;

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <NotificationsWrapper>
                <NotificationsTitle>
                    <MainTitle body="Notifications" />
                    <Separator />
                </NotificationsTitle>
                <LoadingNotifications>
                    test
                </LoadingNotifications>
                <NotificationsShowWrapper>
                    <p>This Week</p>
                </NotificationsShowWrapper>
            </NotificationsWrapper>
        );
    }
};

export default Notifications;