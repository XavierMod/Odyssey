import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../library/Buttons/Button';
import ProfileStatsBlock from './ProfileStatsBlock';
import { odysseySettings } from '../../../config/theme';
import MainTitle from '../../library/Styles/MainTitle';
import Settings from '../../dashboard/Settings/Settings';
import HeaderLogo from '../../library/Headers/HeaderLogo';
import UserToken from '../../../services/UserToken';
import axios from 'axios'
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const ProfileHeaderWrapper = styled.div`
    padding-top: 70px;
`;

const CoverImage = styled.div`
    background-image: 
    linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.45)
    ),
    url(${props => props.image});
    background-size: cover;
    background-position: center;
    height: 250px;

    ${largerThan.tablet`
        width: 800px;
        margin: auto;
        height: 320px;
    `};
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

const NameUser = styled.div`
    text-align: center;
    opacity: 0.5;
`;

class ProfileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disableFollowButton: false
        }
    }

    activeUserNewFollow = (type) => {
        let formData = new FormData();
        formData.append("content", UserToken('get'));
        Promise.all([
            axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getProfileByNameUser.php', formData)
        ]).then(([r1]) => {

            if (r1.data[0].friends == null) {
                r1.data[0].friends = '';
            }

            this.setState({activeUserFriends: r1.data.friends});
            this.mutateFriends(type, r1.data[0].friends);
        })
    }

    mutateFriends = (type, activeUserFriends) => {
        var activeUserFriendsArr;
        var nonActiveUserFriendsArr;
        var activeUserFriendsString;
        var nonActiveUserFriendsString;

        if (type == 'follow') {

            if (activeUserFriends.length !== 0) {
                activeUserFriendsArr = activeUserFriends.split(', ');
                activeUserFriendsArr.push(this.props.nameUser);
                activeUserFriendsString = activeUserFriendsArr.join(', ');
            } else {
                activeUserFriendsArr = [];
                activeUserFriendsArr.push(this.props.nameUser);
                activeUserFriendsString = activeUserFriendsArr.join();
            }

            if (this.props.friends.length !== 0) {
                nonActiveUserFriendsArr = this.props.friends.split(', ');
                nonActiveUserFriendsArr.push(UserToken('get'));
                nonActiveUserFriendsString = nonActiveUserFriendsArr.join(', ');
            } else {
                nonActiveUserFriendsArr = [];
                nonActiveUserFriendsArr.push(UserToken('get'));
                nonActiveUserFriendsString = nonActiveUserFriendsArr.join();
            }
    
            let formData = new FormData();
    
            formData.append("activeUser", UserToken('get'));
            formData.append("nonActiveUser", this.props.nameUser);
    
            formData.append("activeUserFriends", activeUserFriendsString);
            formData.append("nonActiveUserFriends", nonActiveUserFriendsString);
    
            Promise.all([
                axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/updateFriends.php', formData)
            ]).then(([r1]) => {
                window.location.reload(false);
            })
        } else if (type == 'unfollow') {

            const activeUserFriendsArr = activeUserFriends.split(', ').filter(item => item !== this.props.nameUser);
                 
            const nonActiveUserFriendsArr = this.props.friends.split(', ').filter(item => item !== UserToken('get'));
    
            const activeUserFriendsString = activeUserFriendsArr.join(', ');
            const nonActiveUserFriendsString = nonActiveUserFriendsArr.join(', '); 
            
            let formData = new FormData();
    
            formData.append("activeUser", UserToken('get'));
            formData.append("nonActiveUser", this.props.nameUser);
    
            formData.append("activeUserFriends", activeUserFriendsString);
            formData.append("nonActiveUserFriends", nonActiveUserFriendsString);
    
            Promise.all([
                axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/updateFriends.php', formData)
            ]).then(([r1]) => {
                window.location.reload(false);
            })
        }
    }

    followFunctionality = () => {
        let nonActiveUserFriends;
            if (this.props.friends == undefined) {
                nonActiveUserFriends = ['']
            } else {
                nonActiveUserFriends = this.props.friends.split(', ');
            }

            const activeUserName = UserToken('get');

            if (this.props.isActiveUser) {
                return <br />
            } else {
                if (nonActiveUserFriends.includes(activeUserName)) {
                    return (
                        <Button disabled={this.state.disableFollowButton}onClick={() => {
                            if (this.state.disableFollowButton == false) {
                                this.activeUserNewFollow('unfollow');
                                this.setState({disableFollowButton: true});
                            }
                        }} variant='primary' body="Unfollow" />
                    )
                } else if (!nonActiveUserFriends.includes(activeUserName)) {
                    return (
                        <Button disabled={this.state.disableFollowButton}onClick={() => {
                            if (this.state.disableFollowButton == false) {
                                this.activeUserNewFollow('follow');
                                this.setState({disableFollowButton: true})
                            }
                        }} variant='primary' body="Follow" />
                    )
                }
            }
    }

    render() {
        return (
            <React.Fragment>
              <HeaderLogo addSettings/>
                <ProfileHeaderWrapper>
                    <CoverImage image={this.props.coverImg ? `http://localhost:8888/odyssey-api/demo_react/api/images/users/${this.props.coverImg}` : `http://localhost:8888/odyssey-api/demo_react/api/images/users/default-cover.png`}/>
                    <FollowWrapper>
                        {this.followFunctionality()}
                        <ProfileImage src={this.props.profileImg ? `http://localhost:8888/odyssey-api/demo_react/api/images/users/${this.props.profileImg}` : `http://localhost:8888/odyssey-api/demo_react/api/images/users/user-profile-default.png`} />
                    </FollowWrapper>
                    <MainTitle body={this.props.titleProfile !== null ? this.props.titleProfile : this.props.nameUser + "'s Profile"} />
                    <NameUser>@{this.props.nameUser}</NameUser>
                    <ProfileStats>
                        <ProfileStatsBlock top={this.props.friends.length !== 0 ? this.props.friends.split(', ').length : '0'} bottom={'Friends'}  />
                        <ProfileStatsBlock top={this.props.postsLength} bottom={'Posts'}  />
                    </ProfileStats>
                    <Separator />
                </ProfileHeaderWrapper>
            </React.Fragment>
        );
    }
};

export default ProfileHeader;