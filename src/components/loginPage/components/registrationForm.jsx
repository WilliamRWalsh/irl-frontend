import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Input from "../../common/input";
import Joi from "joi-browser";
import FormComponent from "../../common/form";
import { register } from "../../../services/userService";
import "./registrationForm.scss";

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
      <Card className="rl-card">
        <div className="logo" />

        <Form className="reg-form" onSubmit={this.handleSubmit}>
          <Input
            name="email"
            value={data.email}
            onChange={this.handleChange}
            error={errors.email}
            placeholder="Email"
            isAutoFocused={false}
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

          <Input
            name="passwordConfirm"
            value={data.passwordConfirm}
            onChange={this.handleChange}
            error={errors.passwordConfirm}
            placeholder="Confirm Password"
            disabled={this.props.disabled}
            className="inputs"
          />
          <div className="login-reg-wrapper">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </div>
        </Form>
        <a className="flip-btn" onClick={() => this.props.onFlip()}>
          Already have an account?
        </a>
      </Card>
    );
  }
}

export default RegistartionForm;
