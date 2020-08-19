import React, { Component } from "react";
import Quests from "../quests/quests";
import Skills from "../skills/skills";
import { Container, Row, Col } from "react-bootstrap";

import "../../static/styles/index.scss";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row className="main-content">
          <Col>
            <Skills />
          </Col>
          <Col xs={6}>
            <Quests />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
