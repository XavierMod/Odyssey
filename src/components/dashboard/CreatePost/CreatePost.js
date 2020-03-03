import React, { Component } from 'react'
import styled from 'styled-components'
import TextField from '../../library/Form/TextField';
import TextArea from '../../library/Form/TextArea';
import iconCamera from '../../../assets/icons/camera-outline.svg';
import iconPictures from '../../../assets/icons/image-outline.svg';
import { odysseySettings } from '../../../config/theme';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const CreatePostWrapper = styled.div`
    height: 100%;
    background-color: white;
`;

const CreatePostHeader = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
`;

const CloseIcon = styled.div`
    flex: 10%;
    padding: 20px 25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    svg {
        fill: white;
        width: 15px;
    }
`;

const FeaturedImage = styled.div`
    height: 200px;
    overflow: hidden;
    position: relative;
    margin-top: 60px;
`;

const BGIMG = styled.img`
    object-fit: cover;
    height: 120%;
    width: 120%;
    filter: blur(10px);
    position: absolute;
`;

const ImageIcons = styled.div`
    z-index: 100;
    background: none;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
`;

const ImageIcon = styled.div`
    flex: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        width: 30px;
        border: 1px solid white;
        padding: 20px;
        border-radius: 200px;
        background-color: white;

        &:hover {
            box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
            transition: all ease 0.2s;
            cursor: pointer;
        }
    }
`;

const SPAN = styled.span`
    color: white;
    flex: 80%;
    text-align: center;
    font-weight: 700;
    font-size: 19px;
`;

const Post = styled.a`
    padding: 25px;
    flex: 10%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: ${props => props.opacity};

`;

const TagsWrapper = styled.div`
    text-align: center;

    span {
        font-size: 12px;
    }
`;

const PostBodyWrapper = styled.div`
    textarea {
        outline: none;
        border: none;
        margin-top: 20px;
        font-size: 22px;
        font-family: ${odysseySettings.bodyFont};
        margin: auto;
        margin-top: 100px;
        display: block;
        width: 70%;
        padding: 30px;
    }
`;

const WordLimit = styled.span`
    width: 100%;
    text-align: center;
    display: block;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    margin-bottom: 100px;
    padding: 20px 0;
    font-size: 13px;
`;

class CreatePost extends Component {
    render() {
        return (
            <CreatePostWrapper>
                <CreatePostHeader>
                    <CloseIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg></CloseIcon>
                    <SPAN>Start post</SPAN>
                    <Post opacity="0.5">Post</Post>
                </CreatePostHeader>

                <FeaturedImage>
                    <ImageIcons>
                        <ImageIcon><img src={iconCamera} /></ImageIcon>
                        <ImageIcon><img src={iconPictures} /></ImageIcon>
                    </ImageIcons>
                    <BGIMG src="https://picsum.photos/800/900" />
                </FeaturedImage>

                <div style={{maxWidth: '700px', margin: 'auto'}}>
                    <TextField type="text" label="Post name" />
                    <TextField type="text" label="Post description" />
                    <TextField type="text" label="Location" />
                    <TagsWrapper><TextArea label="Tags" /><span>Separate the tags using commas (e.g. travel, holidays...)</span></TagsWrapper>

                    <PostBodyWrapper>
                        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Start writing your post here..." />
                    </PostBodyWrapper>
                    <WordLimit>153 words (1000 max)</WordLimit>

                </div>
            </CreatePostWrapper>
        )
    }
}

export default CreatePost;
