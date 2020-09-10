import React from 'react';
import Joi from 'joi-browser';
import { Form, Button, Card } from "react-bootstrap";
import FormComponent from "./common/form";
import Input from "./common/input";


class TemplateForm extends FormComponent {
  state = {
    data: { name: "", description: "", xp: 15 },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Quest Name"),
    description: Joi.string().label("Details"),
    xp: Joi.number().required().min(5).max(25).label("Experience Points"),
  };

  doSubmit = async e => {
    /* Called at the end of Form.handleSubmit */
    const { data } = this.state;
    // Call Create Template Service
  };

  render() {
    const { data, errors } = this.state;

    return (
      <Card className="center">
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            value={data.name}
            onChange={this.handleChange}
            error={errors.name}
            placeholder=""
            isAutoFocused={true}
          />
          <Input
            name="description"
            value={data.description}
            onChange={this.handleChange}
            error={errors.description}
            placeholder=""
          />
          <Input
            name="xp"
            // type="range"
            value={data.xp}
            onChange={this.handleChange}
            error={errors.description}
          />

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </Card>
    );
  }
}

export default TemplateForm;