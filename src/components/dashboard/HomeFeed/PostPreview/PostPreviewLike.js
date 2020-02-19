import React from 'react';
import styled from 'styled-components';
import heartIcon from '../../../../assets/icons/heart.svg';

const PostPreviewLike = (props) => {
    const PostPreviewLike = styled.div`
        display: flex;

        img {
            flex: 2;
        }

        p {
            flex: 8;
        }
    `;

    return (
    
        <PostPreviewLike>
            <img src={heartIcon} />
            <p>13 likes</p>
        </PostPreviewLike>
    )
}

export default PostPreviewLike;