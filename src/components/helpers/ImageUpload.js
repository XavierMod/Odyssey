/*
    File Description: Component that provides the Image uploading functionality
    Notes: Modifies the existing ImageUploader component. 
*/

import React from 'react';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components';
import {odysseySettings} from '../../config/theme';

// Styles the existing ImageUploader component
const ImageUploaderWrapper = styled.div`
    .fileContainer {
        padding: 0;
        padding-top: 40px;
        box-shadow: none;
    }

    .chooseFileButton {
        background-color: black;
        border-radius: 0;
        font-family: ${odysseySettings.bodyFont};
        width: 200px;
        height: 50px;
        margin: 30px 0;
    }

    .deleteImage {
        font-family: sans-serif;
        background-color: black;
        margin: 10px;
        padding: 20px;
        transform: scale(0.5);
    }

    .imageUploader {
        margin-top: 80px;
        box-shadow: none;

         .uploadPicturesWrapper .uploadPictureContainer {
             box-shadow: none;
             width: 100%;
             height: 180px;
             padding: 0;
             border: none;
             margin: 0;
             margin-top: 30px;

             img {
                width: 100%;
                height: 100%;
                object-fit: cover;
             }
         }
    }
`;

class ImageUpload extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { picture: undefined };
         this.onDrop = this.onDrop.bind(this);
    }

    // Sends the image to the parent component so it can be sent to the server
    sendDateParent(date) {
        this.props.getDateChild(date);
    }
 
    // Changes visual elements when image has been deployed
    onDrop(pic) {
        this.setState({
            picture: pic,
        });

        if (pic[0] !== undefined) {
            let current_datetime = new Date();
            current_datetime = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();

            this.sendDateParent(current_datetime)
        }
    }
 
    render() {
        return (
            <ImageUploaderWrapper>
                <ImageUploader
                    type="file" name={this.props.customName ? this.props.customName : "file"}
                    withIcon={true}
                    className={'imageUploader'}
                    withPreview={true}
                    buttonText='Choose featured image'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    singleImage={true}
                />
            </ImageUploaderWrapper>
        );
    }
}

export default ImageUpload;