import React from 'react';
import styled from 'styled-components';
import PostPreviewImage from './PostPreviewImage';
import PostPreviewHeader from './PostPreviewHeader';
import { odysseySettings } from '../../../../config/theme';
import PostPreviewFooter from './PostPreviewFooter';
import PostTemplate from '../../../../templates/PostTemplate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const dummyImage = 'https://picsum.photos/1200/1300';

const PostPreviewWrapper = styled.div`
    max-width: 550px;
    margin: 30px auto;
    box-shadow: 1px 1px 6px rgb(214, 214, 214);
    position: relative;
`;

const PostPreview = (props) => {
    const generateRoute = "/user/" + props.data.user + "/" + props.data.slug + "/" + props.data.postID;
    console.log(generateRoute);

    return (
        <PostPreviewWrapper>
            <PostPreviewHeader {...props.data} />
            <Link to={generateRoute}>
            <PostPreviewImage image={dummyImage} />
            <PostPreviewFooter {...props.data} />
            </Link>
        </PostPreviewWrapper>
    )
}

export default PostPreview;
