import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PostTemplate from '../../templates/PostTemplate';

class UsersProjects extends Component {

    state = {
        projects: [
            {
                title: 'Test1',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate cursus metus, non aliquam sapien. Sed dui urna, maximus sed metus ac, ultrices luctus leo. Donec vel libero semper, tristique nibh',
                user: 'xaviermod21',
                slug: 'test-one',
                postID: 'hjd8uyUyhj'
            },
            {
                title: 'Test2',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate cursus metus, non aliquam sapien. Sed dui urna, maximus sed metus ac, ultrices luctus leo. Donec vel libero semper, tristique nibh',
                user: 'pepmolina12',
                slug: 'test-two',
                postID: 'opq76sjnhB'
            }
        ],
    }

    componentDidMount() {
        // Do ajax call and set state
    }

    render() {

        const getAllUrls = () => {
            var urls = [];
            this.state.projects.forEach((el, ind, arr) => {
                urls.push(el.slug);
            });
            return urls;
        }

        // Renders all small posts
        const templates = this.state.projects.map((el, ind, arr) => {
            const generateRoute = this.props.match.url + "/" + el.user + "/" + el.slug + "/" + el.postID;
            console.log(generateRoute);
            return <Route key={el.ind} path={generateRoute}
            render={() => 
            <PostTemplate
                data={this.state.projects[ind]}/>} />
        });
        
        return (
            <React.Fragment>
                {templates}
            </React.Fragment>
        )
    }
}

export default UsersProjects;

