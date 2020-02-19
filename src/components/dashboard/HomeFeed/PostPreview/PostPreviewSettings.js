import React, { Component } from 'react';
import styled from 'styled-components';
import { odysseySettings } from '../../../../config/theme';
import settingsIcon from '../../../../assets/icons/settings.svg';
import closeOutline from '../../../../assets/icons/close-outline.svg';
import { useToasts } from 'react-toast-notifications';
import PostSettingsList from './PostSettingsList';

const SettingsModalWrapper = styled.div`
    position: relative;
    cursor: pointer;
`;

const IconWrapper = styled.div`
    filter: invert(1);
`;

const IMG = styled.img`
    z-index: 3;
    filter: invert(1);
`;

const SettingsModal = styled.div`
    color: black;
    display: block !important;
    transform: scale(1);
    position: absolute;
    background-color: white;
    top: 12px;
    right: 5px;
    width: 300px !important;
    height: 150px !important;
    transform-origin: top right;
    transition: all ease 0.3s;
`;

const CloseIcon = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    border-radius: 100px;
    padding: 5px;
    transform: scale(1.2);
    transition: all ease 0.3s;

    &:hover {
        background-color: rgb(237, 237, 237);
    }
`;

class PostPreviewSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    render() {
        var style = this.state.active ? {transform: 'scale(1)', webkitTransform: 'scale(1)'} : {transform: 'scale(0)', webkitTransform: 'scale(0)'};

        const activateSettings = () => {
            this.setState({active: !this.state.active});
        }

        return (
            <SettingsModalWrapper onClick={activateSettings}>
                <IconWrapper>
                    <IMG src={settingsIcon}/>
                </IconWrapper>
                 <SettingsModal style={style}>
                    <CloseIcon src={closeOutline}/>
                    <PostSettingsList />
                 </SettingsModal>
            </SettingsModalWrapper>
        )
    }
}

export default PostPreviewSettings;