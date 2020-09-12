import React, { Component } from "react";
import TemplateForm from "./templateForm";
import { Row, Container, Col } from "react-bootstrap";
import { getAllUsersSkills } from "../services/skillService";

class Customize extends Component {
  state = {};

  async componentDidMount() {
    const skills = await getAllUsersSkills();
    this.setState({ skills });
  }

  render() {
    return (
      <Container>
        <Row className="main-content">
          <Col></Col>
          <Col xs={6}></Col>
          <Col>
            <TemplateForm skills={this.state.skills} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Customize;
