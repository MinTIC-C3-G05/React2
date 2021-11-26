import React from 'react'
import LoginPage from '../components/LoginPage'
import LogOut from '../components/LogOut'
import ProfileComponent from '../components/ProfileComponent'
import {useAuth0} from '@auth0/auth0-react'

function LoginPageView() {

    const {isAuthenticated} = useAuth0()

    if(!isAuthenticated){
        return (
        <LoginPage></LoginPage>
        )
    }else{ return (
        <React.Fragment>
         <div>
            
             
             <ProfileComponent></ProfileComponent>
             
             </div>
        </React.Fragment> )
             }
   


        
   
}

export default LoginPageView
