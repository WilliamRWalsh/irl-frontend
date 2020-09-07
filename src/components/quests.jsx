import React, { Component } from "react";
import Quest from "./quest";
import { Accordion } from "react-bootstrap";

import "./quests.scss";

class Quests extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <h3 className="quests-title">Quests</h3>
        <Accordion>
          {this.props.quests &&
            this.props.quests.map(quest => (
              <Quest
                key={quest._id}
                quest={quest}
                onCompleted={this.props.onCompleted}
              />
            ))}
        </Accordion>
      </React.Fragment>
    );
  }
}

export default Quests;
