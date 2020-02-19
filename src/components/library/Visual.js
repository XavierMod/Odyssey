import React from 'react';
import VisualSource01 from '../../assets/odyssey/visuals/visuals-1.png';

const Visual = ( props ) => {
    if ( props.visualID == "visuals-1" ) {
        return (<img src={VisualSource01} />)
    }
}

export default Visual;
