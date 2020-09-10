import React, { Component } from "react";
import TemplateForm from "./templateForm";
import { Row, Container, Col } from "react-bootstrap"

class Customize extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Row className="main-content">
          <Col>
          </Col>
          <Col xs={6}>
          </Col>
          <Col><TemplateForm /></Col>
        </Row>
      </Container>
    )
  }
}

export default Customize;
