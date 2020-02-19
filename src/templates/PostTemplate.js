import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/odyssey/odyssey-logo.svg';
const Header = styled.div`
    background-color: white;
    width: 100%;
    height: 80px;
    box-shadow: 1px 1px 5px #bababa;
    position: fixed;
    display: flex;

    img {
        flex: 100%;
        padding: 20px;
    }
`;

const SVG = styled.div`
    width: 100px;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease .1s;
    cursor: pointer;

    &:hover {
        background-color: black;

        svg {
            fill: white;
        }
    }

    svg {
        position: absolute;
        top: 0;
        height: 100%;
        transform: rotate(180deg);
    }
`;

const PostWrapper = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 20px;
    padding-top: 120px;
`;

const FeaturedImage = styled.img`
    object-fit: cover;
    width: 100%;

`;

const PostTitle = styled.h1`
    font-size: 30px;
    margin: 10px 0;
`;

const PostSubtitle = styled.h3`
    font-size: 20px;
    opacity: 0.5;
    font-family: sans-serif;
    font-weight: 500;
    margin-bottom: 30px;
`;

const PostBody = styled.p`

`;

const PostTemplate = (props) => {

    const {title, desc, user} = props.data;

    console.log(props);

    return (
        <React.Fragment>
            <Header>
                <SVG><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg></SVG>
                <img src={Logo} />
            </Header>
            <PostWrapper>
                <FeaturedImage src="https://picsum.photos/1920/1080" />
                <PostTitle>{title}</PostTitle>
                <PostSubtitle>This is a subtitle</PostSubtitle>
                <PostBody>{desc}</PostBody>
                <PostBody>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue erat, vehicula a sagittis vel, semper nec ante. Donec bibendum volutpat massa nec egestas. Sed eu rutrum sem, non tincidunt dolor. Vestibulum turpis nunc, suscipit sit amet congue id, elementum sed justo. Integer vel nunc pulvinar, lobortis mauris id, finibus orci. Phasellus ultrices, neque id sollicitudin finibus, lacus massa vehicula arcu, eu viverra arcu massa consectetur ligula. Ut egestas tincidunt lectus.

                </PostBody>

                <PostBody>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue erat, vehicula a sagittis vel, semper nec ante. Donec bibendum volutpat massa nec egestas. Sed eu rutrum sem, non tincidunt dolor. Vestibulum turpis nunc, suscipit sit amet congue id, elementum sed justo. Integer vel nunc pulvinar, lobortis mauris id, finibus orci. Phasellus ultrices, neque id sollicitudin finibus, lacus massa vehicula arcu, eu viverra arcu massa consectetur ligula. Ut egestas tincidunt lectus.

                </PostBody>

                <PostBody>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue erat, vehicula a sagittis vel, semper nec ante. Donec bibendum volutpat massa nec egestas. Sed eu rutrum sem, non tincidunt dolor. Vestibulum turpis nunc, suscipit sit amet congue id, elementum sed justo. Integer vel nunc pulvinar, lobortis mauris id, finibus orci. Phasellus ultrices, neque id sollicitudin finibus, lacus massa vehicula arcu, eu viverra arcu massa consectetur ligula. Ut egestas tincidunt lectus.

                </PostBody>
            </PostWrapper>
        </React.Fragment>
    )
}

export default PostTemplate
