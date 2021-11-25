import React, {useState} from 'react'
import {useAuth0} from '@auth0/auth0-react'
import axios from 'axios'

function ProfileComponent() {
    const {user, isAuthenticated, isLoading} = useAuth0()


    const [level, setLevel] = useState("TAKE OUR TEST")

    axios.get("/test").then((response)=>{
        response.data.map(element=>{
            if(user.email === element.email){
                setLevel(element.level)

            }
        })
    })



    if (isLoading){
        return <div>Loading.....</div>
    }
        return (
            isAuthenticated &&(
                <div>
                    <img src={user.picture} alt={user.name}/>
                    <h2>Hello:{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Level:{level}</p>
                </div>
            )
    )
};

export default ProfileComponent
