/*
    File Description: Renders the key Post Previews that users can see from home, search and profiles. 
    Notes: KEY component
*/

import React from 'react';
import styled from 'styled-components';
import PostPreviewImage from './PostPreviewImage';
import PostPreviewFooter from './PostPreviewFooter';
import PostPreviewLike from '../PostPreview/PostPreviewLike';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Defining component styles

const PostPreviewWrapper = styled.div`
    max-width: 550px;
    margin: 30px auto;
    box-shadow: 1px 1px 80px rgb(214, 214, 214);
    position: relative;
    text-align: left;
    border-radius: 5px;

    a {
        color: black;
        text-decoration: none;
    }
`;

const PostPreview = (props) => {
    return (
        <PostPreviewWrapper>
            <PostPreviewLike likedPostsActiveUser={props.activeUserProfile.likedPosts} userInfo={props.data} />
            <Link to={"/user/" + props.data.nameUser + "/" + props.data.slugPost}>
            <PostPreviewImage {...props.data} image={props.data.postCoverImg !== "" ? "http://localhost:8888/odyssey-api/demo_react/api/images/posts/" + props.data.postCoverImg : "http://localhost:8888/odyssey-api/demo_react/api/images/posts/no-cover.jpg"} />
            <PostPreviewFooter {...props.data} />
            </Link>
        </PostPreviewWrapper>
    )
}

export default PostPreview;
