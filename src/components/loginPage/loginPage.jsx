import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "./components/loginForm";
import RegistartionForm from "./components/registrationForm";
import FlipCard from "./components/flipcard";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="main-content ">
            <Col>{/* <LoginForm /> */}</Col>
            <Col>
              {<FlipCard front={<LoginForm />} back={<RegistartionForm />} />}
            </Col>
            <Col>{/* <RegistartionForm /> */}</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default LoginPage;
