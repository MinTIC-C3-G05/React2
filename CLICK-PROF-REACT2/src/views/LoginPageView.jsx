import React from 'react'
import LoginPage from '../components/LoginPage'
import LogOut from '../components/LogOut'
import ProfileComponent from '../components/ProfileComponent'
import {useAuth0} from '@auth0/auth0-react'

function LoginPageView() {

    const {user, isAuthenticated, isLoading} = useAuth0()

    if(!isAuthenticated){
        return (
        <LoginPage></LoginPage>
        )
    }else{ return (
        <React.Fragment>
         <div>
             <h1>LOG IN TO YOUR ACCOUNT</h1>
             
             <ProfileComponent></ProfileComponent>
             <LogOut/>
             </div>
        </React.Fragment> )
             }
   


        
   
}

export default LoginPageView