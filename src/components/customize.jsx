import React, { Component } from "react";
import TemplateForm from "./templateForm";
import Templates from "./templates";
import { Row, Container, Col } from "react-bootstrap";
import { getAllUsersSkills } from "../services/skillService";
import {
  getAllUserTemplates,
  updateTemplate,
  deleteTemplate,
} from "../services/templateService";
import SkillsEdit from "./skillsEdit";

class Customize extends Component {
  state = {};

  async componentDidMount() {
    const templates = await getAllUserTemplates();
    const skills = await getAllUsersSkills();
    this.setState({ templates, skills });
  }

  handleIsActiveChange = template => {
    // Update template state to active or inactive
    const templates = [...this.state.templates];
    const index = templates.indexOf(template);
    templates[index].isActive = !templates[index].isActive;

    const updatedTemplate = templates[index];

    this.setState({ templates });

    updateTemplate(updatedTemplate);
  };

  handleDeleteTemplate = template => {
    // Update template state to active or inactive
    const templates = [...this.state.templates];
    const index = templates.indexOf(template);
    templates.splice(index, 1);

    this.setState({ templates });

    deleteTemplate(template);
  };

  render() {
    return (
      <Container>
        <Row className="main-content">
          <Col>
            <SkillsEdit skills={this.state.skills}></SkillsEdit>
          </Col>
          <Col xs={6}>
            <Templates
              templates={this.state.templates}
              onIsActiveChange={this.handleIsActiveChange}
              onDeleteTemplate={this.handleDeleteTemplate}
            />
          </Col>
          <Col>
            <TemplateForm skills={this.state.skills} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Customize;
