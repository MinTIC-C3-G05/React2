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
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="email" placeholder="Enter your email to contact you!" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>
        </Row>

        <div className="md-form">
          <textarea
            id="message"
            name="message"
            rows="2"
            className="form-control md-textarea"
          ></textarea>
          <label for="message">Write your Message here!</label>
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <br />
    </React.Fragment>
  );
}

export default FormularioComponente;
