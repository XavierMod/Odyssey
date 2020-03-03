import React, { Component } from 'react'
import styled from 'styled-components'
import settingsIcon from '../../../assets/icons/settings.svg'
import closeIcon from '../../../assets/icons/close-outline.svg'

const SettingsMainWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: white;
    left: 100%;
    z-index: 1;
    transition: all ease 0.4s;
`;

const SettingsIcon = styled.div`
    border: 1px solid red;
    background: none !important;
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    cursor: pointer;
    z-index: 2;

    img {
        width: 25px;
    }
`;

class Settings extends Component {

    state = {
        isActive: false
    }

    activateSettings = () => {
        this.setState({isActive: !this.state.isActive})
    }

    render() {
        return (
            <React.Fragment>
                <SettingsIcon onClick={() => this.activateSettings()} >
                    <img src={this.state.isActive ? closeIcon : settingsIcon} />
                </SettingsIcon>
                <SettingsMainWrapper style={this.state.isActive ? {left: '0%'} : {left: '100%'}}>
                </SettingsMainWrapper>
            </React.Fragment>
        )
    }
}

export default Settings;
