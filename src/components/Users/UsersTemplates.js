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

    componentDidMount() {
        Promise.all([
            axios.get('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getAllPosts.php'),
            axios.get('http://localhost:8888/odyssey-api/demo_react/api/endpoints/getAllProfiles.php')
        ]).then(([r1, r2]) => {
            this.setState({posts: r1.data});
            this.setState({profiles: r2.data});
        })
    }

    render() {

        const postTemplates = this.state.posts.map((el, ind, arr) => {
            console.log(this.props.match.url + "/" + el.slugPost)
            return <Route key={el.id} path={this.props.match.url + "/" + el.nameUser + "/" + el.slugPost} exact
            render={() => 
            <PostTemplate
                data={this.state.posts[ind]}
                />} />
        });

        const profileTemplates = this.state.profiles.map((el, ind, arr) => {
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

