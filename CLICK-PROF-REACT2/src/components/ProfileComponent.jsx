import React, {useState} from 'react'
import {useAuth0} from '@auth0/auth0-react'
import axios from 'axios'
import {
    
    Link
  } from "react-router-dom";

function ProfileComponent() {
    const {user, isAuthenticated, isLoading} = useAuth0()


    const [level, setLevel] = useState("")

    axios.get("/test").then((response)=>{
        response.data.map(element=>{
            if(user.email === element.email){
                setLevel(element.level)
                console.log(element)

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
                    <p>Level:{level===""? <Link to="/quiz">Please take our test</Link>: level}</p>
                </div>
            )
    )
};

export default ProfileComponent
