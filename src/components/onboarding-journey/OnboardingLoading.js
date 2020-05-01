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

    h1 {
        font-weight: 700;
        font-size: 20px;
        margin: 0 40px;
        line-height: 30px;
    }
`;

const IMG = styled.img`
    display: block;
    margin: auto;
    width: 400px;
    max-width: 60%;
    padding-top: 60px;
`;

const Copyright = styled.p`
    font-size: 8px;
`;

class OnboardingLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        setTimeout(() => { 
            window.location.href = '/dashboard/home'; 
        }, 3000);
    }

    render() {
        return (
            <LoadingWrapper>
                <p>Give us a sec, we're gettin' your profile ready!</p>
                <IMG src="https://opendoodles.s3-us-west-1.amazonaws.com/sprinting.gif" />
                <LoadingSpinner />
                <h1>Give us a sec, we're getting your profile ready!</h1>
            </LoadingWrapper>
        );
    }
};

export default OnboardingLoading;