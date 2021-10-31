import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

function LogOut() {
    const {logout} = useAuth0();
    return (
        <React.Fragment>
            <button onClick={()=>logout({returnTo: window.location.origin})}>LOG OUT</button>
        </React.Fragment>
    )
}

export default LogOut
