import React, { Component } from 'react';
import Avatar from 'react-avatar-edit';
import styled from 'styled-components';
import ImgPlaceholder from '../../../assets/helpers/img-placeholder.png';
import {odysseySettings} from '../../../config/theme';

const FileUploadWrapper = styled.div`
    margin: 30px auto;
    max-width: 300px;
    border: 1px solid ${odysseySettings.fadeLinesColor};
    padding: 20px;
    overflow: hidden;

    label {
        display: block;
        margin-bottom: 10px;
        font-family: ${odysseySettings.headingFont}, serif;
        font-weight: 400;
        text-align: left;
    }
`;

const AvatarWrapper = styled.div`
    display: inline-block;
    margin-top: 20px;
`;

const PreviewWrapper = styled.div`
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    
    img {
        object-fit: cover;
    }
`;

const labelStyling = {
    fontFamily: odysseySettings.bodyFont,
    fontWeight: 100,
    textAlign: 'center',
    cursor: 'pointer'
}

const borderStyling = {
    border: `2px dotted ${odysseySettings.fadeLinesColor}`,
}

class FileUpload extends Component {
    constructor(props) {
      super(props)
      const src = '';
      this.state = {
        preview: null,
        src
      }
      this.onCrop = this.onCrop.bind(this)
      this.onClose = this.onClose.bind(this)
      this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
    }
    
    onClose() {
      this.setState({preview: null})
    }
    
    onCrop(preview) {
      this.setState({preview})
    }
   
    onBeforeFileLoad(elem) {
      console.log(elem);
    }
    
    render () {
      return (
        <FileUploadWrapper>
          <label>{this.props.label}</label>
          <AvatarWrapper>
            <Avatar
                width={190}
                height={195}
                label="📷 Upload your pic"
                labelStyle={labelStyling}
                borderStyle={borderStyling}
                onCrop={this.onCrop}
                onClose={this.onClose}
                onBeforeFileLoad={this.onBeforeFileLoad}
                src={this.state.src}
            />
          </AvatarWrapper>
          <PreviewWrapper>
            <img src={this.state.preview} />
          </PreviewWrapper>
        </FileUploadWrapper>
      )
    }
  }

export default FileUpload;