import React, { Component } from "react";
import Skill from "./skill";

import "./skills.scss";
import { getAllUsersSkills } from "../services/skillService";

class Skills extends Component {
  state = {};

  async componentDidMount() {
    const skills = await getAllUsersSkills();
    this.setState({ skills });
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="skills-title">Skills</h3>
        <div>
          {this.state.skills &&
            this.state.skills.map(skill => (
              <Skill key={skill._id} skill={skill} />
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;
