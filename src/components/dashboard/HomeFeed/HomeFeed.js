import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogo from '../../library/Headers/HeaderLogo';
import PostPreview from './PostPreview/PostPreview';
import Layout from '../../library/Layout';
import PostsBlock from './PostsBlock';

const HomeFeedWrapper = styled.div`
`;

class HomeFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <HomeFeedWrapper>
                    <HeaderLogo size="small"></HeaderLogo>
                    <Layout>
                        <PostsBlock />
                    </Layout>
                </HomeFeedWrapper>
        );
    }
};

export default HomeFeed;