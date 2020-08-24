import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { login } from "../../../../services/authService";

class LoginForm extends Component {
  state = {
    account: { email: "", password: "" },
    errors: {},
  };

  validateSubmit = () => {
    const errors = {};

    const { account } = this.state;
    if (account.email.trim() === "")
      errors.email = "Character name is required.";
    if (account.password.trim() === "")
      errors.password = "Passkey is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = async e => {
    e.preventDefault();

    const errors = this.validateSubmit();
    this.setState({ errors: errors || {} });
    if (errors) return;

    /* Call BE to log in */
    const { account } = this.state;
    await login(account.email, account.password);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    return (
      <Card className="center">
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
            {this.state.errors.email && (
              <div className="alert alert-danger">
                {this.state.errors.email}
              </div>
            )}
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
            Login
          </Button>
        </Form>
      </Card>
    );
  }
}

export default LoginForm;
