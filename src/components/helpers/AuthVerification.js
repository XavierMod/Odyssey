/*
    File Description: Component that will redirect the user to the onboarding journey if they have not registered or signed in yet.
    Notes: - 
*/

import React from 'react'

const AuthVerification = (props) => {
    return (
        <React.Fragment>
            {props.history.push('/onboarding')}
        </React.Fragment>
    )
}

export default AuthVerification
