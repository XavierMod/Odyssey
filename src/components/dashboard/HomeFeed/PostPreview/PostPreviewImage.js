import React from 'react';
import styled from 'styled-components';

const PostPreviewImage = (props) => {
    const PostPreviewImage = styled.div`
        height: 280px;
        background-image: 
        /* top, transparent red */
        linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
        ),
        /* your image */
        url(${props.image});
        background-size: cover;
        background-position: center;
        
    `;

    return <PostPreviewImage/>
}

export default PostPreviewImage;
