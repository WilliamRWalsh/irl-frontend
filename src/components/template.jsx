import React, { Component } from "react";
import { Accordion, Card, Badge } from "react-bootstrap";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import "./quest.scss";

class Template extends Component {
  renderTemplateStatus() {
    if (this.props.template.isActive === true)
      return (
        <CheckCircleIcon
          className="complete-btn completed"
          onClick={() => this.props.onIsActiveChange(this.props.template)}
        />
      );
    return (
      <RadioButtonUncheckedIcon
        className="complete-btn"
        onClick={() => this.props.onIsActiveChange(this.props.template)}
      />
    );
  }

  render() {
    return (
      <Card>
        <Card.Header>
          {this.renderTemplateStatus()}
          <span>{this.props.template.name}</span>
          <span className="xp">
            {this.props.template.xp} XP
            <Accordion.Toggle
              className="arrow"
              as={Badge}
              eventKey={this.props.template._id}
            >
              <KeyboardArrowDownIcon />
            </Accordion.Toggle>
          </span>
        </Card.Header>

        <Accordion.Collapse eventKey={this.props.template._id}>
          <Card.Body>{this.props.template.description}</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}

export default Template;
