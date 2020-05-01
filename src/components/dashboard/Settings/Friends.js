import React, {Component} from 'react';
import styled from 'styled-components'
import ButtonToggle from '../../library/Buttons/ButtonToggle';
import { Link } from 'react-router-dom';

const FriendsWrapper = styled.div`
`;

const Friend = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
`;

const FriendName = styled.span`
    flex: 80%;
    margin: 10px 0;

    a {
        color: black;
        text-decoration: none;
    }
`;

const NoFriends = styled.p`
    text-align: center;
    margin: 10px;
    font-weight: 700;
    font-size: 18px;
`;


class Friends extends Component {
    
    state = {
        friends: this.props.userFriends
    }

    sendFriendRequest = (el) => {
        console.log(el)
    }

    processFriends = (el) => {
        console.log(this.state);
    }
    
    renderFriends = () => {
        if (this.props.userFriends.length > 1) {
            return this.props.userFriends.split(', ').map((el, ind, arr) => {
                return (
                    <Friend>
                        <FriendName><Link to={`/user/${el}`}>{el}</Link></FriendName>
                    </Friend>
                )
            })
        } else {
            return <NoFriends>You haven't followed any friends yet!</NoFriends>
        }
    }

    
    render() {
        
    return (
        <FriendsWrapper>
            {this.renderFriends()}
        </FriendsWrapper>
    )
    }
}

export default Friends
