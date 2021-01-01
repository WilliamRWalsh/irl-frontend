import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Input from "../../common/input";
import Joi from "joi-browser";
import FormComponent from "../../common/form";
import { register } from "../../../services/userService";

class RegistartionForm extends FormComponent {
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
    await register(data.email, data.password);
  };

  render() {
    const { data, errors } = this.state;

    return (
      <Card>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            value={data.email}
            onChange={this.handleChange}
            error={errors.email}
            placeholder="Email"
            isAutoFocused={false}
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

          <Input
            name="passwordConfirm"
            value={data.passwordConfirm}
            onChange={this.handleChange}
            error={errors.passwordConfirm}
            placeholder="Confirm Passkey"
            disabled={this.props.disabled}
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
