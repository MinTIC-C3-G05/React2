import React from "react";
import Card from "react-bootstrap/Card";


let videos = ['https://www.youtube.com/embed/jaxgeXPgAz0',
 'https://www.youtube.com/embed/lX6JcybgDFo', 
 'https://www.youtube.com/embed/D6_qpaSxAQc', 
 'https://www.youtube.com/embed/5v-wyR5emRw',
 'https://www.youtube.com/embed/saTZ6TRS_HE', 
 'https://www.youtube.com/embed/Y486eiRm1q8', 
 'https://www.youtube.com/embed/ztrtZ0en8dw',
 'https://www.youtube.com/embed/iYwI3hzaXTM', 
 'https://www.youtube.com/embed/f_Febo0yKhc', 
 'https://www.youtube.com/embed/Foy3PBmQKks',
 'https://www.youtube.com/embed/iGlGc057CLk', 
 'https://www.youtube.com/embed/MfsfseVRZOQ', 
 'https://www.youtube.com/embed/Q6MiwSun4L4',
 'https://www.youtube.com/embed/RqLd5O5yBLQ', 
 'https://www.youtube.com/embed/xiohfyQsZxc', 
 'https://www.youtube.com/embed/ag3RnEaB3zM',
 'https://www.youtube.com/embed/R1vskiVDwl4', 
 'https://www.youtube.com/embed/-vZXgApsPCQ', 
 'https://www.youtube.com/embed/IZRzkAw-Fz8',
 'https://www.youtube.com/embed/Wo-C-jgA4Y8', 
 'https://www.youtube.com/embed/R3KeD06ti6c', 
 'https://www.youtube.com/embed/yoa0eIuWcsg'];

 
 function numRandom(){

  let num = Math.floor(Math.random()*videos.length);
  return num;

}

let CardNum = numRandom();


const TarjetasVideos = () => {
    return (
      <div class="container">
			<h3>Tendencias</h3>
			    	<div class="row">
			    	<div class="col-4">
			    		<div class="card">
              <iframe width="360" height="315" src={videos[CardNum]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
			    			<div class="card-body">
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
			    			</div>
			    		</div>
			    	<div class="col-4">
			    		<div class="card">
              <iframe width="360" height="315" src={videos[CardNum + 1]}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
			    			<div class="card-body">
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
			    			</div>
			    		</div>
			    	<div class="col-4">
			    		<div class="card">
              <iframe width="360" height="315" src={videos[CardNum - 1]}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
			    			<div class="card-body">
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
			    			</div>
			    		</div>
			    </div>  
        </div>
    );
  };
  
  export default TarjetasVideos;