import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Imagen1 from '../img/Image-1.jpg';
import Imagen2 from '../img/Image-2.png';
import Imagen3 from '../img/Image-3.png';

const TarjetasVideos = () => {
    return (
      <div>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src={Imagen1}
            />
            <Card.Body>
              
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={Imagen2}
            />
            <Card.Body>
             
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={Imagen3}
            />
            <Card.Body>
             
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    );
  };
  
  export default TarjetasVideos;