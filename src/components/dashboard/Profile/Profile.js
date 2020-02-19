import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import ProfileHeader from './ProfileHeader';
import PostPreview from '../../dashboard/HomeFeed/PostPreview/PostPreview';
import Layout from '../../library/Layout';
import NoMorePosts from './NoMorePosts';
const ProfileWrapper = styled.div`

`;

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ProfileWrapper>
                    <ProfileHeader />
                    <Layout>
                        <NoMorePosts />
                    </Layout>
            </ProfileWrapper>
        );
    }
};

export default Profile;