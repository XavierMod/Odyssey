import React from 'react'
import styled from 'styled-components'
import ButtonToggle from '../../library/Buttons/ButtonToggle'

const SettingsBlockWrapper = styled.div`
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);


    h3 {
        text-transform: uppercase;
        font-size: 12px;
    }
`;

const SettingsBlockHeader = styled.div`
    display: flex;
    cursor: pointer;

    svg {
        flex: 10%;
        transform: ${props => props.rotation};
        width: 10px;
        height: 10px;
        transition: all ease 0.2s;
    }
`;

const SettingsBlockTitle = styled.h3`
    padding: 10px 0;
    flex: 90%;
`;

const SettingsBlockContent = styled.div`

`;

const SettingsBlock = (props) => {
    const [active, setActive] = React.useState(props.visibility);

    return (
        <SettingsBlockWrapper>
            <SettingsBlockHeader onClick={() => setActive(!active)} rotation={active ? 'rotate(90deg)': 'rotate(-90deg)'}>
                <SettingsBlockTitle>{props.title}</SettingsBlockTitle>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
            </SettingsBlockHeader>
            <SettingsBlockContent style={active ? {display: 'block'} : {display: 'none'}}>
                {props.children}
            </SettingsBlockContent>
        </SettingsBlockWrapper>
    )
}

export default SettingsBlock
