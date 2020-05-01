import React, { Component } from 'react';
import styled from 'styled-components'
import ProfileHeader from '../components/dashboard/Profile/ProfileHeader';
import Layout from '../components/library/Layout'
import PostsBlock from '../components/dashboard/HomeFeed/PostsBlock'
import axios from 'axios'
import NoMorePosts from '../components/dashboard/Profile/NoMorePosts'
import UserToken from '../services/UserToken';

const ProfileWrapper = styled.div`
`;

class ProfileTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isActiveUser: this.props.data.nameUser == UserToken('get') ? true : false,
        }
    }

    componentDidMount() {
        let formData = new FormData();
        formData.append("content", this.props.data.nameUser);
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
        console.log('FROM PROFILETEMPLATE', this.props.data)
        return (
            <ProfileWrapper>
                    <ProfileHeader isActiveUser={this.state.isActiveUser} postsLength={this.state.posts.length} {...this.props.data} />
                    <Layout>
                        {this.state.posts.length == 0 ? <NoMorePosts /> : <PostsBlock mainUserProfile={this.props.data} {...this.props.data} posts={this.state.posts} />}
                    </Layout>
            </ProfileWrapper>
        );
    }
};

export default ProfileTemplate;
