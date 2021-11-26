import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import Button from "@material-ui/core/Button";

function LoginPage() {
    const {loginWithRedirect} = useAuth0();


    return (
        <React.Fragment>
            
            <Button color="primary" variant="contained" href="/login" onClick={()=>loginWithRedirect()}>LOG IN </Button>

        </React.Fragment>
    )
}

export default LoginPage
