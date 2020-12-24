import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "./components/loginForm";
import RegistartionForm from "./components/registrationForm";
import "./loginPage.scss";
import FlipCard from './../flipcard';

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="main-content ">
            <Col>
              {/* <LoginForm /> */}
            </Col>
            <Col>{ <FlipCard className="center" front={<LoginForm />} back={<RegistartionForm />} /> }</Col>
            <Col>
              {/* <RegistartionForm /> */}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default LoginPage;
