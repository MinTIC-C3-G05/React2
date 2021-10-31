import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FormularioComponente() {
  return (
    <React.Fragment>
      <h2 class="h1-responsive font-weight-bold text-center my-4">
        Contact us!
      </h2>

      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <div class="md-form">
          <textarea
            id="message"
            name="message"
            rows="2"
            class="form-control md-textarea"
          ></textarea>
          <label for="message">Message</label>
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
