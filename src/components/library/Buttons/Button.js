import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { odysseySettings } from '../../../config/theme';

import facebookLogo from '../../../assets/icons/facebook.svg';
import emailLogo from '../../../assets/icons/email.svg';
import googleLogo from '../../../assets/icons/google.svg';

const ButtonWrapper = styled.div`
    border: 1px solid ${odysseySettings.fadeLinesColor};
    display: inline-block;
    width: 280px;
    text-align: center;
    padding: 15px 0;
    color: black;
    transition: all ease 0.4s;
        
    &:hover {
        background-color: ${odysseySettings.primaryColor};
        color: ${odysseySettings.backgroundColor};
        transition: all ease 0.4s;
    }
`;

const ButtonWrapperSubmit = styled.div`
    border: 1px solid ${odysseySettings.fadeLinesColor};
    background-color: ${odysseySettings.primaryColor};
    color: white;
    display: inline-block;
    width: 280px;
    text-align: center;
    padding: 15px 0;
    transition: all ease 0.4s;
    position: relative;
    cursor: pointer;

    &:hover {
        box-shadow: 1px 1px 20px ${odysseySettings.fadeLinesColor};
        border-radius: 5px;
        transition: all ease 0.2s;
    }

    input {
        position: absolute;
        border: 1px solid ${odysseySettings.fadeLinesColor};
        top: 0;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
`;

const ButtonWrapperWithImage = styled.div`
    border: 1px solid ${odysseySettings.fadeLinesColor};
    width: 280px;
    text-align: center;
    color: black;
    transition: all ease 0.4s;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    padding: 15px 0;

    &:hover {
        background-color: ${odysseySettings.primaryColor};
        color: ${odysseySettings.backgroundColor};
        transition: all ease 0.4s;

        img {
            filter: brightness(0) invert(1);
            transition: all ease 0.4s;
        }
    }

    span {
        flex: 8;
    }
`;

const IMGWrapper = styled.div`
    flex: 2;

    img {
        width: 20px;
    }
`;

const DIV = styled.div`
    a {
        color: red;
        text-decoration: none;
    }
`;

const Button = ( props ) => {

    const getImage = () => {
        if ( props.image == 'facebook' ) {
            return(<img src={facebookLogo} />)
        } else if ( props.image == 'google' ) {
            return(<img src={googleLogo} />)
        } else if ( props.image == 'email' ) {
            return(<img src={emailLogo} />)
        }
    }

    if ( props.variant == 'primary' ) {
        return (
            <div style={props.disabled ? { pointerEvents: 'none', opacity: '0.6' } : null} onClick={props.onClick}>
                <Link to={props.link}>
                    <ButtonWrapper className="buttonPrimary button">
                        <span>{props.body}</span>
                    </ButtonWrapper>
                </Link>
            </div>
        )
    } else if ( props.variant == 'withImage' ) {
        return (
            <DIV>
                <Link to={props.link}>
                    <ButtonWrapperWithImage className="buttonWithImage button">
                        <IMGWrapper>                   
                            {getImage()}
                        </IMGWrapper>
                        <span>{props.body}</span>
                    </ButtonWrapperWithImage>
                </Link>
            </DIV>
        ) 
    } else if ( props.variant == 'submit' ) {
        return (
            <div>
                <ButtonWrapperSubmit className="buttonSubmit button">
                    <input hidden type="submit"></input>
                    <span>{props.body}</span>
                </ButtonWrapperSubmit>
            </div>
        )
    } 
}

export default Button;