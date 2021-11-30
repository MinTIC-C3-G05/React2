import React, { useState } from "react";
import ControlledCarousel from "../components/ControlledCarousel";
import TarjetasVideos from '../components/TarjetasVideos';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function VideosPage() {


    const { user } = useAuth0();

    const [level, setLevel] = useState("");

    axios.get("/test").then((response) => {
        response.data.map((element) => {
            if (typeof(user) !== 'undefined') {
                if (user.email === element.email) {
                    setLevel(element.level);
                }
            }
        });
    });



    return (
        <React.Fragment>

            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <h3 className="font-family" >VIDEOS {level === "" ? "" : level}</h3>
            <br />
            <br />
            <br />
            </div>
            <ControlledCarousel/>
            <br />
            <br />
            <br />
            <TarjetasVideos/>
        
            

        </React.Fragment>
    )
}

export default VideosPage
