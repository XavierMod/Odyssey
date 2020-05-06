import React from 'react';
import styled from 'styled-components';
import PostPreviewImage from './PostPreviewImage';
import PostPreviewHeader from './PostPreviewHeader';
import { odysseySettings } from '../../../../config/theme';
import PostPreviewFooter from './PostPreviewFooter';
import PostTemplate from '../../../../templates/PostTemplate';
import PostPreviewLike from '../PostPreview/PostPreviewLike';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    console.log('IMAGE', props.data.postCoverImg);
    return (
        <PostPreviewWrapper>
            <PostPreviewLike likedPostsActiveUser={props.activeUserProfile.likedPosts} userInfo={props.data} />
            <PostPreviewHeader />
            <Link to={"/user/" + props.data.nameUser + "/" + props.data.slugPost}>
            <PostPreviewImage {...props.data} image={props.data.postCoverImg !== "" ? "http://localhost:8888/odyssey-api/demo_react/api/images/posts/" + props.data.postCoverImg : "http://localhost:8888/odyssey-api/demo_react/api/images/posts/no-cover.jpg"} />
            <PostPreviewFooter {...props.data} />
            </Link>
        </PostPreviewWrapper>
    )
}

export default PostPreview;
