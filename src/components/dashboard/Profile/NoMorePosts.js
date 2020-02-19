import React from 'react';
import NoMorePostsGif from '../../../assets/odyssey/no-posts-gif.gif';
import styled from 'styled-components';
import MainTitle from '../../library/Styles/MainTitle';
import Button from '../../library/Buttons/Button';

const NoMorePostsWrapper = styled.div`
    text-align: center;

    img {
        width: 300px;
    }
`;

const NoMorePosts = () => {
    return (
        <NoMorePostsWrapper>
            <img src={NoMorePostsGif} />
            <MainTitle body="No posts yet!"/>
            <Button variant='submit' body='Create a post'/>
        </NoMorePostsWrapper>
    )
}

export default NoMorePosts;
