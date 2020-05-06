import React, { Component } from 'react'
import styled from 'styled-components'
import TextField from '../../library/Form/TextField';
import TextArea from '../../library/Form/TextArea';
import iconCamera from '../../../assets/icons/camera-outline.svg';
import iconPictures from '../../../assets/icons/image-outline.svg';
import { odysseySettings } from '../../../config/theme';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageUpload from '../../helpers/ImageUpload'
import axios from 'axios'
import UserToken from '../../../services/UserToken';

const CreatePostWrapper = styled.form`
    height: 100%;
    background-color: white;
`;

const CreatePostContent = styled.div`
    text-align: center;
    span {
        font-size: 12px;
    }
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
    height: 60px;
`;

const CloseIcon = styled.div`
    flex: 10%;
    padding: 20px 25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30000;
    svg {
        fill: white;
        width: 15px;
    }
`;

const SPAN = styled.span`
    color: white;
    flex: 80%;
    text-align: center;
    font-weight: 700;
    font-size: 19px;
`;

const Post = styled.button`
    padding: 0 25px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    flex: 10%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: black;
    border: none;
    font-size: 14px;
    height: 60px;
    font-family: ${odysseySettings.bodyFont};
    font-weight: 700;
    cursor: pointer;

    opacity: ${props => props.opacity};
    pointer-events: ${props => props.events};
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
    padding-bottom: 100px;
`;

const WordLimit = styled.div`
    padding-bottom: 30px;
`;

class CreatePost extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        wordCountPostBody: 0
    }

    getDateChild = (el) => {
        this.setState({date: el}); 
    }


    render() {
        return (
            <CreatePostWrapper 
                action={"http://localhost:8888/odyssey-api/demo_react/api/endpoints/createNewPost.php?nameUser=" + UserToken('get') }
                method="POST"
                encType="multipart/form-data">
                <CreatePostHeader>
                    <SPAN>Start post</SPAN>
                </CreatePostHeader>

                <ImageUpload getDateChild={(el) => this.getDateChild(el)} />
                <input type="hidden" value={this.state.date} name="postTimeData" />

                <CreatePostContent style={{maxWidth: '700px', margin: 'auto'}}>
                    <TextField 
                    required
                    maxLength={200}
                    name="titlePost"
                    onChange={(el) => console.log(el)} 
                    type="text" 
                    label="Post name" />

                    <TextField 
                        required
                        maxLength={100}
                        name="descPost"
                        onChange={(el) => console.log(el)}
                        type="text" label="Post description" />
                    <TextField required name="locationData" onChange={(el) => console.log(el)} type="text" label="Location" />
                    <span>Just include a city name (e.g. London)</span>
                    <TagsWrapper><TextField maxLength={30} type="text" name="tags" label="Tags" onChange={(el) => console.log(el)}  /><span>Separate tags using commas (e.g. travel, holidays...)</span></TagsWrapper>

                    <PostBodyWrapper>
                        <TextareaAutosize
                        required
                        aria-label="minimum height"
                        onChange={(el) => this.setState({wordCountPostBody: el.target.value.length})} 
                        name="postText"
                        maxLength="500"
                        rowsMin={3} 
                        placeholder="Start writing your post here..." />
                        <WordLimit>{this.state.wordCountPostBody} characters. (500 max)</WordLimit>
                    </PostBodyWrapper>
                </CreatePostContent>

                <Post 
                    opacity={this.state.date ? "1" : ".2"} 
                    events={this.state.date ? "all" : "none"} 
                    type="submit" name="submit">Post</Post>

            </CreatePostWrapper>
        )
    }
}

export default CreatePost;
