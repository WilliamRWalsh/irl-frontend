import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Input from "./common/input";
import FormComponent from "./common/form";
import Joi from "joi-browser";
import { createSkill } from "../services/skillService";

class AddSkillForm extends FormComponent {
  state = {
    data: { name: "", color: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Skill Name"),
    color: Joi.string().required().label("Skill Color"),
  };

  doSubmit = async e => {
    /* Called at the end of Form.handleSubmit */
    const { data } = this.state;
    await createSkill(data);
  };

  render() {
    const { data, errors } = this.state;

    return (
      <Card>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            value={data.name}
            onChange={this.handleChange}
            error={errors.name}
            placeholder="Skill Name"
            isAutoFocused={true}
          />
          <Input
            name="color"
            value={data.color}
            onChange={this.handleChange}
            error={errors.color}
            placeholder="Skill Color"
          />
          <Button variant="primary" type="submit">
            OK
          </Button>
        </Form>
      </Card>
    );
  }
}

export default AddSkillForm;
