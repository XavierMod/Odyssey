import React, { Component } from 'react';
import styled from 'styled-components';
import { odysseySettings } from '../../../../config/theme';
import settingsIcon from '../../../../assets/icons/settings.svg';
import bookmarkOutlineIcon from '../../../../assets/icons/bookmark-outline.svg';
import bookmarkFullIcon from '../../../../assets/icons/bookmark-full.svg';

const BookmarkWrapper = styled.div`
    cursor: pointer;
`;

class PostPreviewBookmark extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    render() {

        const activateBookmark = () => {
            this.setState({active: !this.state.active});
        }

        return (
            <BookmarkWrapper onClick={activateBookmark}><img src={this.state.active ? bookmarkFullIcon : bookmarkOutlineIcon}/></BookmarkWrapper>
        )
    }
}

export default PostPreviewBookmark;