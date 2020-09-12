/*
    File Description: Component that generates all routes for both posts and users templates, based on the files on the templates folder.
    Notes: KEY component. 
*/


import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PostTemplate from '../../templates/PostTemplate';
import axios from 'axios';
import UserToken from '../../services/UserToken';
import ProfileTemplate from '../../templates/ProfileTemplate'

class UsersTemplates extends Component {

    state = {
        posts: [],
        profiles: []
    }

    // Fetches all posts and profiles on the database
    componentDidMount() {
        Promise.all([
            axios.get('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getAllPosts.php'),
            axios.get('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getAllProfiles.php')
        ]).then(([r1, r2]) => {
            console.log(r1.data);
            this.setState({posts: r1.data});
            this.setState({profiles: r2.data});
        })
    }

    render() {
        const postTemplates = this.state.posts.map((el, ind, arr) => {
            return <Route key={el.id} path={this.props.match.url + "/" + el.nameUser + "/" + el.slugPost} exact
            render={() => 
            <PostTemplate
                data={this.state.posts[ind]}
                />} />
        });

        const profileTemplates = this.state.profiles.map((el, ind, arr) => {
            if (this.state.profiles[ind].friends == null) {
                this.state.profiles[ind].friends = '';
            }
            console.log(this.state.profiles[ind])
            return <Route key={el.id} path={this.props.match.url + "/" + el.nameUser} exact
            render={() => 
            <ProfileTemplate
                data={this.state.profiles[ind]}
                />} />
        });

        return (
            <React.Fragment>
                {postTemplates}
                {profileTemplates}
            </React.Fragment>
        )
    }
}

export default UsersTemplates;

