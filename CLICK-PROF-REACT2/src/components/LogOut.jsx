import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import Button from "@material-ui/core/Button";



import theme from "../css/TemaConfig";

function LogOut() {
    const {logout} = useAuth0();
    return (
        <React.Fragment >
            <div style={{textAlign:"right", marginLeft:"20px", display:"flex"}}>
                <Button 
                color="secondary" variant="contained"
                onClick={()=>logout({returnTo: window.location.origin})}>LOG OUT</Button>
            </div>
        </React.Fragment>
    )
}

export default LogOut
