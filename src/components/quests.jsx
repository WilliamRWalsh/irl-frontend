import React, { Component } from "react";
import Quest from "./quest";
import { Accordion } from "react-bootstrap";

import "./quests.scss";
import { getAllUsersQuests, completeQuest } from "../services/questService";

class Quests extends Component {
  state = {};

  async componentDidMount() {
    const quests = await getAllUsersQuests();
    this.setState({ quests });
  }

  handleCompleted = quest => {
    const quests = [...this.state.quests];
    const index = quests.indexOf(quest);
    quests[index].isCompleted = true;
    this.setState({ quests });

    completeQuest(quest);
  };

  render() {
    return (
      <React.Fragment>
        <h3 className="quests-title">Quests</h3>
        <Accordion>
          {this.state.quests &&
            this.state.quests.map(quest => (
              <Quest
                key={quest._id}
                quest={quest}
                onCompleted={this.handleCompleted}
              />
            ))}
        </Accordion>
      </React.Fragment>
    );
  }
}

export default Quests;
