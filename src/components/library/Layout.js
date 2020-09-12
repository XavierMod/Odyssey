/*
    File Description: Main Layout component that wraps elements and sets a max-width.
    Notes: LIBRARY component. 
*/

import React from 'react';
import styled from 'styled-components';
import {odysseySettings} from '../../config/theme';

const LayoutWrapper = styled.div`
    padding: ${odysseySettings.layoutMainPadding};
`;

const Layout = (props) => {
    return (
        <LayoutWrapper>
            {props.children}
        </LayoutWrapper>
    )
}

export default Layout;
