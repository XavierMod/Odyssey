import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MainTitle from '../../library/Styles/MainTitle';
import {odysseySettings} from '../../../config/theme';
import Logo from '../../library/Logo';
import AccountResults from './AccountResults';
import axios from 'axios'
import UserToken from '../../../services/UserToken'
import PostsResults from './PostsResults';

const SearchWrapper = styled.div`
    text-align: center;
    margin: 20px 0; 
`;

const SearchHeader = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
        cursor: pointer;
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
    background-color: white;
    margin: 40px auto;
    max-width: 600px;
`;

const SearchButton = styled.div`
    border: 1px solid black;
    padding: 12px 30px;
    background-color: black;
    color: white;
    cursor: pointer;
`;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activated: 'Posts',
            query: null
        }
    }

    onChange = (el) => {
        this.setState({query: el.target.value});
    }

    getResults = () => {
        if (this.state.activated == 'Posts') {
            let formData = new FormData();
            formData.append("content", this.state.query);
            
            Promise.all([
                axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getProfileResults.php', formData)
            ]).then(([r1]) => {
                console.log(r1);
                this.setState({resultsPosts: r1.data})
            })
        } else if (this.state.activated == 'Accounts') {
            let formData = new FormData();
            formData.append("content", this.state.query);
            
            Promise.all([
                axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getPostsResults.php', formData)
            ]).then(([r1]) => {
                console.log(r1);
                this.setState({resultsAccounts: r1.data})
            })
        }
    }

    activateOption = (option) => {
        this.setState({activated: option.target.textContent})
    }

    renderOptions = () => {
        if (this.state.activated == 'Posts') {
            return <AccountResults renderQuery={this.state.resultsPosts} />
        } else if (this.state.activated == 'Accounts') {
            return <PostsResults renderQuery={this.state.resultsAccounts} />
        }
    }


    render() {
        return (
            <SearchWrapper>
                <SearchHeader>
                    <LogoWrapper><Logo /></LogoWrapper>
                    <SearchInputWrapper>
                        <INPUT onChange={(el) => this.onChange(el)} type="text" placeholder="Search" />
                        <SearchButton onClick={this.getResults}>search</SearchButton>
                    </SearchInputWrapper>
                    <SearchOptions>
                        <ul>
                            <li onClick={(el) => this.activateOption(el)}>Posts{this.state.activated == 'Posts' ? <LinkStatus></LinkStatus> : null}</li>
                            <li onClick={(el) => this.activateOption(el)}>Accounts{this.state.activated == 'Accounts' ? <LinkStatus></LinkStatus> : null}</li>
                        </ul>
                    </SearchOptions>
                </SearchHeader>
                <SearchResultsWrapper>
                    {this.renderOptions()}
                </SearchResultsWrapper>
            </SearchWrapper>
        );
    }
};

export default Search;