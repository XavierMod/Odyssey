import React from 'react';
import Logo from '../Logo';
import styled from 'styled-components';

import Visual from '../Visual';

const headerHeights = {
    small: '200px',
    large: '400px'
}

const HeaderLogo = ( props ) => {

    let HeaderWrapper;

    if ( props.size == 'small' ) {
        HeaderWrapper = styled.div`
            height: ${headerHeights.small};
            position: relative;
            overflow: hidden;
        `;
    } else if ( props.size == 'large' ) {
        HeaderWrapper = styled.div`
            height: ${headerHeights.large};
            position: relative;
            overflow: hidden;
        `;
    }

    const VisualWrapper = styled(Visual)`
        width: 10px;
        height: 10px;
        object-fit: contain;
        border: 1px solid blue;

    `;

    const LogoWrapper = styled.div`
        display: flex;
        text-align: center;
        height: 100%;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        width: 100%;
    `;

    return (
        <HeaderWrapper>
            <LogoWrapper><Logo /></LogoWrapper>
            <VisualWrapper visualID="visuals-1" />
        </HeaderWrapper>
    )
}

export default HeaderLogo;