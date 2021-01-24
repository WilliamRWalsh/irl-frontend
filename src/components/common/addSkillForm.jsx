import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Input from "./input";
import FormComponent from "./form";
import Joi from "joi-browser";
import { createSkill } from "../../services/skillService";
import ColorPicker from "./colorPicker";
import "./addSkillForm.scss";
import { getColorList } from "../../utils/color";

class AddSkillForm extends FormComponent {
  state = {
    data: { name: "", color: getColorList()[0] },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Skill Name"),
    color: Joi.string().required().label("Skill Color"),
  };

  handleChangeColor = color => {
    const { data } = this.state;
    data.color = color;
    this.setState({ data });
  };

  doSubmit = async e => {
    /* Called at the end of Form.handleSubmit */
    const { data } = this.state;
    const skill = await createSkill(data);

    /* Used only in startup modal atm */
    this.props.onClick(skill);
  };

  render() {
    const { data, errors } = this.state;

    return (
      <Form className="skill-form" onSubmit={this.handleSubmit}>
        <div className="same-line">
          <Input
            name="name"
            value={data.name}
            onChange={this.handleChange}
            // error={errors.name}
            placeholder="Skill Name"
            isAutoFocused={true}
          ></Input>
          <ColorPicker onChange={this.handleChangeColor} />
        </div>
        <div className="button">
          <Button variant="danger" type="submit">
            Add Skill
          </Button>
        </div>
      </Form>
    );
  }
}

export default AddSkillForm;

{
  /* <Input
  name="color"
  value={data.color}
  onChange={this.handleChange}
  error={errors.color}
  placeholder="Skill Color"
/> */
}
