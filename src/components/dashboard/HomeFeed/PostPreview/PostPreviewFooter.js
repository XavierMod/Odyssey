import React from 'react';
import styled from 'styled-components';
import PostPreviewLike from './PostPreviewLike';
import { odysseySettings } from '../../../../config/theme';

const PostPreviewFooter = (props) => {
    const PostPreviewFooter = styled.div`
        padding: 25px;

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

    const Separator = styled.div`
        border-bottom: 1px solid ${odysseySettings.fadeLinesColor};
        margin: 10px 0;
    `;

    const PostPreviewInfo = styled.div`
        width: 100%;
        display: flex;
        margin-top: 20px;

        p {
            margin-right: 20px;
            opacity: 1;
        }
    `;
    return (
    
        <PostPreviewFooter>
            <h1>{props.titlePost}</h1>
            <p>{props.descPost}</p>
            <PostPreviewInfo>
                <p>{props.postTimeData}</p>
                <p>{props.locationData}</p>
                <p>by {props.nameUser}</p>
            </PostPreviewInfo>
        </PostPreviewFooter>
    )
}

export default PostPreviewFooter;