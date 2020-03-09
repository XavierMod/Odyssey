import React, { Component } from 'react'
import styled from 'styled-components'
import TextField from '../../library/Form/TextField';
import TextArea from '../../library/Form/TextArea';
import iconCamera from '../../../assets/icons/camera-outline.svg';
import iconPictures from '../../../assets/icons/image-outline.svg';
import { odysseySettings } from '../../../config/theme';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageUpload from '../../helpers/ImageUpload'

const CreatePostWrapper = styled.div`
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
    constructor(props) {
        super(props)
        this.getImageFromComponent = this.getImageFromComponent.bind(this);
        this.state = {
            locationData: null,
            postTimeData: null,
            postCoverImg: null,
            postText: null,
            titlePost: null,
            descPost: null,
            slugPost: null,
            nameUser: null,
            tags: null
        }
    }

    generateSlugPost = (title) => {
        let convertTitle = title.toLowerCase().split(' ').join('-');
        let randomNum = `${Math.floor(Math.random() * 10000)
        }`;

        return `${convertTitle}-${randomNum}`;
    }

    updateFieldsState = (el, stateKey) => {
        if (stateKey == 'titlePost') {
            this.setState({titlePost: el.value, slugPost: this.generateSlugPost(el.value)});
        } else if (stateKey == 'descPost') {
            this.setState({descPost: el.value});
        } else if (stateKey == 'locationData') {
            console.log(this.state);
        }
        console.log(this.state);
    }

    getImageFromComponent = (el) => {
        if (this.state.postCoverImg == null) {
            this.setState({postCoverImg: el});
            console.log(el , this.state.postCoverImg);
        }
    }

    render() {
        return (
            <CreatePostWrapper>
                <CreatePostHeader>
                    <CloseIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg></CloseIcon>
                    <SPAN>Start post</SPAN>
                    <Post opacity="0.5">Post</Post>
                </CreatePostHeader>

                <ImageUpload getImage={this.getImageFromComponent} />

                <CreatePostContent style={{maxWidth: '700px', margin: 'auto'}}>
                    <TextField 
                    onChange={(el) => this.updateFieldsState(el, 'titlePost')} 
                    type="text" 
                    label="Post name" />

                    <TextField 
                    onChange={(el) => this.updateFieldsState(el, 'descPost')} 
                    type="text" label="Post description" />
                    <TextField type="text" label="Location" />
                    <span>Just include a city name (e.g. London)</span>
                    <TagsWrapper><TextArea label="Tags" /><span>Separate tags using commas (e.g. travel, holidays...)</span></TagsWrapper>

                    <PostBodyWrapper>
                        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Start writing your post here..." />
                    </PostBodyWrapper>
                    <WordLimit>153 words (1000 max)</WordLimit>
                </CreatePostContent>
            </CreatePostWrapper>
        )
    }
}

export default CreatePost;
