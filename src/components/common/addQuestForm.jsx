import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Input from "./input";
import FormComponent from "./form";
import Joi from "joi-browser";
import { createTemplate } from "../../services/templateService";
import "./addSkillForm.scss";

class AddQuestForm extends FormComponent {
  state = {
    data: { name: "", skill: this.props.skill._id, isActive: true },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Quest Name"),
    skill: Joi.string().required(),
    isActive: Joi.boolean().required(),
  };

  handleChangeColor = color => {
    const { data } = this.state;
    data.color = color;
    this.setState({ data });
  };

  doSubmit = async e => {
    /* Called at the end of Form.handleSubmit */
    const { data } = this.state;
    await createTemplate(data);

    /* Used only in startup modal atm */
    this.props.onClick();
  };

  render() {
    const { data, errors } = this.state;

    return (
      <Form className="skill-form" onSubmit={this.handleSubmit}>
        <Input
          name="name"
          value={data.name}
          onChange={this.handleChange}
          // error={errors.name}
          placeholder="Quest Name"
          isAutoFocused={true}
        ></Input>
        <div className="button">
          <Button variant="danger" type="submit">
            Add Quest
          </Button>
        </div>
      </Form>
    );
  }
}

export default AddQuestForm;
