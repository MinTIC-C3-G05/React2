import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FormularioComponente() {
  return (
    <React.Fragment>
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact us!
      </h2>

      <Form action="https://formsubmit.co/diegohenao819@gmail.com" method="POST">
      <Row className="mb-3">
        <div class="col-md-8 offset-md-2">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="email" placeholder="Enter your email to contact you!" />
          </Form.Group>
          </div>
        </Row>
        <Row className="mb-3">
        <div class="col-md-8 offset-md-2">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>
        </div>
        </Row>

        <div className="md-form">
        <div class="col-md-8 offset-md-2">
          <textarea
            id="message"
            name="message"
            rows="2"
            className="form-control md-textarea"
          ></textarea>
          <label for="message">Write your Message here!</label>
        </div>
        </div>

        <div class="container-fluid">
				<div class="col-md-12 text-center">
        <Button variant="primary" id="boton" type="submit"
         style={{
          //display:'flex',
          alignItem:'center',
          justifyContent: 'center',
          borderRadius: 8,
          width: '200px',
        }}>
          Submit
        </Button>
				</div>
			</div>
      </Form>
      <br />
      <br />
    </React.Fragment>
  );
}

export default FormularioComponente;
