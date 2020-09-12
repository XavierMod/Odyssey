/*
    File Description: Component used to render posts pages.
    Notes: TEMPLATE. 
*/

import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/odyssey/odyssey-logo.svg';
import HeaderLogo from '../components/library/Headers/HeaderLogo';
import Button from '../components/library/Buttons/Button';
import { odysseySettings } from '../config/theme';

const PostWrapper = styled.div`
    max-width: 800px;
    margin: auto;
    padding-top: 60px;
    word-wrap: break-word;
`;

const FeaturedImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 500px;
`;

const PostContent = styled.div`
    padding: 30px;
`;

const PostTitle = styled.h1`
    font-size: 30px;
    margin: 10px 0;
    font-weight: 700;
`;

const PostSubtitle = styled.h3`
    font-size: 16px;
    opacity: 0.3;
    font-family: sans-serif;
    font-weight: 500;
    margin: 30px 0;
`;

const PostAuthor = styled.div`
    margin: 20px 0;
`;

const PostBody = styled.p`
    padding-bottom: 100px;
    font-size: 25px;
    line-height: 32px;
`;

const ButtonsHeader = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    z-index: 101000;
    
    button {
        font-family: ${odysseySettings.bodyFont};
        font-size: 15px;
        margin: 20px;
        padding: 15px;
        width: 80px !important;
        border-radius: 100px;
        cursor: pointer;

        border: 1px solid ${odysseySettings.fadeLinesColor};
        display: inline-block;
        width: 280px;
        text-align: center;
        padding: 10px 0;
        color: black;
        transition: all ease 0.4s;
            
        &:hover {
            background-color: ${odysseySettings.primaryColor};
            color: ${odysseySettings.backgroundColor};
            transition: all ease 0.4s;
        }
    }
`;

const PostTemplate = (props) => {

    const {titlePost, descPost, nameUser, postText, postTimeData,postCoverImg} = props.data;

    console.log(props.data);

    const goBack = () => {
        window.history.back();
    }

    return (
        <React.Fragment>
            <HeaderLogo/>
            <ButtonsHeader>
                <button variant="primary" body="Go Back" onClick={() => goBack()}>Back</button>
            </ButtonsHeader>
            <PostWrapper>
                <FeaturedImage src={props.postCoverImg !== "" ? "http://localhost:8888/odyssey-api/demo_react/api/images/posts/" + postCoverImg : "http://localhost:8888/odyssey-api/demo_react/api/images/posts/no-cover.jpg"} />
                <PostContent>
                    <PostTitle>{titlePost}</PostTitle>
                    <PostSubtitle>{descPost}</PostSubtitle>
    <PostAuthor>{nameUser} • {postTimeData}</PostAuthor>
                    <PostBody>{postText}</PostBody>
                </PostContent>
            </PostWrapper>
        </React.Fragment>
    )
}

export default PostTemplate
