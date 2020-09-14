import React, { Component } from "react";
import { ProgressBar, Badge } from "react-bootstrap";

class SkillEdit extends Component {
  getBarPercentage() {
    return (this.props.skill.xp / this.props.skill.levelXp) * 100;
  }

  getBarColor() {
    if (this.props.skill.attributeRef === 1) {
      return "danger";
    }
  }

  render() {
    return (
      <div>
        <p className="skill-edit">
          <Badge variant="dark" className="level">
            Lvl. {this.props.skill.level}
          </Badge>
          {this.props.skill.name}
        </p>
        <ProgressBar
          className={this.props.rollover ? "no-transition" : ""}
          variant={this.getBarColor()}
          now={this.getBarPercentage()}
        />
      </div>
    );
  }
}

export default SkillEdit;
