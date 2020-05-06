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

const IMG = styled.img`
    width: 130px;
    padding-top: 60px;
    margin: auto;
    display: block;
`;

const HomeNavBar = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    li {
        display: inline-block;
        padding: 20px;
        margin: 0 10px; 
        font-size: 17px;
        border-bottom: 7px solid black;
        opacity: ${props => props.opacity};
        cursor: pointer;
    }
`;

const RenderNearbyWrapper = styled.div`
    span {
        font-weight: bold;
    }
`;

const NearbyMessage = styled.p`
        text-align: center;
        padding: 40px 0;
        padding-bottom: 0px;
        font-size: 18px;
`;

const NoPostsOnFeed = styled.div`
    text-align: center;
    
    h1 {
        margin: 20px 0;
        font-weight: 700;
        font-size: 25px;
    }

    p {
        font-size: 18px;
        line-height: 25px;
    }
`;

class HomeFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            activeTab: 'feed',
            nearbyPosts: []      
        }
    }

    componentDidMount() {
        if (navigator.geolocation) { //check if geolocation is available
            navigator.geolocation.getCurrentPosition(position => {

             axios.post(`https://us1.locationiq.com/v1/reverse.php?key=59b97fa2604213&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
              .then(response => {
                  this.setState({userCity: response.data.address.city});

                //Rendering nearby

                let formData = new FormData();
                formData.append("content", response.data.address.city);
                axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getNearbyPosts.php', formData)
                    .then(response => {
                        this.setState({nearbyPosts: response.data})
                    })
                    .catch(function (error) {
                    alert(error);
                    });

              })
              .catch(function (error) {
                alert(error);
              });
            });   
        }

        //Getting user friends
        let friendsFormData = new FormData();
        friendsFormData.append("content", UserToken('get'));
        Promise.all([
            axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getProfileByNameUser.php', friendsFormData)
        ]).then(([r1]) => {
            this.setState({mainUserProfile: r1.data[0]});
            this.setState({userFriends: r1.data[0].friends});
        })

        //Fetching the feed
        if (this.state.userFriends !== '') {
            let formData = new FormData();
            formData.append("content", UserToken('get'));
            axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/fetchFeed.php', formData)
              .then(response => {
                  this.setState({posts: response.data});
              })
              .catch(function (error) {
                alert(error);
              });
        }
    }

    renderNearby = () => {
        return (
            <RenderNearbyWrapper>
                    {this.state.userCity ? <NearbyMessage>📍 You are in <span>{this.state.userCity}</span>! This is what's close to you:</NearbyMessage> : null}
                {this.state.nearbyPosts.length !== 0 ? <PostsBlock mainUserProfile={this.state.mainUserProfile} posts={this.state.nearbyPosts} /> : <NoPostsOnFeed>
                    <IMG style={{width: '300px'}}src="https://opendoodles.s3-us-west-1.amazonaws.com/selfie.svg" />
                    <h1>It's empty here!</h1>
                    <p>Looks like there are no one has posted their adventures in this city yet. Wanna be the first one?</p>
                </NoPostsOnFeed>}
            </RenderNearbyWrapper> 
        )
    }

    renderFeed = () => {
        if (this.state.posts.length !== 0) {
            return (
                <PostsBlock mainUserProfile={this.state.mainUserProfile} posts={this.state.posts} />
            )
        } else {
            return (
                <NoPostsOnFeed>
                    <IMG style={{width: '300px'}}src="https://opendoodles.s3-us-west-1.amazonaws.com/selfie.svg" />
                    <h1>It's empty here!</h1>
                    <p>Start following your friends to view their latests posts.</p>
                </NoPostsOnFeed>
            )
        }
    }

    render() {
        return (
                <HomeFeedWrapper>
                     <HeaderLogo addSettings/>
                    <Layout>
                        <IMG src="https://opendoodles.s3-us-west-1.amazonaws.com/zombieing.svg" />
                        <HomeNavBar>
                            <ul>
                                <li onClick={() => this.setState({activeTab: 'feed'})} style={this.state.activeTab == 'feed' ? {opacity: 1} : {opacity: 0.4}}>Feed</li>
                                <li onClick={() => this.setState({activeTab: 'nearby'})} style={this.state.activeTab == 'nearby' ? {opacity: 1} : {opacity: 0.3}}>Nearby</li>
                            </ul>
                        </HomeNavBar>
                        {this.state.activeTab == 'feed' ? this.renderFeed() : null}
                        {this.state.activeTab == 'nearby' ? this.renderNearby() : null}
                    </Layout>
                </HomeFeedWrapper>
        );
    }
};

export default HomeFeed;