import React, { Component } from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../library/LoadingSpinner';
import LoadingGIF from '../../assets/odyssey/onboarding-loading.gif';

// GIF by gloriapittmann.tumblr.com/

const LoadingWrapper = styled.div`
    text-align: center;

    p {
        margin-bottom: 10px;
    }
`;

const IMG = styled.img`
    display: block;
    margin: auto;
    width: 400px;
    max-width: 60%;
`;

const Copyright = styled.p`
    font-size: 8px;
`;

class OnboardingLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <LoadingWrapper>
                <p>Give us a sec, we're gettin' your profile ready!</p>
                <IMG src={LoadingGIF} alt="gif by gloriapittmann.tumblr.com" />
                <Copyright>GIF by gloriapittmann.tumblr.com</Copyright>
                <LoadingSpinner />
            </LoadingWrapper>
        );
    }
};

export default OnboardingLoading;