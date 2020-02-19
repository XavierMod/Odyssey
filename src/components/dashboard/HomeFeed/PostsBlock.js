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
    state = {
        projects: [
            {
                title: 'Test1',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate cursus metus, non aliquam sapien. Sed dui urna, maximus sed metus ac, ultrices luctus leo. Donec vel libero semper, tristique nibh',
                user: 'xaviermod21',
                slug: 'test-one',
                postID: 'hjd8uyUyhj'
            },
            {
                title: 'Test2',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate cursus metus, non aliquam sapien. Sed dui urna, maximus sed metus ac, ultrices luctus leo. Donec vel libero semper, tristique nibh',
                user: 'pepmolina12',
                slug: 'test-two',
                postID: 'opq76sjnhB'
            }
        ],
    }


    render() {
        return (
            <PostsBlockWrapper>
                <BlockInfo>
                    <MainTitle body="Today's Odysseys"/>
                    <p>29 Oct 2019</p>
                </BlockInfo>
                {this.state.projects.map((el, ind) => {
                    return <PostPreview data={el} />
                })}
            </PostsBlockWrapper>
        );
    }
};

export default PostsBlock;