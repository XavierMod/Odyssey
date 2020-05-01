import React from 'react';
import VisualSource01 from '../../assets/odyssey/visuals/visuals-1.png';
import styled from 'styled-components';

const IMG = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Visual = ( props ) => {
    if ( props.visualID == "visuals-1" ) {
        return (<IMG src={VisualSource01} />)
    }
}

export default Visual;
