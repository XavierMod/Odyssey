import React from 'react';
import styled from 'styled-components';
import { ToastProvider, useToasts } from 'react-toast-notifications'

const Wrapper = styled.div`
    width: 100% !important;
    position: relative;

    ul {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: left;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 13px;

    li {
        padding: 10px 0;
        padding-left: 20px;
        transition: all ease 0.3s;

        &:hover {
            background-color: rgb(237, 237, 237);
        }
    }
}
`;

const PostSettingsList = () => {
    const { addToast } = useToasts();
    return (
        <Wrapper>
            <ul>
                <li style={{color: 'rgb(255, 73, 18)'}}>⚠️ Report</li>
                <li onClick={() => addToast("You have unfollowed this user. You won't recieve any notifications from now on!", {
                    appearance: 'success',
                    autoDismiss: true,
                    })} >Unfollow</li>
                <li onClick={() => addToast('Post coppied to the clipboard. Ready to share!', {
                    appearance: 'success',
                    autoDismiss: true,
                    })} >Copy Link</li>
            </ul>
        </Wrapper>
    )
}

export default PostSettingsList;
