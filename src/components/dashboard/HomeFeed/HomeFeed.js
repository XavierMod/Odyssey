import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogo from '../../library/Headers/HeaderLogo';
import PostPreview from './PostPreview/PostPreview';
import Layout from '../../library/Layout';
import PostsBlock from './PostsBlock';
import UserToken from '../../../services/UserToken';
import axios from 'axios';

const HomeFeedWrapper = styled.div`
`;

class HomeFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let formData = new FormData();
        console.log(UserToken('get'));
        formData.append("content", UserToken('get'));
        axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/fetchProfile.php', formData)
          .then(response => {
              console.log(response.data);
              this.setState({posts: response.data});
          })
          .catch(function (error) {
            alert(error);
          });
    }

    render() {
        return (
                <HomeFeedWrapper>
                    <HeaderLogo size="small"></HeaderLogo>
                    <Layout>
                        <PostsBlock posts={this.state.posts} />
                    </Layout>
                </HomeFeedWrapper>
        );
    }
};

export default HomeFeed;