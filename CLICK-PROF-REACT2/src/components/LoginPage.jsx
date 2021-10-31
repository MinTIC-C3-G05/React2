import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

function LoginPage() {
    const {loginWithRedirect} = useAuth0();


    return (
        <React.Fragment>
            
            <button onClick={()=>loginWithRedirect()}>LOG IN </button>

        </React.Fragment>
    )
}

export default LoginPage
