import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../library/Buttons/Button';
import ProfileStatsBlock from './ProfileStatsBlock';
import { odysseySettings } from '../../../config/theme';
import MainTitle from '../../library/Styles/MainTitle';
import Settings from '../../dashboard/Settings/Settings';

const ProfileHeaderWrapper = styled.div`
`;

const CoverImage = styled.div`
    background-image: 
    linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.45)
    ),
    url('https://picsum.photos/1920/1080');
    background-size: cover;
    background-position: center;
    height: 140px;
`;

const FollowWrapper = styled.div`
    width: 90px;
    margin: auto;
    position: relative;
    margin-top: -110px;

    div {
        width: 100%;
        background-color: white;
    }
`;

const ProfileImage = styled.img`
    width: 90px;
    height: 90px;
    object-fit: cover;
    padding-top: 20px;
`;

const ProfileStats = styled.div`
    display: flex;
    max-width: 500px;
    margin: 30px auto;
    text-align: center;
`;

const Separator = styled.div`
    border-bottom: 1px solid ${odysseySettings.fadeLinesColor};
`;


class ProfileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props)
        return (
            <ProfileHeaderWrapper>
                 {this.props.isActiveUser ? <Settings /> : null}
                <CoverImage />
                <FollowWrapper>
                    {this.props.isActiveUser ? <br/> : <Button variant='primary' body="Follow" />}
                    <ProfileImage src='https://picsum.photos/1920/1080' />
                </FollowWrapper>
                <MainTitle body={this.props.titleProfile !== null ? this.props.titleProfile : this.props.nameUser + "'s Profile"} />
                <ProfileStats>
                    <ProfileStatsBlock top={this.props.Followers} bottom={'Followers'}  />
                    <ProfileStatsBlock top={this.props.postsLength} bottom={'Posts'}  />
                </ProfileStats>
                <Separator />
            </ProfileHeaderWrapper>
        );
    }
};

export default ProfileHeader;