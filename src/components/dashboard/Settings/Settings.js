import React, { Component } from 'react'
import styled from 'styled-components'
import settingsIcon from '../../../assets/icons/settings.svg'
import closeIcon from '../../../assets/icons/close-outline.svg'
import ButtonToggle from '../../library/Buttons/ButtonToggle';
import Friends from './Friends'
import SettingsBlock from './SettingsBlock'
import ProfileSettings from './ProfileSettings'
import UserToken from '../../../services/UserToken';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const SettingsMainWrapper = styled.div`
    position: fixed;
    text-align: left;
    height: 100%;
    background-color: white;
    overflow: scroll;
    width: 100%;
    z-index: 1;
    right: 100%;
    transition: all ease 0.4s;
    padding: 0;

    ${largerThan.tablet`
        width: 500px;
        display: inline-block;
        top: 0;
        box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
    `};

    h1 {
        font-size: 28px;
        font-weight: 700;
        padding: 20px;
    }
`;

const IMG = styled.img`
    width: 100px;
    padding-top: 60px;
    margin: 10px;
`;

const NameUserSettings = styled.p`
    padding: 20px;
    font-weight: 700;
    font-size: 20px;
    position: absolute;
    top: 0;
    left: 0;
`;

const SettingsIcon = styled.div`
    background: none !important;
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    cursor: pointer;
    z-index: 2;
`;

const ProfilePic = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 3000px;
    object-fit: cover;
`;

const LogOutButton = styled.a`
    padding: 20px;
    background-color: black;
    color: white;
    display: inline-block;
    margin: 30px 20px;
`;

const Version = styled.div`
    font-size: 11px;
    font-weight: 700;
    opacity: 0.4;
    margin: 20px;

`;

class Settings extends Component {

    state = {
        isActive: false,
        changes: undefined
    }

    activateSettings = () => {
        this.setState({isActive: !this.state.isActive});
        console.log(this.props.privateProfile)
    }

    logOut = () => {
        window.localStorage.clear();
        window.location.href = '/onboarding';
    }

    render() {
        return (
            <React.Fragment>
                <SettingsIcon onClick={() => this.activateSettings()} >
                    <ProfilePic src={`http://localhost:8888/odyssey-api/demo_react/api/images/users/${this.props.profileImage}`} />
                </SettingsIcon>
                <SettingsMainWrapper style={this.state.isActive ? {right: '0'} : {right: '-100%'}}>
                    <NameUserSettings>@{UserToken('get')}</NameUserSettings>
                    <IMG src="https://opendoodles.s3-us-west-1.amazonaws.com/loving.svg" /><h1>Settings</h1>
                        <SettingsBlock title="Friends" visibility={false}>
                            <Friends userFriends={this.props.getUserFriends} />
                        </SettingsBlock>
                        <SettingsBlock title="Profile settings" visibility={false}>
                            <ProfileSettings />
                        </SettingsBlock>

                        <LogOutButton onClick={() => this.logOut()}>Log Out</LogOutButton>
                        <Version>Version 1.43.1 (stable release).</Version>
                </SettingsMainWrapper>
            </React.Fragment>
        )
    }
}

export default Settings;
