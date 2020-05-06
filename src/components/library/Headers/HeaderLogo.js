import React, { useState, useEffect } from 'react';
import Logo from '../Logo';
import styled from 'styled-components';
import Settings from '../../dashboard/Settings/Settings';
import UserToken from '../../../services/UserToken';
import axios from 'axios'

const HeaderWrapper = styled.div`
    overflow: hidden;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 1000;
`;

const LogoWrapper = styled.div`
    img {
        width: 30px;
    }
`;

const SettingsOptions = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    margin: 10px;
    cursor: pointer;
`;

const HeaderLogo = ( props ) => {
    const [profileImage, setProfileImage] = useState('');
    const [userFriends, setUserFriends] = useState('');

    useEffect(() => {
        if (props.addSettings) {
            let formData = new FormData();
            formData.append("content", UserToken('get'));
            
            Promise.all([
                axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getProfileByNameUser.php', formData)
            ]).then(([r1]) => {
                setProfileImage(r1.data[0].profileImg);
                setUserFriends(r1.data[0].friends !== null ? r1.data[0].friends : '');
            })
        }

        }, []);

    return (
        <HeaderWrapper>
            {props.addSettings ? <SettingsOptions><Settings getUserFriends={userFriends} profileImage={profileImage !== null ? profileImage : 'user-profile-default.png'} /></SettingsOptions> : null}
            <LogoWrapper><Logo /></LogoWrapper>
        </HeaderWrapper>
    )
}

export default HeaderLogo;