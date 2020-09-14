import React, { Component } from "react";
import Skill from "./skill";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import "./skillsEdit.scss";
import { Card } from "react-bootstrap";

class SkillsEdit extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <h3 className="title">Skills</h3>

        <div>
          {this.props.skills &&
            this.props.skills.map(skill => (
              <Skill
                key={skill._id}
                skill={skill}
                rollover={this.props.rollover}
              />
            ))}
        </div>
        <Card className="card-add-skill">
          <AddCircleOutlineIcon className="btn-add-skill" />
        </Card>
      </React.Fragment>
    );
  }
}

export default SkillsEdit;
