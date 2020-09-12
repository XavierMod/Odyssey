/*
    File Description: Rendering the stats on the profile page: number of friends and posts
    Notes: This is a child component from ProfileHeader.js
*/

import React, { Component } from 'react';
import styled from 'styled-components';

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
                <span>{this.props.top}</span>
                <p>{this.props.bottom}</p>
            </ProfileStatsBlockWrapper>
        );
    }
};

export default ProfileStatsBlock;