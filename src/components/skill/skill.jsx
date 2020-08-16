import React, { Component } from 'react';
import { ProgressBar, Badge } from 'react-bootstrap'

import './skill.scss'

class Skill extends Component {

  getBarPercentage() {
    return this.props.skill.currentXP / this.props.skill.totalXP * 100;
  }

  getBarColor() {
    if (this.props.skill.attributeRef === 1) {
      return "danger"
    }
  }

  render() {
    return (

      <div className="skill-bar">
        <p>
          <Badge variant="dark" className="level">Lvl. {this.props.skill.level}</Badge>
          {this.props.skill.name}
        </p>
        <ProgressBar variant={this.getBarColor()} now={this.getBarPercentage()} />
      </div>);
  }
}

export default Skill;