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
  };

  schema = {
    email: Joi.string().required().label("Character Name"),
    password: Joi.string().required().label("Passkey"),
  };

  doSubmit = async e => {
    /* Called at the end of Form.handleSubmit */
    const { data } = this.state;
    await login(data.email, data.password);
  };

  render() {
    const { data, errors } = this.state;

    return (
      <Card className="center">
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            value={data.email}
            onChange={this.handleChange}
            error={errors.email}
            placeholder="Email"
            isAutoFocused={true}
          />

          <Input
            name="password"
            value={data.password}
            onChange={this.handleChange}
            error={errors.password}
            placeholder="Passkey"
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
