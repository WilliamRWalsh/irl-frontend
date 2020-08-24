import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "./components/login/loginForm";
import FlipCard from "./../flipcard/flipcard";
import "./loginPage.scss";
import RegistartionForm from "./components/registration/registrationForm";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="main-content ">
            <Col></Col>
            <Col>
              <FlipCard
                className="center "
                front={<LoginForm />}
                back={<RegistartionForm />}
              />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default LoginPage;
