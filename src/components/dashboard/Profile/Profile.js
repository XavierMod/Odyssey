import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import ProfileHeader from './ProfileHeader';
import PostPreview from '../../dashboard/HomeFeed/PostPreview/PostPreview';
import Layout from '../../library/Layout';
import NoMorePosts from './NoMorePosts';
import UserToken from '../../../services/UserToken';
import axios from 'axios';
import PostsBlock from '../HomeFeed/PostsBlock';

const ProfileWrapper = styled.div`
    border: 1px solid red;
`;

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let formData = new FormData();
        console.log(this.state.posts);
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
            <ProfileWrapper>
                    <Layout>
                        {this.state.posts.length == 0 ? <NoMorePosts /> : <PostsBlock posts={this.state.posts} />}
                    </Layout>
            </ProfileWrapper>
        );
    }
};

export default Profile;