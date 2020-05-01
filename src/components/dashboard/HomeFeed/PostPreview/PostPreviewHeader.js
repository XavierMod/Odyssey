import React from 'react';
import styled from 'styled-components';
import { odysseySettings } from '../../../../config/theme';
import settingsIcon from '../../../../assets/icons/settings.svg';
import bookmarkOutlineIcon from '../../../../assets/icons/bookmark-outline.svg';

const PostPreviewHeader = (props) => {
    const PostPreviewHeader = styled.div`
        display: flex;
        padding: 2px 0;
        position: absolute;
        top: 0;
        width: 100%;
        color: white;
        z-index: 100;
    `;

    return (
        <PostPreviewHeader>
        </PostPreviewHeader>
    )
}

export default PostPreviewHeader;