import React from "react";
import Joi from "joi-browser";
import { Form, Button, Card, ButtonGroup } from "react-bootstrap";
import FormComponent from "./common/form";
import Input from "./common/input";
import SkillOption from "./skillOption";
import { createTemplate } from "../services/templateService";

class TemplateForm extends FormComponent {
  state = {
    data: { name: "", description: "", xp: 15, skill: null },
    errors: {},
  };

  schema = {
    name: Joi.string().min(2).max(128).required().label("Quest Name"),
    description: Joi.string().min(2).max(2024).label("Details"),
    xp: Joi.number().required().min(5).max(25).label("Experience Points"),
    skill: Joi.string().required().label("Skill"),
  };

  handleSkillOptionClick = skill => {
    const data = this.state.data;
    data.skill = skill._id;
    this.setState({ data });
  };

  doSubmit = async e => {
    /* Called at the end of FormComponent.handleSubmit */
    const { data } = this.state;
    createTemplate(data);
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
            isAutoFocused={true}
          />
          <Input
            name="description"
            value={data.description}
            onChange={this.handleChange}
            error={errors.description}
          />
          <Input
            name="xp"
            type="range"
            value={data.xp}
            onChange={this.handleChange}
            error={errors.description}
          />
          <ButtonGroup>
            {this.props.skills &&
              this.props.skills.map(skill => (
                <SkillOption
                  skill={skill}
                  onClick={this.handleSkillOptionClick}
                />
              ))}
          </ButtonGroup>
          <div>
            <Button type="submit" variant="light">
              Create
            </Button>
          </div>
        </Form>
      </Card>
    );
  }
}

export default TemplateForm;
