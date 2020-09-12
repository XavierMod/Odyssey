/*
    File Description: Component that handles the posts fetching and renders a list of posts. 
    Notes: KEY component
*/

import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import PostPreview from './PostPreview/PostPreview';
import Filter from './Filter/Filter'
import UserToken from '../../../services/UserToken';

// Defining component styling

const PostsBlockWrapper = styled.div`
    margin: 20px 0;
    padding-bottom: 40px;
`;

class PostsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finalQuery: [],
            activeUserProfile: {},
            isLoading: true    
        } 
    }

    // After render, get all posts from the active user and pass them to child components
    componentDidMount() {
        const formData = new FormData();
        formData.append("content", UserToken('get'));
        axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getProfileByNameUser.php', formData)
          .then(response => {
              if (response.data[0].likedPosts == null) {
                response.data[0].likedPosts = '';
              }

            this.setState({activeUserProfile: response.data[0]}, () => {
                this.setState({isLoading: false})
            })
          })
          .catch(function (error) {
            alert(error);
          }); 
    }

    // Render all fetched posts
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
                } else if (el.type == 'Date') {
                    if (el.query == 'Order by newest') {
                        var d = new Date();

                        filterPosts = allPosts.sort(function(a, b) {
                            var dateA = new Date(a.postTimeData.substring(0, 10)), dateB = new Date(b.postTimeData.substring(0, 10));
                            return dateB - dateA;
                        });
                        
                    } else if (el.query == 'Order by oldest') {
                        var d = new Date();
                        filterPosts = allPosts.sort(function(a, b) {
                            var dateA = new Date(a.postTimeData.substring(0, 10)), dateB = new Date(b.postTimeData.substring(0, 10));
                            return dateA - dateB;
                        });
                    }
                } else if (el.type == 'Tags') {
                    filterPosts = allPosts.filter((element) => {
                        return element.tags.toLowerCase().search(el.query.toLowerCase()) !== -1
                    })
                }
            });

            return filterPosts.map((el, ind) => {
                return (<PostPreview activeUserProfile={this.state.activeUserProfile} postsLength={this.props.posts.length} data={el} />)
            });
        } else if (finalQuery.length == 0) {
            return this.props.posts.map((el, ind) => {
                return (<PostPreview activeUserProfile={this.state.activeUserProfile} postsLength={this.props.posts.length} data={el} />)
            })
        }
    }

    // Gets the query
    getFinalQuery = (el) => {
        this.setState({finalQuery: el});
    }

    render() {
        if (this.state.isLoading) {
            return <div />
        }
        return (
            <PostsBlockWrapper>
                <Filter sendFinalQuery={(el) => this.getFinalQuery(el)}/>
                {this.renderPosts()}
            </PostsBlockWrapper>
        );
    }
};

export default PostsBlock;