import React from 'react';
import ControlledCarousel from "../components/ControlledCarousel";
import TarjetasVideos from '../components/TarjetasVideos';

function VideosPage() {
    return (
        <React.Fragment>

            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <h3 className="font-family" >VIDEOS</h3>
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

