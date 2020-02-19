import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { odysseySettings } from '../../../config/theme';

const ProfileStatsBlockWrapper = styled.div`
    flex: 33.33%;

    span {
        font-family: sans-serif;
        font-weight: 700;
    }

    p {
        padding-top: 10px;
    }


`;

class ProfileStatsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ProfileStatsBlockWrapper>
                <span>312</span>
                <p>Followers</p>
            </ProfileStatsBlockWrapper>
        );
    }
};

export default ProfileStatsBlock;