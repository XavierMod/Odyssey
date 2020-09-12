/*
    File Description: Shows error messages / labels on text fields.
    Notes: LIBRARY component. 
*/

import React from 'react'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
    margin-top: 10px;
    text-align: left;

    p {
        color: #cc1616;
        font-size: 12px;
        font-weight: 700;
        margin: 0;
    }
`;

const NotificationField = (props) => {
    return (
        <ErrorWrapper>
            <p>{props.body}</p>
        </ErrorWrapper>
    )
}

export default NotificationField
