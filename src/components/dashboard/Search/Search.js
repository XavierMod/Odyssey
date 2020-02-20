import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MainTitle from '../../library/Styles/MainTitle';
import {odysseySettings} from '../../../config/theme';
import Logo from '../../library/Logo';

const SearchWrapper = styled.div`
    text-align: center;
    margin: 20px 0; 
`;

const LogoWrapper = styled.div`
    padding-bottom: 20px;
`;

const SearchInputWrapper = styled.div`
    margin-top: 20px;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    margin: auto;
`;

const INPUT = styled.input`
    width: 80%;
    border-radius: 2px;
    border: 1px solid black;
    height: 30px;
    font-size: 16px;
    padding: 5px;
    color: black;
    font-family: ${odysseySettings.bodyFont};
    padding-left: 20px;
`;

const SearchOptions = styled.div`
    max-width: 600px;
    margin: auto;

    ul {
        display: flex;
        width: 90%;
        margin: auto;
        align-items: center;
        justify-content: center;
    }

    li {
        flex: 33%;
        display: inline-block;
        padding: 10px 0;
        font-family: ${odysseySettings.bodyFont};
        font-size: 13px;
        position: relative;
    }
`;

const LinkStatus = styled.span`
    background-color: black;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
`;

const SearchResultsWrapper = styled.div`
    background-color: black;
    height: 400px;
`;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activated: ''
        }
    }

    activateOption = (option) => {
        this.setState({activated: option})
    }

    render() {
        return (
            <SearchWrapper>
                <LogoWrapper><Logo /></LogoWrapper>
                <SearchInputWrapper>
                    <INPUT type="text" placeholder="Search" />
                </SearchInputWrapper>
                <SearchOptions>
                    <ul>
                        <li>Posts{this.state.activated == 'posts' ? <LinkStatus></LinkStatus> : null}</li>
                        <li>Accounts</li>
                        <li>Tags</li>
                    </ul>
                </SearchOptions>
                <SearchResultsWrapper>

                </SearchResultsWrapper>
            </SearchWrapper>
        );
    }
};

export default Search;