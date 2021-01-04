import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { login } from "../../../services/authService";
import Input from "../../common/input";
import Joi from "joi-browser";
import FormComponent from "../../common/form";
import "./loginForm.scss";

class LoginForm extends FormComponent {
  state = {
    data: { email: "", password: "" },
    errors: {},
    isLoggedIn: false,
  };

  schema = {
    email: Joi.string().required().label("Character Name"),
    password: Joi.string().required().label("Passkey"),
  };

  moveUp() {}

  doSubmit = async e => {
    /* Called at the end of Form.handleSubmit */
    const { data } = this.state;
    await login(data.email, data.password);

    document.body.classList.add("move-up-background");
    const isLoggedIn = true;
    this.setState({ isLoggedIn });
  };

  render() {
    const { data, errors } = this.state;

    return (
      <Card className="rl-card">
        <div className="logo" />

        <Form className="login-form" onSubmit={this.handleSubmit}>
          <Input
            name="email"
            value={data.email}
            onChange={this.handleChange}
            error={errors.email}
            placeholder="Email"
            isAutoFocused={true}
            disabled={this.props.disabled}
            className="inputs"
          />

          <Input
            name="password"
            value={data.password}
            onChange={this.handleChange}
            error={errors.password}
            placeholder="Password"
            disabled={this.props.disabled}
            className="inputs"
          />
          <div className="login-reg-wrapper">
            <Button variant="primary" type="submit" className="login-reg-btn">
              Login
            </Button>
          </div>
        </Form>
        <a className="flip-btn" onClick={() => this.props.onFlip()}>
          Need to register?
        </a>
      </Card>
    );
  }
}
/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */

export default LoginForm;
