import React, { Component } from "react";
import Skill from "./skill";

import "./skills.scss";

class Skills extends Component {
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
      </React.Fragment>
    );
  }
}

export default Skills;
