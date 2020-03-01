import React from 'react'
import styled from 'styled-components'

const AuthVerification = (props) => {
    return (
        <React.Fragment>
            {props.history.push('/onboarding')}
        </React.Fragment>
    )
}

export default AuthVerification
