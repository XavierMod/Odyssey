import React from 'react';
import styled from 'styled-components';
import {odysseySettings} from '../../../config/theme';

const MainTitleW = styled.h1`
    text-align: center;
    padding: 20px;
    font-family: ${odysseySettings.bodyFont};
    font-size: ${odysseySettings.headingSize};
    font-weight: 600;
`;

const MainTitle = ( props ) => {
    return (
    <MainTitleW>{props.body}</MainTitleW>
    )
}

export default MainTitle;