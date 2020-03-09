import React, {Component} from 'react';
import styled from 'styled-components';

const MainBG = styled.div`
    position: relative;
    overflow: hidden;
    height: 280px;
`;

const PostPreviewImageWrapper = styled.div`
    height: 100%;
    background-image: 
    /* top, transparent red */
    linear-gradient(
    rgba(0, 0, 0, 0.15), 
    rgba(0, 0, 0, 0.15)
    ),
    /* your image */
    url(${props => props.image});
    background-size: cover;
    background-position: center center;
    transition: all ease 0.5s;

    &:hover {
        height: 110%;
    }
`;

const TagsWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 15px;
    padding-bottom: 30px;
    margin-left: 10px;

    a {
        padding: 5px 15px;
        background: black;
        color: white !important;
        font-size: 11px;
        margin-right: 10px;
    }
`;

class PostPreviewImage extends Component {
    renderTags = () => {
        var res = this.props.tags.split(", ");
        return res;
    }

    render() {
        console.log('from image', this.props.tags);
        this.renderTags();
        return (
            <MainBG>
                <TagsWrapper>
                    {this.renderTags().map((el, ind) => {
                        return <a>{el}</a>
                    })}
                </TagsWrapper>
                <PostPreviewImageWrapper image={this.props.image}/>
            </MainBG>
        )
    }
}

export default PostPreviewImage;
