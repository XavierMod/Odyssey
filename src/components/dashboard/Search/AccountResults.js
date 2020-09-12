/*
    File Description: Component that displays a list of usernames when searching for account results.
    Notes: This is a child component from Search.js
*/

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

// Defining component styles

const NoResultsFound = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

const ProfileFound = styled.div`
    padding: 10px;
    margin: 10px auto;
    text-align: left;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    a {
        text-decoration: none;
        color: black;
    }
`;

const AccountResults = (props) => {

    // Rendering the results based on the user input
    const renderQueries = () => {
        let render;
        if (props.renderQuery !== undefined && props.renderQuery.length == []) {
            return <NoResultsFound>No results found</NoResultsFound>

        } else if (props.renderQuery !== undefined) {
            render = props.renderQuery.map((el, ind, obj) => {
                return (
                    <ProfileFound>
                        <Link to={"/user/" + el.nameUser}>
                    {el.nameUser}</Link>
                    </ProfileFound>
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

export default AccountResults;
