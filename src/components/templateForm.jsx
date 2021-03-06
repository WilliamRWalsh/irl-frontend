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
    name: Joi.string().required().label("Quest Name"),
    description: Joi.string().label("Details"),
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
            label="Quest Name"
            value={data.name}
            onChange={this.handleChange}
            error={errors.name}
            isAutoFocused={true}
          />
          <Input
            name="description"
            label="Description"
            value={data.description}
            onChange={this.handleChange}
            error={errors.description}
          />
          <Input
            name="xp"
            label="Experience Points"
            type="range"
            min={5}
            max={25}
            step={5}
            value={data.xp}
            onChange={this.handleChange}
            error={errors.xp}
          />
          <div>
            <Form.Label>Skill</Form.Label>
          </div>
          <ButtonGroup>
            {this.props.skills &&
              this.props.skills.map(skill => (
                <SkillOption
                  key={skill._id}
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
