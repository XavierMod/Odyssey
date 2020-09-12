/*
    File Description: Renders the Footer of a Post Preview Block. 
    Notes: This is a child component of PostPreview.js
*/

import React from 'react';
import styled from 'styled-components';
import PostPreviewLike from './PostPreviewLike';
import { odysseySettings } from '../../../../config/theme';

// Defining component styles

const PostPreviewFooter = (props) => {
    const PostPreviewFooter = styled.div`
        padding: 25px;
        word-wrap: break-word;

        h1 {
            font-family: ${odysseySettings.headingFont};
            font-size: 20px;
            font-weight: 500;
            padding-bottom: 20px;
        }

        p {
            font-family: sans-serif;
            line-height: 20px;
            font-size: 12px;
            opacity: 0.6;
        }
    `;

    const PostPreviewInfo = styled.div`
        width: 100%;
        display: flex;
        margin-top: 20px;

        p {
            margin-right: 20px;
            opacity: 1;
            text-overflow: ellipsis;    /* IE, Safari (WebKit), Opera >= 11, FF > 6 */
        }
    `;

    // Trims text of both title and description
    const trimText = (text, length) => {
        if (text.length > length) {
            return text.substring(0, length) + '...';
        } else {
            return text
        }
    }
    return (

        <PostPreviewFooter>
            <h1>{trimText(props.titlePost, 60)}</h1>
            <p>{trimText(props.descPost, 60)}</p>
            <PostPreviewInfo>
                <p>{props.postTimeData}</p>
                <p>{props.locationData}</p>
                <p>by {props.nameUser}</p>
            </PostPreviewInfo>
        </PostPreviewFooter>
    )
}

export default PostPreviewFooter;