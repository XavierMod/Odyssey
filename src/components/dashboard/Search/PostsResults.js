import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import PostPreview from '../../dashboard/HomeFeed/PostPreview/PostPreview';

const NoResultsFound = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

const PostsResults = (props) => {
    const renderQueries = () => {
        console.log('FROM RESULTS', props)
        let render;
        if (props.renderQuery !== undefined && props.renderQuery.length == []) {
            return <NoResultsFound>No results found</NoResultsFound>

        } else if (props.renderQuery !== undefined) {
            render = props.renderQuery.map((el, ind, obj) => {
                console.log(el)
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
