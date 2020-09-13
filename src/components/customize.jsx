import React, { Component } from "react";
import TemplateForm from "./templateForm";
import Templates from "./templates";
import { Row, Container, Col } from "react-bootstrap";
import { getAllUsersSkills } from "../services/skillService";
import {
  getAllUserTemplates,
  updateTemplate,
} from "../services/templateService";

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

  render() {
    return (
      <Container>
        <Row className="main-content">
          <Col></Col>
          <Col xs={6}>
            <Templates
              templates={this.state.templates}
              onIsActiveChange={this.handleIsActiveChange}
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
