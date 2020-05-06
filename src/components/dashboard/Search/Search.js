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
import HeaderLogo from '../../library/Headers/HeaderLogo';


const SearchWrapper = styled.div`
    text-align: left;
`;

const SearchHeader = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px;
    padding-top: 90px;
    padding-bottom: 0;
    margin: auto;
    text-align: center;
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
    border: 1px solid white;
    height: 30px;
    font-size: 22px;
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
        align-items: center;
        justify-content: center;
    }
`;

const ListItem = styled.li`
    display: inline-block;
    padding: 20px;
    margin: 0 10px; 
    font-size: 17px;
    border-bottom: 7px solid black;
    opacity: ${props => props.opacity};
    cursor: pointer;
`;

const SearchResultsWrapper = styled.div`
    background-color: white;
    margin: 40px auto;
    max-width: 600px;
    padding: 0 20px;
`;

const SearchButton = styled.div`
    border: 2px solid black;
    padding: 12px 30px;
    background-color: white;
    color: black;
    font-weight: 700;
    border-radius: 100px;
    cursor: pointer;
    transition: all ease 0.5s;
    &:hover {
        background-color: black;
        border: 2px solid black;
        color: white;
    }
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
                this.setState({resultsPosts: r1.data})
            })
        } else if (this.state.activated == 'Accounts') {
            let formData = new FormData();
            formData.append("content", this.state.query);
            
            Promise.all([
                axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getPostsResults.php', formData)
            ]).then(([r1]) => {
                this.setState({resultsAccounts: r1.data})
            })
        }
    }

    activateOption = (option) => {
        if (option.target.textContent === 'Posts') {
            this.setState({activated: 'Accounts'})
        } else if (option.target.textContent === 'Accounts') {
            this.setState({activated: 'Posts'})
        }
    }

    componentDidMount() {
        let formData = new FormData();
        formData.append("content", UserToken('get'));
        Promise.all([
            axios.post('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getProfileByNameUser.php', formData)
        ]).then(([r1]) => {
            this.setState({activeUser: r1.data})
        })
    }

    renderOptions = () => {
        if (this.state.activated == 'Posts') {
            return <AccountResults renderQuery={this.state.resultsPosts} />
        } else if (this.state.activated == 'Accounts') {
            return <PostsResults activeUserProfile={this.state.activeUser} renderQuery={this.state.resultsAccounts} />
        }
    }

    render() {
        return (
            <SearchWrapper>
                <HeaderLogo addSettings/>
                <SearchHeader>
                    <SearchInputWrapper>
                        <INPUT onChange={(el) => this.onChange(el)} type="text" placeholder="Search" />
                        <SearchButton onClick={this.getResults}>search</SearchButton>
                    </SearchInputWrapper>
                    <SearchOptions>
                        <ul>
                            <ListItem opacity={this.state.activated == 'Posts' ? 1 : 0.4} onClick={(el) => this.activateOption(el)}>Accounts</ListItem>
                            <ListItem opacity={this.state.activated == 'Accounts' ? 1 : 0.4} onClick={(el) => this.activateOption(el)}>Posts</ListItem>
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