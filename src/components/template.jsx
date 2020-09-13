import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ClearIcon from "@material-ui/icons/Clear";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import "./template.scss";

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
            <btn
              onClick={() => this.props.onDeleteTemplate(this.props.template)}
            >
              <ClearIcon className="delete-x" />
            </btn>
          </span>
        </Card.Header>
      </Card>
    );
  }
}

export default Template;
