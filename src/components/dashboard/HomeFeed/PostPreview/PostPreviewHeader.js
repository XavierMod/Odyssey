import React from 'react';
import styled from 'styled-components';
import { odysseySettings } from '../../../../config/theme';
import settingsIcon from '../../../../assets/icons/settings.svg';
import bookmarkOutlineIcon from '../../../../assets/icons/bookmark-outline.svg';
import PostPreviewBookmark from './PostPreviewBookmark';
import PostPreviewSettings from './PostPreviewSettings';

const PostPreviewHeader = (props) => {
    const PostPreviewHeader = styled.div`
        display: flex;
        padding: 2px 0;
        position: absolute;
        top: 0;
        width: 100%;
        color: white;
    `;

    const HeaderLeft = styled.div`
        flex: 8;
        display: flex;
        padding: 10px;
        

        .postPreview__profilePicWrapper {
            flex: 2;
            display: flex;
            align-items: left;
            justify-content: left;

            img {
                width: 30px;
                height: 30px;
                border-radius: 200px;
            }
        }
    `;

    const HeaderRight = styled.div`
        flex: 2;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;

        div {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
        }

        img {
            width: 15px;
        }
    `;

    return (
        <PostPreviewHeader>
            <HeaderLeft>
                <div className="postPreview__profilePicWrapper">
                    <img src="https://picsum.photos/1200/1300"/>
                </div>
            </HeaderLeft>
            <HeaderRight>
                <PostPreviewBookmark />
                <PostPreviewSettings />
            </HeaderRight>
        </PostPreviewHeader>
    )
}

export default PostPreviewHeader;