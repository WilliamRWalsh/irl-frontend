import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";

class LoginForm extends Component {
  state = {
    account: { email: "", password: "" },
  };

  handleSubmit = e => {
    e.preventDefault();

    /* Call BE */
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    return (
      <Card>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name="email"
              value={this.state.account.email}
              type="email"
              placeholder="Enter email"
              autoFocus
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name="password"
              value={this.state.account.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    );
  }
}

export default LoginForm;
