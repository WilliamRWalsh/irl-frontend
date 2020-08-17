import React, { Component } from "react";
import Quests from "./components/quests/quests"
import Skills from "./components/skills/skills"
import './static/styles/index.scss';
import { Container, Row, Col, Navbar } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar className="nav-bar nav-fill w-100" expand="xl" variant="dark" bg="dark">
          <Navbar.Brand href="#">IRL</Navbar.Brand>
        </Navbar>
        <Container>
          <Row className="main-content">
            <Col ><Skills /></Col>
            <Col xs={6}><Quests /></Col>
            <Col></Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default App;
