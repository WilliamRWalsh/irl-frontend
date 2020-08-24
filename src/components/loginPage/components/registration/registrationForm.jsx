import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { login } from "../../../../services/authService";
import Input from "./../../../common/input/input";
import Joi from "joi-browser";
import MyForm from "../../../common/form/form";

class RegistartionForm extends MyForm {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Character Name"),
    password: Joi.string().required().label("Passkey"),
    passwordConfirm: Joi.string().required().label("Passkey"),
  };

  doSubmit = async e => {
    /* Called at the end of Form.handleSubmit */
    const { data } = this.state;
    // await login(data.email, data.password);
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
            isAutoFocused={false}
          />

          <Input
            name="password"
            value={data.password}
            onChange={this.handleChange}
            error={errors.password}
            placeholder="Passkey"
          />

          <Input
            name="passwordConfirm"
            value={data.passwordConfirm}
            onChange={this.handleChange}
            error={errors.passwordConfirm}
            placeholder="Confirm Passkey"
          />

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Card>
    );
  }
}

export default RegistartionForm;
