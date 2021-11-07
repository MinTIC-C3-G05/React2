import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../css/ControlledCarousel.css'



function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        <Carousel.Item>
          <div className="VideoSlide">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/saTZ6TRS_HE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Carousel.Item>
        <Carousel.Item>
         <div className="VideoSlide">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Y486eiRm1q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="VideoSlide">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ztrtZ0en8dw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
  

export default ControlledCarousel;