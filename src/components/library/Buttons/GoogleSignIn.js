import React, { Component } from 'react';
import styled from 'styled-components';

const GOOGLE_BUTTON_ID = 'google-sign-in-button';

const GoogleWrapper = styled.div`
  display: inline-block;
  margin: 10px 0;
`;

class GoogleSignIn extends Component {
  componentDidMount() {
    window.gapi.signin2.render(
      GOOGLE_BUTTON_ID,
      {
        'scope': 'profile email',
        'width': 280,
        'height': 50,
        'fontFamily': 'Butler',
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': this.onSuccess,
        'onfailure': this.onFailure
      },
    );
  }

  onSuccess(googleUser) {
    const profile = googleUser.getBasicProfile();
  }

  render() {
    return (
      <GoogleWrapper><div id={GOOGLE_BUTTON_ID}/></GoogleWrapper>
    );
  }
}

export default GoogleSignIn;