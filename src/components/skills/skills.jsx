import React, { Component } from 'react';
import Skill from '../skill/skill';

import './skills.scss'

class Skills extends Component {
  state = {
    skills: [{
      _id: 1,
      name: "Athletics",
      level: 2,
      attributeRef: 1,
      currentXP: 20,
      totalXP: 100,
    },
    {
      _id: 2,
      name: "Computer Science",
      level: 3,
      attributeRef: 3,
      currentXP: 20,
      totalXP: 200,
    },
    {
      _id: 3,
      name: "Willpower",
      level: 1,
      attributeRef: 3,
      currentXP: 45,
      totalXP: 50,
    }]
  }
  render() {
    return (
      <React.Fragment>
        <h3 className="skills-title">Skills</h3>
        <div>
          {this.state.skills.map(skill => <Skill key={skill.id} skill={skill} />)}
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;