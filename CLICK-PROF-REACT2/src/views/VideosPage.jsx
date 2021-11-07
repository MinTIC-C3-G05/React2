import React from 'react';
import ControlledCarousel from "../components/ControlledCarousel";
import TarjetasVideos from '../components/TarjetasVideos';

function VideosPage() {
    return (
        <React.Fragment>

            <h1 className="videos" >VIDEOS</h1>
            <ControlledCarousel/>
            <br />
            <br />
            <br />
            <TarjetasVideos/>
        
            

        </React.Fragment>
    )
}

export default VideosPage

