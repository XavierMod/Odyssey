/*
    File Description: Component that displays a list of posts when searching for posts results.
    Notes: This is a child component from Search.js
*/

import React from 'react'
import styled from 'styled-components'
import PostPreview from '../../dashboard/HomeFeed/PostPreview/PostPreview';

const NoResultsFound = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

const PostsResults = (props) => {
    // Rendering results based on user input
    const renderQueries = () => {
        let render;
        if (props.renderQuery !== undefined && props.renderQuery.length == []) {
            return <NoResultsFound>No results found</NoResultsFound>

        } else if (props.renderQuery !== undefined) {
            render = props.renderQuery.map((el, ind, obj) => {
                return (
                    <PostPreview activeUserProfile={props.activeUserProfile[0]} data={el} />
                )
            });
        } else if (props.renderQuery == undefined) {
            return <NoResultsFound>Let's search!</NoResultsFound>
        }
        return render;
    }

    return (
        <div>
            {renderQueries()}
        </div>
    )
}

export default PostsResults;
