import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogo from '../../library/Headers/HeaderLogo';
import PostPreview from './PostPreview/PostPreview';
import Layout from '../../library/Layout';
import { odysseySettings } from '../../../config/theme';
import MainTitle from '../../library/Styles/MainTitle';

const PostsBlockWrapper = styled.div`
    margin: 20px 0;
    padding-bottom: 40px;
`;

const BlockInfo = styled.div`
    text-align: center;

    p {
        margin-top: 10px;
        opacity: 0.3;
    }
`;

class PostsBlock extends Component {
    state = {}

    render() {
        console.log(this.props);
        return (
            <PostsBlockWrapper>
                <BlockInfo>
                    <MainTitle body="Today's Odysseys"/>
                    <p>29 Oct 2019</p>
                </BlockInfo>
                {this.props.posts.map((el, ind) => {
                    return <PostPreview postsLength={this.props.posts.length} data={el} />
                })}
            </PostsBlockWrapper>
        );
    }
};

export default PostsBlock;