import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { login } from "../../../services/authService";
import Input from "../../common/input";
import Joi from "joi-browser";
import FormComponent from "../../common/form";

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
      <Card className={this.state.isLoggedIn ? "move-up center" : "center"}>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            value={data.email}
            onChange={this.handleChange}
            error={errors.email}
            placeholder="Email"
            isAutoFocused={true}
            disabled={this.props.disabled}
          />

          <Input
            name="password"
            value={data.password}
            onChange={this.handleChange}
            error={errors.password}
            placeholder="Passkey"
            disabled={this.props.disabled}
          />

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card>
    );
  }
}

export default LoginForm;
