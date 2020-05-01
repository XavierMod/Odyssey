import React from 'react';
import NoMorePostsGif from '../../../assets/odyssey/no-posts-gif.gif';
import styled from 'styled-components';
import MainTitle from '../../library/Styles/MainTitle';
import Button from '../../library/Buttons/Button';

const NoMorePostsWrapper = styled.div`
    text-align: center;

    img {
        width: 250px;
    }
`;

const NoMorePosts = () => {
    return (
        <NoMorePostsWrapper>
            <img src="https://opendoodles.s3-us-west-1.amazonaws.com/sitting.svg" />
            <MainTitle body="No posts yet!"/>
        </NoMorePostsWrapper>
    )
}

export default NoMorePosts;
