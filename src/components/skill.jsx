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
    const cssProperties = { "--progress-bar-color": this.props.skill.color };
    return (
      <div className="skill-bar">
        <p>
          <Badge variant="dark" className="level">
            Lvl. {this.props.skill.level}
          </Badge>
          {this.props.skill.name}
        </p>
        <ProgressBar
          style={cssProperties}
          className={this.props.rollover ? "no-transition" : ""}
          // style={{ "background-color": this.props.skill.color }}
          // variant={this.props.skill.color}
          // style={{ "background-color": this.props.skill.color }}
          now={this.getBarPercentage()}
        />
      </div>
    );
  }
}

export default Skill;
