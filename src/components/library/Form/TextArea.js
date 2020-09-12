/*
    File Description: Creates a textarea.
    Notes: LIBRARY component. 
*/

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { odysseySettings } from '../../../config/theme';
import Checkmark from '../../../assets/icons/checkmark.svg';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const TextAreaWrapper = styled.div`
    display: block;
    width: 300px;
    text-align: left;
    height: 100%;
    margin: 30px auto;

    label {
        display: block;
        margin-bottom: 10px;
        font-family: ${odysseySettings.headingFont}, serif;
        font-weight: 400;
    }

    textarea {
        width: 100%;
        height: 100%;
        max-width: 98%;
        font-family: ${odysseySettings.bodyFont}, sans-serif;
        font-weight: 100;
        font-size: 16px;
        padding: 5px;
        border: 1px solid ${odysseySettings.fadeLinesColor};
    }
`;

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <TextAreaWrapper>
                <label>{this.props.label}</label>
                <TextareaAutosize />
            </TextAreaWrapper>
        );
    }
}

export default TextArea;