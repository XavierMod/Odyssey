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
