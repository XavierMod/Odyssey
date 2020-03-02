import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogo from '../../library/Headers/HeaderLogo';
import PostPreview from './PostPreview/PostPreview';
import Layout from '../../library/Layout';
import { odysseySettings } from '../../../config/theme';
import MainTitle from '../../library/Styles/MainTitle';
import Filter from './Filter/Filter'
import { ToastProvider, useToasts } from 'react-toast-notifications'

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

    constructor(props) {
        super(props);
        this.state = {
            finalQuery: []        
        } 
    }

    renderPosts = (type) => {
        const finalQuery = [...this.state.finalQuery];
        const allPosts = [...this.props.posts];

        if (finalQuery.length > 0) {
            var filterPosts;
            finalQuery.forEach((el, ind, obj) => {
                if (el.type == 'Location') {
                    filterPosts = allPosts.filter((element) => {
                        return element.locationData.toLowerCase() == el.query.toLowerCase()
                    })
                }
            });

            return filterPosts.map((el, ind) => {
                return (<PostPreview postsLength={this.props.posts.length} data={el} />)
            });
        } else {
            return this.props.posts.map((el, ind) => {
                return (<PostPreview postsLength={this.props.posts.length} data={el} />)
            })
        }
    }

    getFinalQuery = (el) => {
        this.setState({finalQuery: el});
    }

    render() {
        return (
            <PostsBlockWrapper>
                <BlockInfo>
                    <MainTitle body="Today's Odysseys"/>
                    <p>29 Oct 2019</p>
                </BlockInfo>
                <Filter sendFinalQuery={(el) => this.getFinalQuery(el)}/>
                {this.renderPosts()}
            </PostsBlockWrapper>
        );
    }
};

export default PostsBlock;