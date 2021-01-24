import { green } from "@material-ui/core/colors";
import React, { Component } from "react";
import { ProgressBar, Badge } from "react-bootstrap";
import { getVariantColor } from "../utils/color";

import "./skill.scss";

class Skill extends Component {
  getBarPercentage() {
    return (this.props.skill.xp / this.props.skill.levelXp) * 100;
  }

  render() {
    return (
      <div className="skill-bar">
        <p>
          <Badge variant="dark" className="level">
            Lvl. {this.props.skill.level}
          </Badge>
          {this.props.skill.name}
        </p>
        <ProgressBar
          className={this.props.rollover ? "no-transition" : ""}
          variant={getVariantColor(this.props.skill.color)}
          now={this.getBarPercentage()}
        />
      </div>
    );
  }
}

export default Skill;
