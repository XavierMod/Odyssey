import React, {Component} from 'react';
import styled from 'styled-components';
import heartIcon from '../../../../assets/icons/heart.svg';
import axios from 'axios'
import UserToken from '../../../../services/UserToken';

const PostPreviewLikeWrapper = styled.div`
    display: flex;
    max-width: 80px;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 20px;
    img {
        flex: 2;
    }

    p {
        flex: 8;
        font-weight: bold;
    }
`;

const LikeButton = styled.a`
    transform: scale(0.6);
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 0 auto;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;

    .like-overlay {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #ff4f8f;
        transform: scale(0);
        transition: all .4s;
        z-index: 0;
    }

    svg {
        &.not-liked {
          display: block;
          color: #fff;
          position: relative;
          z-index: 1;
        }
        &.is-liked {
          display: none;
          color: #fff;
          position: relative;
          z-index: 1;
        }
    }

    &.is-active {
        .like-overlay {
            transform: scale(1);
        }
        svg {
            &.not-liked {
                display: none;
            }
            &.is-liked {
                display: block;
            }
        }
    }
`;

const LikesNumber = styled.div`
    font-size: 13px;
`;

class PostPreviewLike extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: this.props.userInfo,
            likeState: false,
            likes: Number(this.props.userInfo.likes)  
        } 
    }

    componentDidMount() {
        console.log(this.props);
        console.log('FROM PostPreviewLike', this.props.likedPostsActiveUser);
        console.log('FROM PostPreviewLike', this.props.userInfo.likes);


        if (this.props.likedPostsActiveUser !== '') {
            let arrayLikedPosts = this.props.likedPostsActiveUser.split(', ');

            if (arrayLikedPosts.includes(this.props.userInfo.idPost)) {
                this.setState({likeState: true})
            } else {
                this.setState({likeState: false})
            }
        }
    }

    handleClick = () => {
        
        let parsedNumbers;
        let hasActiveUserLiked;
        let newActiveUserLikedPostsString;

        if (this.state.likeState) {
            //HERE THE POSTID IS INCLUDED IN THE DB
            parsedNumbers = Number(this.props.userInfo.likes);
            parsedNumbers--;
            console.log(parsedNumbers.toString());
            hasActiveUserLiked = "0";

            if (this.props.likedPostsActiveUser !== '') {
                var arrayLikedPosts = this.props.likedPostsActiveUser.split(', ');

                let indexPostToRemove = arrayLikedPosts.indexOf(this.props.userInfo.idPost);

                if (indexPostToRemove > -1) {
                    arrayLikedPosts.splice(indexPostToRemove, 1);
                }

                newActiveUserLikedPostsString = arrayLikedPosts.join(", ");

            } else {
                newActiveUserLikedPostsString = this.props.userInfo.idPost;
            }


            this.setState({likes: parsedNumbers});   
        } else {
           //HERE THE POSTID IS NOT INCLUDED IN THE DB
            parsedNumbers = Number(this.props.userInfo.likes);
            parsedNumbers++;
            console.log(parsedNumbers.toString());
            hasActiveUserLiked = "1"; 

            if (this.props.likedPostsActiveUser !== '') {
                var arrayLikedPosts = this.props.likedPostsActiveUser.split(', ');

                arrayLikedPosts.push(this.props.userInfo.idPost);

                newActiveUserLikedPostsString = arrayLikedPosts.join(", ");

            } else {
                var arrayLikedPosts = [this.props.userInfo.idPost]
                console.log(arrayLikedPosts);
                newActiveUserLikedPostsString = arrayLikedPosts;
            }

            this.setState({likes: parsedNumbers});              
        }


        let formData = new FormData();
        formData.append("idPost", this.props.userInfo.idPost);
        formData.append("hasActiveUserLiked", hasActiveUserLiked);
        formData.append("newActiveUserLikedPostsString", newActiveUserLikedPostsString);
        formData.append("userActive", UserToken('get'));
        formData.append("likesUpdated", parsedNumbers.toString());
        
        Promise.all([
            axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/likesHandler.php', formData)
        ]).then(([r1]) => {
            console.log(r1.data);
        })

        this.setState({likeState: !this.state.likeState});
        window.location.reload(false);
    }

    render() {
        return (
    
            <PostPreviewLikeWrapper>
                <LikeButton className={this.state.likeState ? 'is-active' : null} onClick={() => this.handleClick()}>
                    <svg fill="white" class="material-icons not-liked bouncy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
                    <svg fill="white"class="material-icons is-liked bouncy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
                    <span class="like-overlay"></span>
                </LikeButton>
        <LikesNumber>{this.state.likes}</LikesNumber>
            </PostPreviewLikeWrapper>
        )
    }
}

export default PostPreviewLike;