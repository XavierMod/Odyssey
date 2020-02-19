import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { odysseySettings } from '../../config/theme';
import { Link } from 'react-router-dom';

import IconHome from '../../assets/icons/bar/bottom-bar-home.svg';
import IconOdyssey from '../../assets/icons/bar/bottom-bar-odyssey.png';
import IconPlusCircle from '../../assets/icons/bar/bottom-bar-plus-circle.svg';
import IconSearch from '../../assets/icons/bar/bottom-bar-search.svg';
import IconSettings from '../../assets/icons/bar/bottom-bar-settings.svg';
import IconBell from '../../assets/icons/bell-outline.svg';


const BottomBarWrapper = styled.div`
    border-top: 1px solid ${odysseySettings.fadeLinesColor};
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: white;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
    }
`;

const BottomBarTab = styled.li`
    flex: 30%;
    cursor: pointer;

    img {
        width: 18px;
    }

    img.Add {
        width: 30px;
    }
`;

class BottomBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <BottomBarWrapper>
                <ul>
                    <BottomBarTab>
                        <Link to="/dashboard/home">
                            <img src={IconHome}/>
                        </Link>
                    </BottomBarTab>
                    <BottomBarTab>
                        <Link to="/dashboard/homes">
                            <img src={IconSearch}/>
                        </Link>
                    </BottomBarTab>
                    <BottomBarTab><img className="Add" src={IconPlusCircle}/></BottomBarTab>
                    <BottomBarTab>
                        <Link to="/dashboard/profile">
                            <img src={IconOdyssey}/>
                        </Link>
                    </BottomBarTab>
                    <BottomBarTab>
                        <Link to="/dashboard/notifications">
                            <img src={IconBell}/>
                        </Link>
                    </BottomBarTab>
                </ul>
            </BottomBarWrapper>
        );
    }
};

export default BottomBar;